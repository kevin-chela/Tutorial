Start your journey

Installation

Hint - Search - Ctrl + f

Questions
1. Can i clone a single branch?
2. When should i use git stash ?
3. 

Definitions
- Repository - storage to keep code and files for software projects

1. What is GitHub?
- Github - platform for software building with  tools and workflows you need across every stage of the software development life cycle (SDLC)

Stages on GitHub
- Plan Track your work, set milestones, and organize long-term projects.
- Create Write and store code, develop new features safely, and create a clear timeline of your changes.
- Review Suggest changes to your project, discuss your updates with reviewers, and apply feedback.
- Test Automate checks to validate every change before it merges.
- Deploy Ship software with automated deployment workflows and release management.
- Operate Monitor applications, manage dependencies, and find and fix security issues.

- Git is a version control system that tracks changes to files. It lets you work on your own copy of a project, record a history of your changes, and merge your work with other people's changes safely.

Usage
- Store and manage code with version control.
- Write code, review code, manage security vulnerabilities and updates.
- Collaborate and socialize on projects.
- Contribute to open source software.
- Track and manage projects.
- Automate software development workflows like CI/CD, testing, and deployments.
- Showcase and share work.
- Publish and release software packages.
- Host documentation and websites.
- Participate in software development communities and discussions.
- Use AI-powered tools and agents to help write, understand, review, and automate code development faster

How to start
- Create a repository for your software project and store the code on GitHub, see Creating a repository for your project on GitHub.
- Plan your work by creating issues and tracking your project work.
- Connect to your code on your local machine and use the GitHub Desktop application to manage code changes with Git.
- Write and store your code, optionally pair with an AI assistant, and sync your changes with GitHub.
- Review your proposed code changes by creating pull requests and reviewing your own changes before you merge.
- Deploy your website using automated deployment workflows, allowing you to publish a basic website for your software project.

2. Creating repository 
- Click + button -> New Repository -> Name
Basic Commands here:
- git init
- touch file
- git status
- git add .
- git commit -m "Hello World"
- git branch -M main
- git remote add origin https://github.com/kevin-chela/Tutorial.git
- git push -u origin main

To check remote and local url
- git remote -v

Check Branches
- git branch

Switch Branch
- git checkout branchName

Delete Branch
- git branch -d Test - delete local branch
- git push origin --delete Test -	Delete remote branch
- git branch -r - List remote branches
- git branch - List local branches

Push a Branch
- git push -u origin <branch>

3. Planning your work
Creating an issue
- Issues track ideas, tasks, and bugs for your software project.
- click new issue
- title - Display a list of starred repositories [Task]
- description - Show a list of starred repositories on the home page

Creating a project board and importing your issue
- On GitHub, in the top right corner of GitHub, click your profile picture, then click Profile.
- Click Projects.
- Click New project.
- Under Templates, select Board.
- In the project name field, type Stargazers log.
- Leave Import items from a repository checked, to import the issue you recently created to the board.
- Click Create project.

Moving work across the board
- On your project board, find the Display a list of starred repositories item in the Todo column.
- Drag the item into the In Progress column to show that you've started the work.
- You'll return to the board later to move the item to Done once your feature is live.

Adding follow up issues
- Lets create more issues ideas| Features| Task
  1. Add search feature to your website [Feature]
  2. styling of starred repository [Idea]
  3. Filtering of starred repositories [Task]
- Add each new issue to your project board move to progress once you start working on it

4. Connecting to your code locally
- Installing GitHub Desktop
- Cloning your repository
- Opening your code in an editor

5. Writing and storing your code
-  Creating branch - add-starred-list - publish
- Building the website's code
- Open Copilot Chat in your editor and ask it to create the files with a prompt like the following.

Text
Create a starred repositories page for my software project. Add:
- events.json with sample data for a few starred repositories
- style.css to style a simple list
- script.js to fetch events.json and render the list
- an update to index.html that links style.css and script.js

