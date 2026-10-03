# MiniML

A lightweight machine learning platform with a React/TypeScript frontend, Python backend, and Docker orchestration.

## Architecture

```
Frontend (React + TS) -- HTTP -- Backend (Python FastAPI)
            |________ Docker Compose ________|
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, TypeScript |
| Backend | Python, FastAPI |
| ML | scikit-learn / PyTorch |
| Orchestration | Docker Compose |

## Getting Started

```bash
git clone https://github.com/atharvez/MiniML.git
cd MiniML
docker-compose up --build
```

- Frontend: http://localhost:3000
- API: http://localhost:8000
- API Docs: http://localhost:8000/docs

## Features

- Model training -- train models via UI
- Predictions -- run inference on new data
- Visualizations -- model performance metrics
- Hyperparameter tuning -- adjust parameters interactively

## License

MIT (c) Atharva Desai