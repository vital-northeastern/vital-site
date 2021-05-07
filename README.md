<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/21/blue-heart_1f499.png" width="60" />
  </a>
</p>
<h1 align="center">
  ViTAL Website
</h1>

This site was created using [Gatsby](https://www.gatsbyjs.org/docs/), a React-based static-site generator and the [Contentful CMS](https://www.contentful.com/developers/docs/). To see other project dependencies, check out the project's `package.json` file.

## 📝 Table of Contents:

1. [Getting Started](https://github.com/Scout-NU/vital-site#start)
   - [Cloning](https://github.com/Scout-NU/vital-site#clone)
   - [Environment Variables](https://github.com/Scout-NU/vital-site#env)
   - [npm Modules](https://github.com/Scout-NU/vital-site#npm)
2. [Deployment](https://github.com/Scout-NU/vital-site#deploy)
   - [How to Manage Netlify Environment Variables](https://github.com/Scout-NU/vital-site#netlifyenv)
   - [How to Deploy Project on Netlify](https://github.com/Scout-NU/vital-site#deploy2)
3. [Contentful](https://github.com/Scout-NU/vital-site#contentful)
4. [Gatsby](https://github.com/Scout-NU/vital-site#gatsby)
5. [Config Files](https://github.com/Scout-NU/vital-site#config)
6. [Scout Developers](https://github.com/Scout-NU/vital-site#devs)

## 🚦 <a name="start">Getting Started </a>

1.  **<a name="clone">Clone the repository</a>**

```shell
git clone https://github.com/Scout-NU/vital-site.git
```

2.  **Change directories**

```shell
cd vital-site
```

3.  **<a name="env">Set up environment variables</a>**

In the project directory is a file called `.env.example`. This holds all of the necessary environment variables to create this project, including the Contentful access token.

Copy the file twice, name the new files .env.development and .env.production, and add the Contentful API keys to the variables. You can find these API keys in your Contentful space under Settings -> API keys -> vital-site. You only need to use Space ID and Content Delivery API - access token. Do **not** commit these to the Github repo

```shell
cp .env.production .env.development
```

```shell
# In .env
CONTENTFUL_SPACE_ID=''
CONTENTFUL_ACCESS_TOKEN=''
```

4. **<a name="npm">Install the npm modules</a>**

```shell
# Inside the project directory
npm install
```

Run server/development environment:

```shell
npm run develop
```

5. **View server**

(It will likely run on this specified port unless another one is active). Visit [http://localhost:8000/](http://localhost:8000/) to view your site

## 🚀<a name="deploy">Deployment (on Netlify) </a>

[Netlify](https://www.netlify.com/) is a continuous integration and continuous deployment platform that allows you to run web projects at global scale without servers, devops, or costly infrastructure. We use Netlify to host the ViTAL website. To allow your deployed site have access to all data stored in Contentful, use [these](https://github.com/Scout-NU/vital-site#env) same API keys and follow the directions below.

### <a name="netlifyenv">How to manage Netlify environment variables </a>:

1.  Navigate to the main page of your website on Netlify
2.  At the top of the screen, click on "Site settings"
3.  On the left side of your screen, click on "Build & deploy"
4.  Scroll down to the "Environment" section and click on "Edit variables"
5.  Paste the environment variables in their appropriate value fields

### <a name="deploy2">How to deploy your site</a>:

1.  Go to [https://app.netlify.com/sites/vital-site/deploys](https://app.netlify.com/sites/vital-site/deploys)
2.  Click on the "Trigger deploy" button on the right side of the screen and then click "Deploy site"
3.  While your site is being built (around 30 seconds), if any errors come up in the logs, address those and restart this process
4.  If your build is successful, at the end of the logs you will see "Site is live ✨" and have the ability to press the "Preview" button to view the site

Note that Netlify will automatically deploy to production the master branch on Github. If you want to see how a small change will look on the live site, you can make a pull request on Github and Netlify will automatically deploy to development a viewable site that you can find at [https://app.netlify.com/sites/vital-site/deploys](https://app.netlify.com/sites/vital-site/deploys).

## 🖊️<a name="contentful">Contentful</a>

[Contentful](https://www.contentful.com/) is a content management system that allows you to control all content from a single hub. We use Contentful to store all of the images and text copy used on the site through content models and content. In an object-oriented design sense, content models can be compared to classes while content can be compared to objects. For example, one of our content models is "Meet the Team" which has fields for all of the data that should be on the team page such as the member names and the advisors. Meanwhile, in the "What We Do" section, there are field for each programming card (ie: ventures consulting, club programming, and case competition)

Pieces of information regarding Contentful:

1.  In order to have a development environment that integrates with the data in Contentful and allow any of your deploys on Netlify to access data in Contentful, you will have to manage Contentful API keys in both your [codebase](https://github.com/Scout-NU/vital-site#env) and in [Netlify's settings](https://github.com/Scout-NU/vital-site#netlifyenv).
2.  You can easily change any content model or content in Contentful by simply clicking on it, making any changes you want, and then pressing the green "Publish Changes" button on the right side. To see these changes on your development environment, you will have to re-run `npm run develop`. To see these changes on your deployed site, you will need to manually [trigger a Netlify deploy](https://github.com/Scout-NU/vital-site#deploy2).

## 💜<a name="gatsby">Gatsby</a>

[Gatsby](https://www.gatsbyjs.com/) is a React-based open source framework for creating websites and apps. We use Gatsby to pre-load resources which makes the site load faster and perform better. On the development side, whenever you run `npm run develop`, Gatsby provides access to a server at [http://localhost:8000/](http://localhost:8000/)

## 🧐 <a name="config">Config Files</a>

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

6.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. We replaced this with an MIT license.

7.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9.  **`README.md`**: A text file containing useful reference information about your project.

## 😄 <a name="devs">Scout Developers</a>

Made with love by:

### Ryan Soderberg

_Email_: [soderberg.r@northeastern.edu](mailto:soderberg.r@northeastern.edu)

### Sreya Katabathuni

_Email_: [katabathuni.sr@northeastern.edu](mailto:katabathuni.sr@northeastern.edu)

<!-- AUTO-GENERATED-CONTENT:END -->