Use the code written in https://docs.github.com/get-started/start-your-journey/creating-and-changing-your-code.

Committing and pushing your changes
- squash and merge **
- rebase and merge **

Opening a pull request

6. Reviewing your proposed changes
- to catch bugs spot missing error handling and improve quality
Reviewing your changes in the pull request

Optional: Getting an AI second opinion

Text
Review my changes for bugs, missing error handling, and accessibility issues.

The complete workflow

- Planned the work with an issue and a project board.
- Created a branch and built your feature.
- Opened a pull request.
- Reviewed your own changes (optionally with help from Copilot).
- Merged your feature into main.
- Updated your project board to reflect your progress.

7. Deploying your website automatically
- Automate your code deployment with GitHub Actions and GitHub Pages to publish updates to a live site with every push to the main branch.

Enabling GitHub Pages
- Repository -> Settings -> Code and Automation -> Pages -> Build and deployment -> GitHub Actions

Creating a deployment workflow
- create a file named .github/workflows/deploy.yml
- add workflow content

8. Git and GitHub learning resources
- https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources

Onboarding 

1. Getting started with your GitHub account

Part 1: Configuring your GitHub account
  1. Creating an account
  2. Choosing your GitHub product
  3. Verifying your email address
  4. Configuring two-factor authentication - passkey
  5. Viewing your GitHub profile and contribution graph
Part 2: Using GitHub's tools and processes
  1. Learning Git
  2. Setting up Git
  3. Choosing how to interact with GitHub
  4. Writing on GitHub
  5. Searching on GitHub
  6. Managing files on GitHub
Part 3: Collaborating on GitHub
  1. Working with repositories
    Creating a repository
    Cloning a repository
    Forking a repository
  2. Importing your projects
  3. Managing collaborators and permissions
  4. Managing repository settings
  5. Setting up your project for healthy contributions - guidlines code of conduct a license **
  6. Using GitHub Issues and Projects
  7. Managing notifications
  8. Working with GitHub Pages
  9. Using GitHub Discussions

Community Standards

Part 4: Customizing and automating your work on GitHub
  1. Using GitHub Marketplace
  2. Using the GitHub API
  3. Building GitHub Actions
  4. Publishing and managing GitHub Packages

Part 5: Building securely on GitHub
  1. Securing your repository
  2. Managing your dependencies

Part 6: Participating in GitHub's community
  1. Contributing to open source projects
  2. Interacting with GitHub Community Support
  3. Reading about GitHub on GitHub Docs
  4. Learning with GitHub Skills
  5. Supporting the open source community
  6. Contacting GitHub Support

Getting started with GitHub Team

Part 1: Configuring your account on GitHub.com

1. About organizations
2. Creating an organization and signing up for GitHub Team
3. Managing billing for an organization

Part 2: Adding members and setting up teams

1. Managing members of your organization
2. Organization permissions and roles
3. About and creating teams
4. Managing team settings
5. Giving people and teams access to repositories, projects, and apps

Part 3: Managing security for your organization

1. Requiring two-factor authentication
2. Configuring security features for your organization
3. Reviewing your organization's audit log and integrations

Part 4: Setting organization level policies

1. Managing organization policies
2. Managing repository changes
3. Using organization-level community health files and moderation tools

Part 5: Customizing and automating your work

1. Using GitHub Marketplace
2. Using the GitHub API - REST API GRAPHQL
3. Building GitHub Actions
4. Publishing and managing GitHub Packages

Part 6: Participating in GitHub's community

1. Contributing to open source projects
2. Interacting with the GitHub Community Support
3. Reading about GitHub Team on GitHub Docs
4. Learning with GitHub Skills
5. Supporting the open source community
6. Contacting GitHub Support

Getting started with the GitHub Enterprise Cloud trial

Part 1: Setting up your trial
  1. Learn about the GitHub Enterprise Cloud trial
  2. Sign up for the trial
Part 2: Setting up GitHub Enterprise Cloud
Part 3: Setting up GitHub Advanced Security

