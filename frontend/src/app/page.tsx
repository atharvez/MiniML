"use client"; 

import { useState } from "react";
import { uploadModel, predict } from "./api";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [inputData, setInputData] = useState<string>("");
  const [prediction, setPrediction] = useState<number[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return alert("Select a model file first");
    try {
      const res = await uploadModel(file);
      alert(res.data.message);
    } catch (err: any) {
      console.error(err);
      alert("Upload failed");
    }
  };

  const handlePredict = async () => {
    try {
      const arr = inputData.split(",").map((x) => parseFloat(x.trim()));
      const res = await predict(arr);
      setPrediction(res.data.prediction);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.error || "Prediction failed");
      setPrediction(null);
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">ML Prediction Demo</h1>

      <div className="mb-6">
        <h2 className="font-semibold">Upload Model (.pkl)</h2>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <button
          onClick={handleUpload}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Upload
        </button>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold">Predict</h2>
        <input
          type="text"
          placeholder="Enter comma-separated numbers"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          className="border px-2 py-1 mr-2"
        />
        <button
          onClick={handlePredict}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Predict
        </button>
      </div>

      {prediction && (
        <div className="mb-4 text-lg">
          <strong>Prediction:</strong> {JSON.stringify(prediction)}
        </div>
      )}

      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
