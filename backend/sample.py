# create_model.py
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
import pickle
import os

# Load dataset
X, y = load_iris(return_X_y=True)

# Train model
model = RandomForestClassifier()
model.fit(X, y)

# Save model
os.makedirs("app/models", exist_ok=True)
with open("app/models/model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ model.pkl saved in app/models/")