**Todos**
- Basic writing and formating syntax and managing your profile README
- GitHooks

Github flow
- create branch
- make changes
- create pull request
- address review comments
- merge your pull request
- delete branch

Codespaces
- Language packages

- Github security features

Setting up Copilot for learning to code

git blame **
bot **

1. Storing your secrets safely
  -  piece of sensitive information that is used to authenticate or authorize access to systems, services, data, and APIs

Discovering projects on GitHub
- Explore Github
- Searching specific subject
- Following people
- Folloowing organisations
- Save repositories with stars
- Contributing to open source projects - Fork make your own copy and suggest updates to main project
- Familiarize with project - using git copilot to explore project

Text
 I'm looking for a list of open source projects written in Python that are accepting new contributors. Narrow down the list to repositories that use the `good first issue` or `help wanted` labels and have over 100 stars on GitHub.

Why are guidelines important?
- Code style and formatting requirements: How code should be formatted, naming conventions, and linting rules
- Testing guidelines: How to run tests, what tests are required for new features, and testing conventions
- Pull request process: How to structure your pull request, what information to include, and review expectations
- Development setup: How to set up your local development environment, required dependencies, and build processes
- Issue reporting: How to report bugs, request features, or ask questions
- Communication channels: Where to ask questions, discuss changes, or get help from maintainers

Finding the guidelines
- README: Provides an overview of the project. The content can vary, but the README helps users and contributors quickly understand what the project is and how to use it, along with links to other documentation.
- Code of Conduct: Defines acceptable behavior standards for project contributors and community members, and establishes expectations and procedures for addressing violations.
- Contributing: Provides guidelines and instructions for contributors to the project. It helps streamline the contribution process by setting clear expectations and encouraging consistent collaboration.
- License: Legally defines how others can use, modify, and distribute the code, protecting both the maintainers and users by setting clear terms for copyright and permissions.

Todo
- use GitHub Copilot App - to create guidlines
- Update Github Profile
- Add followers based on research
- Review trending projects
- Getting started with GitHub Certifications **
- openSource projects

Note
- Git Stash - store current changes without commiting to the working directory
- Git Rebase - takes a series of commits from one branch and applies them on top of another branch
   git rebase --abort - cleans up rebase state
- Git Squash - combine multiple commits to a single commit
   git rebase -i HEAD~3   # goes back 3 commits
- Git Revert - new commit that reverses previous changes keeps history
- Git Reset
- Fast Forward Merge
- Recursive Merge

- Pushing tags
- Git Rebase - command allows you to easily change a series of commits, modifying the history of your repository. You can reorder, edit, or squash commits together.
- squash -  lets you combine two or more commits into a single commit. A commit is squashed into the commit above it. Git gives you the chance to write a new commit message describing both changes.

- Git branch - isolates your work from the main codebase so you can safely develop features, fix bugs, or experiment without breaking the working application

Git Hosting Platforms
1. Github - opensource project beginner
2. GitLab - Built in CI/CD more private repo features
3. Bitbucket - Great for teams intergrates with Jira

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

Server - computer or software program that provides data, services, or resources to other computers, known as "clients," over a network.

Definitions
- Repository: A central location that stores all project files along with their complete change history and metadata like author and commit message. Storage space.
- Revision: A specific saved version of a file or project, identified using a unique ID such as a hash or number.
- Branch: A separate copy of the codebase used to develop features or fix bugs without affecting the main code.
- Merging: The process of combining changes from one branch into another, which may sometimes require resolving conflicts.
- Commit: A snapshot of changes made to the codebase at a specific time, used to track and manage project history.

Types of Branches
- Main Branch: The primary stable codebase, usually main or master.
- Feature Branches: For new features, e.g., feature-login.
- Bugfix Branches: For fixing bugs, e.g., bugfix-header.
- Release Branches: For preparing a version for production.
- Hotfix Branch: Used to quickly fix critical  production issues
- Develop Branch: Combines all completed features for intergration testing and ongoing development

