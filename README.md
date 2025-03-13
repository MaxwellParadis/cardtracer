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
   git commit -m "<TYPE IN WHATEVER YOU CHANGED HERE>"
   ```

5. **Push the new branch to GitHub:**

   ```sh
   git push -u origin craig
   ```

## Keeping Your Branch Updated

These are some regular commands to run before or after each working session.

Before working on your branch, pull the latest changes, if any:

```sh
   git pull origin craig
```

Also, merge new updates from the `master` branch into your active `craig` branch:

```sh
   git fetch origin
   git merge master
```

When done working or after completing a significant edit, make sure to add, commit and push after working on your branch:

```sh
   git add . 
   git commit -m "YOUR NOTES ABOUT THE UPDATES"
   git push origin craig
```

If when you are merging updates from master into branch craig you may get conficts.  We shouldnt have too much here to worry about and it should be easy enough to go through and decide how the conflicts are handled, maybe prioritizing your work.  If you let me know and have pushed your work to craig, I can always then handle merging from craig into master myself.  Once done as long as you have not made more changes while I was doing this you can simply pull master and make your branch now match master.

```sh
   git pull origin master
```





