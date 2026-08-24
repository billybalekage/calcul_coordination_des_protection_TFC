import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  CheckCircle2,
  CircleAlert,
  LoaderCircle,
  Plus,
  Save,
  ShieldCheck,
  Trash2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  deleteCircuit,
  getProject,
  addCircuit,
  savePowerSupply,
  updateCircuit,
} from "@/lib/projects/projects";
import { Input } from "@/components/ui/input";
import { calculateProject } from "@/lib/calculations/calculations";

const CIRCUIT_TYPES = [
  ["ECLAIRAGE", "Eclairage"],
  ["PRISE_COURANT", "Prises de courant"],
  ["CHAUFFAGE", "Chauffage"],
  ["FORCE_MOTRICE", "Moteur"],
  ["CLIMATISATION", "Climatisation"],
  ["AUTRE", "Autre"],
];
const SECTIONS = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120];
const BREAKERS = [6, 10, 13, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160];

const emptyCircuit = () => ({
  name: "",
  type: "ECLAIRAGE",
  totalPower: "",
  circuitCount: 1,
  distance: "",
  cosPhi: 1,
  utilizationFactor: 1,
  simultaneityFactor: 1,
  cableMaterial: "CUIVRE",
  cableIsolation: "PVC",
  modePose: "ENCASTRE_DANS_MUR",
  protectionType: "DISJONCTEUR",
  ratedCurrent: 10,
  numberOfPoles: 1,
  curveType: "C",
  breakingCapacity: 6000,
  selectivityVerified: false,
});

const initialSupply = {
  type: "MONOPHASE",
  nominalVoltage: 230,
  frequency: 50,
  regimeNeutre: "TT",
  distanceSourceToTGBT: 0,
  standard: "NFC_15_100",
};

function Field({ label, children }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-slate-700">
      {label}
      {children}
    </label>
  );
}

function Select({ value, onChange, children }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="h-9 rounded-lg border border-slate-300 bg-white px-2 text-sm outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
    >
      {children}
    </select>
  );
}

