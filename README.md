# Tutorial

A hands-on learning repository covering core software development topics through structured notes, skill files, and real Git workflows.

## Topics Covered

1. GitTutorial
2. DevOps Tutorial

## Repo Structure

Tutorial/
├── GitTutorial/
│ ├── README.md
│ ├── notes.md
│ └── Hooks/
├── DevOps/
│ ├── README.md
│ └── notes.md
├── .github/
│ └── workflows/
│ └── deploy.yml
├── .gitignore
└── README.md

## Git Concepts Practiced

- Branching and merging strategies
- Fast forward vs recursive merge
- Git rebase and squash
- Git stash workflow
- Git hooks — pre-commit, prepare-commit-msg, post-commit
- GitHub Actions — Deploy to GitHub Pages
- Conflict resolution
- Reset vs revert vs checkout

## Workflow

```bash
# Clone the repo
git clone https://github.com/kevin-chela/Tutorial.git

# Clone a single topic
git clone --single-branch --branch <topic> https://github.com/kevin-chela/Tutorial.git

# Sync with remote
git pull origin main
```
# To separate topic
git checkout branch

## GitHub Pages

This repo is deployed via GitHub Actions to GitHub Pages.

Live URL: `https://kevin-chela.github.io/Tutorial/`

## Author

**Kevin Chela**  
[github.com/kevin-chela](https://github.com/kevin-chela)