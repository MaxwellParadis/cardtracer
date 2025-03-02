# Card Tracer
A Collectable Card value tracking web app.  The information below provides some instructions for contributers new to git and node.


## Windows Install Prerequisites

1. **Node.js & npm** - Download & install from [nodejs.org](https://nodejs.org/) (LTS version). Verify with:
   ```sh
   node -v
   npm -v
   ```
2. **Git** - Download & install from [git-scm.com](https://git-scm.com/downloads). Verify with:
   ```sh
   git --version
   ```

## Setup & Run the Project

1. **Clone the repository**
   ```sh
   git clone https://github.com/MaxwellParadis/cardtracer.git
   cd cardtracer
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start development server**
   ```sh
   npm run dev
   ```
4. Open `http://localhost:5173/` in your browser.


#

## Steps to Create, Commit, and Push a Branch

1. **Create and switch to a new branch named 'craig':**

   ```sh
   git checkout -b craig
   ```

2. **Make changes to your files as needed.**

3. **Stage all changes:**

   ```sh
   git add .
   ```

4. **Commit your changes:**

   ```sh
   git commit -m "Initial commit on craig branch"
   ```

5. **Push the new branch to GitHub:**

   ```sh
   git push -u origin craig
   ```

## Keeping Your Branch Updated

Before working on your branch, pull the latest changes:

```sh
   git pull origin craig
```

To pull new updates from the `master` branch into your active `craig` branch:

```sh
   git checkout craig
   git pull origin master
```

This ensures your branch stays up to date with the latest changes from `master`. 🚀





