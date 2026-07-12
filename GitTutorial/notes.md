Notes

Git Notes
Git Commands
git --help
git help -a
Git branch is to isolate your work from the main codebase so you can safely develop features, fix bugs, or experiment without breaking the working application
Git Hosting Platforms
1.Github - opensource project beginner
2.GitLab - Built in CI/CD more private repo features
3.Bitbucket - Great for teams intergrates with Jira
CI/CD stands for Continuous Integration and Continuous Deployment
Jira
SHA-1 Hash
SHA-256
DevOps
Testing
Testing Platforms
Release Branch
VirtualBox - Linux

Version Control Systems
A server is a computer or software program that provides data, services, or resources to other computers, known as "clients," over a network.

Repository: A central location that stores all project files along with their complete change history and metadata like author and commit message. Storage space.
Revision: A specific saved version of a file or project, identified using a unique ID such as a hash or number.
Branch: A separate copy of the codebase used to develop features or fix bugs without affecting the main code.
Merging: The process of combining changes from one branch into another, which may sometimes require resolving conflicts.
Commit: A snapshot of changes made to the codebase at a specific time, used to track and manage project history.

openSource Projects

Types of Branches
Main Branch: The primary stable codebase, usually main or master.
Feature Branches: For new features, e.g., feature-login.
Bugfix Branches: For fixing bugs, e.g., bugfix-header.
Release Branches: For preparing a version for production.

Review Linux Commands
 
 git push -u origin master

gitignore - track unnecessary or sensitive  files *.log

git rm --cached -r <file>

Basic Structure of README.md
A typical README.md may include the following sections:

Project Title : The name of project, usually written as a main heading in Markdown to clearly identify the repository.
Description: A short explanation of what the project does and its purpose.
Installation: Steps required to set up and install the project locally.
Usage: Examples showing how to run or use the project.
Contributing: Guidelines for developers who want to contribute to the project.
License: Information about the software license (e.g., MIT License, Apache License).
Contact: Maintainer’s email or other contact information for support or queries.

Git: A distributed version control system used to track and manage code changes locally with features like branching and merging.
GitHub: A web-based platform that hosts Git repositories and enables collaboration through pull requests, issues and team management.

requests issues code reviews

virtual box - iso image - ubuntu - kali linux - GeeksForGeeks - setup GitServer on Ubuntu
How to install git

refs - stores branch pointers and tags
head - pointer to the current active branch

HEAD: Points to the current branch (usually main).
config: Stores repository settings like username, email, and Git preferences.
description: Contains a short description of the repository (optional).
objects folder: Stores Git data such as file versions, commits, and snapshots.
refs folder: Holds references to branches and tags that point to commits.

git commit --amend - edit  or update recent commit message
git commit --amend --date="now"
git commit-am "msg" - adds and commits changes to already tracked files
git remote add origin <URL>
git push --set-upstream origin main
git push origin-delete <branch>
git remote set-url origin <new-url>

1. Getting started - initialize a repository add files commit changes check status savework in Git
2. Remote repository - adding remotes cloning projects pushing local commits pushing updates setting upstream branches

git remote add origin https://github.com/kevin-chela/Tutorial.git
git branch -M main
git push -u origin main

moving file to a directory -  mv Features.png File2 References
Pratical Git Branch

Review Git stash - sticky notes
--verbose - details

Git stash

rm -fr ".git/rebase-merge"

git checkout -b Test
git push -u origin Test

git branch -d Test Delete local branch
git push origin --delete Test Delete remote branch
git branch -r List remote branches
git branchList local branches

branch allows developers to work on features bugs and experiments without affecting the main code base

Best practice going forward:
Always commit or stash before switching branches — keeps your changes tied to the right branch and avoids confusion.

git stash save "<Stashing Message>" 

git reset –hard - dont keep your changes
git reset –soft - move HEAD to prevoius commit while keeps your changes
git reset --mixed 

git revert HEAD~3
git reset HEAD~

git reset -hard HEAD~
git reset -soft HEAD^

git reflog

git reset - undo commits locally
git revert - new commit that reverses previous changes keeps history
git checkout -filename - restore files in working directory to last committed state

git reset file_name - unstage a file
git add-p stages interactively
git clean -f-d
git clean -f-x
git clean-i

git tracks only files not directories


Terms
Fast Forward Merge ???
Squash

git merge --abort

Git Rebase
Comparison main and feature branch
git rebase -i HEAD~3 - squash

Fork

Recover Commits
git reflog
git cherry-pick <commithash>

shell command
git submodule add <file>
git tag
git tag -a {name} -m"message"

git hooks - streamline development process e.g coding standards, running tests, generting documentation, sending notifications

Linux Practical
find notes.md
cat notes.md
rm notes.md

mv feature.txt tester.txt GitTutorial

Redhat Automation

Next Phase GitHooks

mkdir -p GitHooks/hooks ?? -p
usage of cat
chmod +x GitTutorial/GitHooks/hooks/*