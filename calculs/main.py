from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    resultat = {"message": "L'api de calcul et coordination des protections electrique"}
    print("resulta de la root", resultat)
    return resultat