# MiniML ðŸ¤–

A lightweight machine learning platform with a React/TypeScript frontend, Python backend, and Docker orchestration.

## Architecture

```
Frontend (React + TS) â”€â”€HTTPâ”€â”€ Backend (Python FastAPI)
            â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ Docker Compose â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
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

- ðŸ‹ï¸ **Model Training** â€” Train models via UI
- ðŸ“Š **Predictions** â€” Run inference on new data
- ðŸ“ˆ **Visualizations** â€” Model performance metrics
- ðŸ”§ **Hyperparameter Tuning** â€” Adjust parameters interactively

## License

MIT Â© [Atharva Desai](https://github.com/atharvez)