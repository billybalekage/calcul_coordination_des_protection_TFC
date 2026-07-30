from fastapi import FastApi 

app = FastApi()

@app.get("/")
def read_root():
    return ("message": "L'api de calcul et coordination des protections electrique")