<!-- README-Template reference - https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/light-logo.svg">
    <source media="(prefers-color-scheme: light)" srcset="public/dark-logo.svg">
    <img alt="Spair logo" src="/public/light-logo.svg" width="120" height="120" />
  </picture>

  <br />

  <h1 align="center">Portfolio Website Documentation</h1>

  <p align="center">
    Repository for <b>BuildBuddies API</b>, a platform to help people connect, collaborate and build the future.
    <br />
    <a href="https://github.com/ScorpyG/justinhoang">
      <strong>Explore the docs! »</strong>
    </a>
  </p>
</div>

------
<div>
    <p align="center">Updated on <strong>30/04/2025</strong></p>
</div>

<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tables of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ol>
        <li>
          <a href="#prerequisites">Prerequisites</a>
        </li>
        <li>
          <a href="#installation">Installation</a>
        </li>
      </ol>
    </li>
    <li>
      <a href="#resources">Resources</a>
    </li>
  </ol>
</details>

<!-- ABOUT -->
## About The Project
This repository contains the code for the portfolio website.

> [!NOTE]
> The document is still in working progress. Please contribute anyway you can to help us and the team at BuildBuddies improve the on-boarding process. Thank you!

<!-- GETTING STARTED -->
## Getting Started

> [!IMPORTANT]
> *This guide was written with macOS system and [Homebrew](https://brew.sh/) as the default package manager. Therefore the installation commands and UI might be different for Linux or Windows operating system.*

<!-- If you wish to contribute. Down here is the Official Github docs on markdown syntax -->
<!-- https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github -->


### Prerequisites
1. Install [Node](https://nodejs.org/en/download/package-manager/current). Recommend download the latest LTS version of node ***(v20.17.0 @ 28/08/2024)***
```sh
brew install node
```

2. **Optional** - Install [Yarn (Yet Another Resource Negotiator)](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable). By default when you install Node.js ([npm - Package Manager for JavaScript](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)) will be included in the installation. But Yarn is prefer... [Here is Why?](https://www.geeksforgeeks.org/difference-between-npm-and-yarn/)
```sh
brew install yarn
```
***OR*** (if you already have Node installed)
```sh
npm install --global yarn
```

3. **Optional** - Install [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm). NVM allows you to switch between different versions of Node (might be useful if you want to test backwards compatibility on whatever features you're working on)
```sh
brew install nvm
```
<br />
<p align="right">(<a href="#readme-top">&uarr; back to top</a>)</p>

---

### Installation
1. Clone the repository
```sh
git clone git@github.com:ScorpyG/justinhoang.git
```

2. Install all dependencies
```sh
yarn install
```

3. Start the development server :tada: :tada: :tada:
```sh
yarn dev
```

<!-- RESOURCES -->
## Resources

> [!CAUTION]
> If you find any (documents, tutorials or blog posts) that are useful. Please check it with the lead first before install and use it. Due to Open-Source usage in proprietary software.

External resources and documentations that this was based on. These should be the source of truth when you configure or extend the documentation.

- [Next.js (App Router)](https://nextjs.org/docs) - SSR React Framework.

- [React.js](https://react.dev/) - Web UI Framework.

- [React-hook-form](https://www.react-hook-form.com/) - Forms but better.

- [React-toastify](https://fkhadra.github.io/react-toastify/introduction/) - Cool pop-up.

- [Date-fns](https://date-fns.org/) - JS date utility.

- [Zod](https://zod.dev/) - TypeScript schema type validation.

- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Because JavaScript fucking sucks.

- [Tailwindcss](https://tailwindcss.com/) - CSS framework for styling.

- [Motion](https://motion.dev/) - Animation shit idk (I'm suck at it)

- [Git Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) - The global standards for commit message.

<br />
<p align="right">(<a href="#readme-top">&uarr; back to top</a>)</p>