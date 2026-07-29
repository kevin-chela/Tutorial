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
Hotfix Branch: Used to quickly fix critical  production issues
Develop Branch: Combines all completed features for intergration testing and ongoing development

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

Shell
Script

Patch - contains all difference between branches or commits

History
git log
git log --oneline
git log --stat
git log -p
git show <commitid>
git show --stat <commitid>
git shortlog
git shortlog -n -s
git log --author="name"
git log -5 --oneline
git log --merges
git log --no-merges

git commit --amend |-m "Update"| --no-edit - update last commit - no changes
git rebase
git rebase -i HEAD~3
Interactive

git add - move changes form working directory to staging area options -A -u .

Git Debugging** - Review
tools - git bisect

Binary Search

Error Search and Handling in Git                                  
DevOps
- Trouble shoot resolves issues and manage chnages effectively
- Allows reverting correcting unwanted changes improve reliability and version control management

git reset <filename/dirname> - unstage specific file
git commit --amend <filename> - update last commit
Edit the Most Recent Message
git reset --mixed HEAD~ - remove unwanted files like personal data
git reset --mixed <commit-id>
Ignore local changes
git checkout -- <filename/dirname>
git reset --soft HEAD~1 - remove last commit keeping changes staged so that can be modified and committed again
git reset --hard HEAD~n
git reset --hard <commit-id>
git reset --hard <branch-number-here> - return to an old project state
git checkout -b <branch><sha-keypair> - recover a deleted local branch
git checkout <old_branch_name> git branch -m <new_branch_name> - rename branch
git rebase --interactive <commit-id> - rearrange commit history
Handling mistakes within git hooks

Git Advanced Usage
1. Advanced Git Concepts
- Git Branch
- Handling hidden git files - .gitignore .gitattributes
- Exporting projects
- Codespaces ***

HEAD pointer to the most recent commit in current branch
HEAD^ Moves one commit backward
HEAD~n Moves n commits backwards

Git Pack
- git fsck - detect corrupt files
- git gc - optimizes and compresses repository data

Large Repositories
- shallow clone - fetching only latest n commits instead of entire history - git clone --depth [n] [url]
- git filter - reduce repository size
- cloning single branch
- submodules
- lfs
- garbage collection (git gc)

Error handling and troubleshooting
- reset - rewrite history use it when not yet pushed vs revert - does not rewrite history use it after pusihing

git reset -hard HEAD~2 - Completely wipes last 2 commits and all their changes — gone from history and working directory
git revert HEAD^ - Safely undoes the last commit by creating a new commit that reverses it — history is preserved
git reset HEAD~2 -  removes last 2 commits from history but keeps changes unstaged (by default soft)
git checkout HEAD~2 - Detaches HEAD and takes you back to view how the repo looked 2 commits ago — nothing is changed. Get back by git checkout main. use it to look

Personal Access Token

Introduction BitBucket - Create Account
Jira
Mercurial
SVN

Git in CI/CD
- Git - A local command-line software tool.
- Jenkins - Tutorial ***
- Github - A cloud-based web hosting service
- . NET
- CI / CD
- Containerization
- Devops
- Docker
- K8s

Collaboration

- openSource for beginners projects 
1. https://up-for-grabs.net/#/

- issues and bug tracking

Merge strategies

- Merge — preserves history but adds extra commits

1. Fast Forward Merge Practical
- occurs when target branch has changes and the main branch has no new commits
Steps
- main branch
- git branch -> feature| main|testerbranch
- checkout feature
- touch fileA fileB
- git status
- git add .
- git commit -m "Add Files"
- ls
- git checkout main
- git rebase feature

2. Recursive Merge
- Both diverged branches have new commits hence two parent commits
Steps
- main branch
- echo "Create Main File" >> main.txt
- git add .
- git commit -m "Create Main File"
- git checkout feature