- gitignore - track unnecessary or sensitive  files *.log

Basic Structure of README.md
- Project Title : The name of project, usually written as a main heading in Markdown to clearly identify the repository.
- Description: A short explanation of what the project does and its purpose.
- Installation: Steps required to set up and install the project locally.
- Usage: Examples showing how to run or use the project.
- Contributing: Guidelines for developers who want to contribute to the project.
- License: Information about the software license (e.g., MIT License, Apache License).
- Contact: Maintainer’s email or other contact information for support or queries.

Terms
- refs - stores branch pointers and tags
- **head - pointer to the current active branch**
- HEAD: Points to the current branch (usually main).
- config: Stores repository settings like username, email, and Git preferences.
- description: Contains a short description of the repository (optional).
- objects folder: Stores Git data such as file versions, commits, and snapshots.
- refs folder: Holds references to branches and tags that point to commits.

- git commit --amend - edit  or update recent commit message
- git commit --amend --date="now"
- git commit-am "msg" - adds and commits changes to already tracked files
- git remote add origin <URL>
- git push --set-upstream origin main
- git push origin-delete <branch>
- git remote set-url origin <new-url>

- git license

Pratical Git Branch
- git checkout -b Test
- git push -u origin Test

- git branch -r  -> List remote branches
- git branchList -> local branches

- git checkout main
- git branch -d Test -> Delete local branch
- git push origin --delete Test -> Delete remote branch
- git branch -D branchA -> Force Delete 

branch - allows developers to work on features bugs and experiments without affecting the main code base

Best practice:
Always commit or stash before switching branches — keeps your changes tied to the right branch and avoids confusion.

Git stash
Def - saved but not applied to your working directory
git stash save "<Stashing Message>" 
git stash apply - apply and keep the stash
git stash pop - apply and remove the stash
git stash drop - discard stash entirely
git stash show - display
git stash list - All stashes

Practical Stash Build
- git branch - list of branches
- git checkout -b feature - move to the branch you want
- create feature
- git add
- git commit 
- git push -u origin feature
- git branch -r - check all remote branches
- create another working progress feature without staging or commiting
- git stash
- git checkout main
- create
- git add
- git commit 
- git push
- git checkout feature
- git stash pop
- Continue feature work progress

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

git merge --abort

git rebase -i HEAD~3 

Recover Commits
git reflog
git cherry-pick <commithash>

git submodule add <file>
git tag
git tag -a {name} -m"message"

GitHooks
- streamline development process e.g coding standards, running tests, generting documentation, sending notifications

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

Git Debugging** 
- Review
- tools - git bisect

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

Git Advanced Usage
1. Advanced Git Concepts
- Git Branch
- Handling hidden git files - .gitignore .gitattributes
- Exporting projects
- Codespaces ***

- HEAD pointer to the most recent commit in current branch
- HEAD^ Moves one commit backward
- HEAD~n Moves n commits backwards

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

Personal Access Token - Github

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

- Merge — combines the histories and changes from two different branches into a single branch

1. Fast Forward Merge Practical
- occurs when target branch has changes and the main branch has no new commits
Steps
- main branch - start
- git branch -> list branches
- checkout feature
- touch fileA fileB
- git status
- git add .
- git commit -m "Add Files"
- ls
- git checkout main
- git rebase feature

- rebase - takes series of commits from one branch and applies it on top of another branch

2. Recursive Merge
- Both diverged branches have new commits hence two parent commits
Steps
- main branch
- echo "Create Main File" >> main.txt
- git add .
- git commit -m "Create Main File"
- git branch
- git checkout feature
- echo "New Feature Update" >> feature.txt
- git add .
- git commit -m "New Feature Update"
Note - changes occured on both branches
- git checkout main
- git merge feature
- git log --oneline --graph

- Octopus merge **
- Subtree merge **
- Squash and merge **
- Ours merge **

- WorkTree - How to use to categorize topics 