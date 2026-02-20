from fastapi import APIRouter, UploadFile, File
from pydantic import BaseModel
import os
import pickle
import shutil

router = APIRouter()

MODEL_FILE = "app/models/model.pkl"  # single default model

class PredictRequest(BaseModel):
    data: list

@router.post("/models/upload")
async def upload_model(file: UploadFile = File(...)):
    os.makedirs("app/models", exist_ok=True)
    file_path = MODEL_FILE

    try:
        with open(file_path, "wb") as f:
            shutil.copyfileobj(file.file, f)
    except Exception as e:
        return {"error": f"Failed to save model: {str(e)}"}
    
    return {"message": "Model uploaded successfully"}

@router.post("/models/predict")
async def predict(request: PredictRequest):
    if not os.path.exists(MODEL_FILE):
        return {"error": "Model file not found. Upload it first at /models/upload"}

    # 1️⃣ Load model
    try:
        with open(MODEL_FILE, "rb") as f:
            model = pickle.load(f)
    except Exception as e:
        return {"error": f"Failed to load model: {str(e)}"}

    # 2️⃣ Prepare input
    input_data = request.data
    if not isinstance(input_data[0], list):
        input_data = [input_data]

    # 3️⃣ Convert all values to float
    try:
        input_data = [[float(x) for x in row] for row in input_data]
    except ValueError as e:
        return {"error": f"All inputs must be numbers: {str(e)}"}

    # 4️⃣ Predict
    try:
        prediction = model.predict(input_data)
    except Exception as e:
        return {"error": f"Prediction failed: {str(e)}"}

    # 5️⃣ Return results
    return {"prediction": prediction.tolist()}