function Status({ value }) {
  const isPass = value === "PASS";
  const isFail = value === "FAIL";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
        isPass
          ? "bg-emerald-50 text-emerald-700"
          : isFail
            ? "bg-red-50 text-red-700"
            : "bg-amber-50 text-amber-700"
      }`}
    >
      {isPass ? (
        <CheckCircle2 className="size-3.5" />
      ) : (
        <CircleAlert className="size-3.5" />
      )}
      {isPass ? "Conforme" : isFail ? "Non conforme" : "A vérifier"}
    </span>
  );
}

export default function ProjectCalculation() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [supply, setSupply] = useState(initialSupply);
  const [circuits, setCircuits] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [calculating, setCalculating] = useState(false);

  useEffect(() => {
    let active = true;
    getProject(projectId)
      .then((data) => {
        if (!active) return;
        setProject(data);
        if (data.powerSupply) setSupply(data.powerSupply);
        setCircuits(
          (data.circuits || []).map((circuit) => ({
            ...emptyCircuit(),
            ...circuit,
            distance: circuit.distance ?? "",
          })),
        );
        if (data.result) setResult(data.result);
      })
      .catch(() => toast.error("Impossible de charger le projet."))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [projectId]);

  function updateCircuit(index, field, value) {
    async function removeCircuit(index) {
      const circuit = circuits[index];
      try {
        if (circuit.id) await deleteCircuit(projectId, circuit.id);
        setCircuits((current) =>
          current.filter((_, circuitIndex) => circuitIndex !== index),
        );
        toast.success("Circuit supprimé.");
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Impossible de supprimer le circuit.",
        );
      }
    }
    <div className="mb-5 flex items-center justify-between">
      <h3 className="font-semibold">Départ {index + 1}</h3>
      <Button
        variant="ghost"
        size="icon"
        title="Supprimer le circuit"
        onClick={() => removeCircuit(index)}
      >
        <Trash2 className="size-4 text-red-600" />
      </Button>
    </div>;
    setCircuits((current) =>
      current.map((circuit, circuitIndex) =>
        circuitIndex === index ? { ...circuit, [field]: value } : circuit,
      ),
    );
  }

  async function saveCircuit(circuit) {
    const payload = {
      name: circuit.name,
      type: circuit.type,
      totalPower: Number(circuit.totalPower),
      circuitCount: Number(circuit.circuitCount),
      distance: Number(circuit.distance),
      cosPhi: Number(circuit.cosPhi),
      utilizationFactor: Number(circuit.utilizationFactor),
      simultaneityFactor: Number(circuit.simultaneityFactor),
      ratedCurrent: Number(circuit.ratedCurrent),
      numberOfPoles: Number(circuit.numberOfPoles),
      breakingCapacity: Number(circuit.breakingCapacity),
      cableMaterial: circuit.cableMaterial,
      cableIsolation: circuit.cableIsolation,
      modePose: circuit.modePose,
      correctionFactors: circuit.correctionFactors || {},
      selectivityVerified: Boolean(circuit.selectivityVerified),
    };
    if (circuit.id) {
      await updateCircuit(projectId, circuit.id, payload);
      return circuit;
    } else {
      return addCircuit(projectId, payload);
    }
  }

  async function handleSave() {
    if (!circuits.length) {
      toast.error("Ajoutez au moins un circuit.");
      return;
    }
    setSaving(true);
    try {
      await savePowerSupply(projectId, {
        type: supply.type,
        nominalVoltage: Number(supply.nominalVoltage),
        frequency: Number(supply.frequency),
        regimeNeutre: supply.regimeNeutre,
        distanceSourceToTGBT: Number(supply.distanceSourceToTGBT || 0),
        standard: supply.standard,
      });
      const savedCircuits = await Promise.all(circuits.map(saveCircuit));
      setCircuits((current) =>
        current.map((circuit, index) => ({
          ...circuit,
          id: savedCircuits[index]?.id || circuit.id,
        })),
      );
      toast.success("Configuration enregistrée.");
      return true;
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Impossible d'enregistrer la configuration.",
      );
      return false;
    } finally {
      setSaving(false);
    }
  }

  async function handleCalculate() {
    setCalculating(true);
    try {
      const saved = await handleSave();
      if (!saved) return;
      const calculation = await calculateProject(projectId);
      setResult(calculation);
      toast.success("Dimensionnement terminé.");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Le calcul est impossible. Vérifiez les données.",
      );
    } finally {
      setCalculating(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center gap-2 text-slate-500">
        <LoaderCircle className="size-4 animate-spin" /> Chargement du projet...
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#f4f7f8] px-4 py-6 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-7 flex flex-wrap items-start justify-between gap-4">
          <div>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-cyan-700"
            >
              <ArrowLeft className="size-4" /> Mes projets
            </button>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              Dimensionnement assisté
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight">
              {project?.name}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              NF C 15-100 et IEC 60364 · résultats par circuit
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleSave}
              disabled={saving || calculating}
            >
              <Save className="size-4" />{" "}
              {saving ? "Enregistrement..." : "Enregistrer"}
            </Button>
            <Button
              onClick={handleCalculate}
              disabled={saving || calculating}
              className="bg-cyan-700 text-white hover:bg-cyan-800"
            >
              <Zap className="size-4" />{" "}
              {calculating ? "Calcul..." : "Lancer le dimensionnement"}
            </Button>
          </div>
        </header>

        <section className="mb-6 grid gap-4 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Zap className="size-5 text-cyan-700" />
              <h2 className="font-semibold">Alimentation</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Réseau">
                <Select
                  value={supply.type}
                  onChange={(e) =>
                    setSupply({ ...supply, type: e.target.value })
                  }
                >
                  <option value="MONOPHASE">Monophasé</option>
                  <option value="TRIPHASE">Triphasé</option>
                </Select>
              </Field>
              <Field label="Tension nominale (V)">
                <Input
                  type="number"
                  min="1"
                  value={supply.nominalVoltage}
                  onChange={(e) =>
                    setSupply({
                      ...supply,
                      nominalVoltage: Number(e.target.value),
                    })
                  }
                />
              </Field>
              <Field label="Régime de neutre">
                <Select
                  value={supply.regimeNeutre}
                  onChange={(e) =>
                    setSupply({ ...supply, regimeNeutre: e.target.value })
                  }
                >
                  <option>TT</option>
                  <option>TN</option>
                  <option>IT</option>
                </Select>
              </Field>
              <Field label="Standard">
                <Select
                  value={supply.standard}
                  onChange={(e) =>
                    setSupply({ ...supply, standard: e.target.value })
                  }
                >
                  <option value="NFC_15_100">NF C 15-100</option>
                  <option value="IEC_60364">IEC 60364</option>
                </Select>
              </Field>
            </div>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            <div className="mb-2 flex items-center gap-2 font-semibold">
              <ShieldCheck className="size-5" /> Contrôle de sécurité
            </div>
            <p>
              Les sections et protections sont vérifiées par circuit avec les
              facteurs saisis. La sélectivité et la filiation restent à
              confirmer avec les données du fabricant.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Circuits</h2>
              <p className="text-sm text-slate-500">
                Un câble et une protection indépendants pour chaque départ.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setCircuits([...circuits, emptyCircuit()])}
            >
              <Plus className="size-4" /> Ajouter un circuit
            </Button>
          </div>
          {circuits.map((circuit, index) => (
            <article
              key={`${circuit.id || "new"}-${index}`}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-semibold">Départ {index + 1}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  title="Supprimer le circuit"
                  onClick={() =>
                    setCircuits(
                      circuits.filter(
                        (_, circuitIndex) => circuitIndex !== index,
                      ),
                    )
                  }
                >
                  <Trash2 className="size-4 text-red-600" />
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                <Field label="Nom">
                  <Input
                    value={circuit.name}
                    placeholder="Eclairage séjour"
                    onChange={(e) =>
                      updateCircuit(index, "name", e.target.value)
                    }
                  />
                </Field>
                <Field label="Usage">
                  <Select
                    value={circuit.type}
                    onChange={(e) =>
                      updateCircuit(index, "type", e.target.value)
                    }
                  >
                    {CIRCUIT_TYPES.map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </Select>
                </Field>
                <Field label="Puissance totale (W)">
                  <Input
                    type="number"
                    min="0"
                    value={circuit.totalPower}
                    onChange={(e) =>
                      updateCircuit(index, "totalPower", e.target.value)
                    }
                  />
                </Field>
                <Field label="Distance (m)">
                  <Input
                    type="number"
                    min="0"
                    value={circuit.distance}
                    onChange={(e) =>
                      updateCircuit(index, "distance", e.target.value)
                    }
                  />
                </Field>
                <Field label="Quantité">
                  <Input
                    type="number"
                    min="1"
                    value={circuit.circuitCount}
                    onChange={(e) =>
                      updateCircuit(index, "circuitCount", e.target.value)
                    }
                  />
                </Field>
                <Field label="cos φ">
                  <Input
                    type="number"
                    min="0.01"
                    max="1"
                    step="0.01"
                    value={circuit.cosPhi}
                    onChange={(e) =>
                      updateCircuit(index, "cosPhi", e.target.value)
                    }
                  />
                </Field>
                <Field label="Facteur d'utilisation">
                  <Input
                    type="number"
                    min="0.01"
                    max="1"
                    step="0.01"
                    value={circuit.utilizationFactor}
                    onChange={(e) =>
                      updateCircuit(index, "utilizationFactor", e.target.value)
                    }
                  />
                </Field>
                <Field label="Facteur de simultanéité">
                  <Input
                    type="number"
                    min="0.01"
                    max="1"
                    step="0.01"
                    value={circuit.simultaneityFactor}
                    onChange={(e) =>
                      updateCircuit(index, "simultaneityFactor", e.target.value)
                    }
                  />
                </Field>
              </div>
              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Câble et installation
                </p>
                <div className="grid gap-4 md:grid-cols-4">
                  <Field label="Conducteur">
                    <Select
                      value={circuit.cableMaterial}
                      onChange={(e) =>
                        updateCircuit(index, "cableMaterial", e.target.value)
                      }
                    >
                      <option>CUIVRE</option>
                      <option>ALUMINIUM</option>
                    </Select>
                  </Field>
                  <Field label="Isolation">
                    <Select
                      value={circuit.cableIsolation}
                      onChange={(e) =>
                        updateCircuit(index, "cableIsolation", e.target.value)
                      }
                    >
                      <option>PVC</option>
                      <option>XLPE</option>
                      <option>EPR</option>
                    </Select>
                  </Field>
                  <Field label="Mode de pose">
                    <Select
                      value={circuit.modePose}
                      onChange={(e) =>
                        updateCircuit(index, "modePose", e.target.value)
                      }
                    >
                      <option value="ENCASTRE_DANS_MUR">
                        Encastre dans mur
                      </option>
                      <option value="SOUS_CONDUIT_EN_SAILLIE">
                        Sous conduit
                      </option>
                      <option value="AIR_LIBRE">Air libre</option>
                      <option value="CHEMINEE_DE_CABLES">
                        Cheminée de câbles
                      </option>
                      <option value="ENTERRE">Enterré</option>
                    </Select>
                  </Field>
                  <Field label="Facteur de correction">
                    <Input
                      type="number"
                      min="0.01"
                      max="1"
                      step="0.01"
                      value={circuit.correctionFactors?.grouping || 1}
                      onChange={(e) =>
                        updateCircuit(index, "correctionFactors", {
                          ...(circuit.correctionFactors || {}),
                          grouping: Number(e.target.value),
                        })
                      }
                    />
                  </Field>
                </div>
              </div>
              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Protection du départ
                </p>
                <div className="grid gap-4 md:grid-cols-5">
                  <Field label="Type">
                    <Select
                      value={circuit.protectionType}
                      onChange={(e) =>
                        updateCircuit(index, "protectionType", e.target.value)
                      }
                    >
                      <option>DISJONCTEUR</option>
                      <option>FUSIBLE</option>
                      <option>INTERRUPTEUR_SECTIONNEUR</option>
                    </Select>
                  </Field>
                  <Field label="Calibre (A)">
                    <Select
                      value={circuit.ratedCurrent}
                      onChange={(e) =>
                        updateCircuit(
                          index,
                          "ratedCurrent",
                          Number(e.target.value),
                        )
                      }
                    >
                      {BREAKERS.map((value) => (
                        <option key={value}>{value}</option>
                      ))}
                    </Select>
                  </Field>
                  <Field label="Courbe">
                    <Select
                      value={circuit.curveType}
                      onChange={(e) =>
                        updateCircuit(index, "curveType", e.target.value)
                      }
                    >
                      {["B", "C", "D", "K", "Z"].map((value) => (
                        <option key={value}>{value}</option>
                      ))}
                    </Select>
                  </Field>
                  <Field label="Pôles">
                    <Select
                      value={circuit.numberOfPoles}
                      onChange={(e) =>
                        updateCircuit(
                          index,
                          "numberOfPoles",
                          Number(e.target.value),
                        )
                      }
                    >
                      {[1, 2, 3, 4].map((value) => (
                        <option key={value}>{value}</option>
                      ))}
                    </Select>
                  </Field>
                  <Field label="Pouvoir de coupure (A)">
                    <Input
                      type="number"
                      min="1"
                      value={circuit.breakingCapacity}
                      onChange={(e) =>
                        updateCircuit(index, "breakingCapacity", e.target.value)
                      }
                    />
                  </Field>
                </div>
              </div>
            </article>
          ))}
        </section>

        {result && (
          <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  Résultats du dimensionnement
                </h2>
                <p className="text-sm text-slate-500">
                  Résultats calculés selon{" "}
                  {result.standard === "NFC_15_100"
                    ? "NF C 15-100"
                    : result.standard}
                  .
                </p>
              </div>
              <Status value={result.coordinationCheck} />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Courant de conception</p>
                <p className="mt-1 text-xl font-bold">
                  {Number(result.currentDesign).toFixed(2)} A
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Section maximale</p>
                <p className="mt-1 text-xl font-bold">
                  {result.recommendedCableSection} mm²
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Chute de tension</p>
                <p className="mt-1 text-xl font-bold">
                  {Number(result.voltageDropPercent).toFixed(2)} %
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Pouvoir de coupure</p>
                <p className="mt-1 text-xl font-bold">
                  {result.breakerBreakingCapacity} A
                </p>
              </div>
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="border-b border-slate-200 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="py-3">Circuit</th>
                    <th>Ib / Id</th>
                    <th>Section</th>
                    <th>Iz corrigé</th>
                    <th>Protection</th>
                    <th>Chute U</th>
                    <th>Contrôles</th>
                  </tr>
                </thead>
                <tbody>
                  {(result.perCircuit || []).map((item) => (
                    <tr
                      key={item.circuitName}
                      className="border-b border-slate-100"
                    >
                      <td className="py-3 font-semibold">{item.circuitName}</td>
                      <td>
                        {Number(item.ib).toFixed(2)} /{" "}
                        {Number(item.iDesign).toFixed(2)} A
                      </td>
                      <td>{item.recommendedSection} mm²</td>
                      <td>{Number(item.izCorrected).toFixed(1)} A</td>
                      <td>{item.recommendedBreaker} A</td>
                      <td>{Number(item.voltageDropPercent).toFixed(2)} %</td>
                      <td>
                        <div className="flex flex-wrap gap-1">
                          <Status value={item.overloadCheck} />
                          <Status value={item.voltageDropCheck} />
                          <Status value={item.coordinationCheck} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
