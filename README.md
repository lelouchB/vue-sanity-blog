[![Preview](https://i.imgur.com/cT0huFG.png)](https://vuesanity.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/3436f69e-fc08-478a-9e82-7852461a0eb0/deploy-status)](https://app.netlify.com/sites/vuesanity/deploys)
## Vue Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Sanity Studio

To get your Sanity Studio up and running, we need to have a projectId in `src/client.js`. If you already have a `projectId` then be sure to add that value there. Otherwise you will need to `sanity init`. All instructions are below.

If you already have a `projectId`:
- Run the command `cd studio`
- Run `sanity install` to install Sanity dependencies
- Add `projectId` to `src/client.js`
- Run `sanity start`
- Navigate to `localhost:3333` to view Sanity Studio

If you _do not_ have a `projectId`:
- Run the command `cd studio`
- Run `sanity init`
- Answer the following questions:
    * Create new project — Hit Enter. 
    * Your project name: — We can name it whatever we would like. Let’s use **studio** for this project. 
    * Use the default dataset configuration? — The default dataset configuration has a public dataset named "production", let's stick with that. So type in "Y" and hit Enter. 
    * Project output path: — This will show us the path where our sanity project will live. Hit Enter. 
    * Select project template: — Here we are going to choose Blog (schema). Using the arrow keys, navigate to that so it’s showing blue. Hit Enter once there. Success!
- Add new `projectId` to `src/client.js` (detailed instructions below)
- Run `sanity start`
- Navigate to `localhost:3333` to view Sanity Studio

## Sanity Management

Connecting the Vue.js app and Sanity project can be done with the following steps:

- Navigate to [manage.sanity.io](https://manage.sanity.io/)
- Click on the name of your project (name was created during `sanity init`)
- Find the `projectId` at the top of the project's dashboard.
    * Navigate to `src/client.js` in the code and insert the projectId where it says "YOUR PROJECT ID HERE"
- Back in the project's dashboard, go to the "Settings" tab
    * Click on API
    * Under "CORS Origins" click on "ADD NEW ORIGIN"
    * Insert `http://localhost:8080`
    * Click on "ADD NEW ORIGIN"

