# uNuxt

**Experimental repo that generates a static site with Nuxt and Vue from an Umbraco site.**

It contains two parts:

* Umbraco backoffice website with api for routes and content
* Nuxt for hosting local dev server with hot module reloading and for static site generation

Umbraco endpoints:

* /routes
* /data

Nuxt important parts:

nuxt.config.js \ routes\generate
store\index.js
pages\_.vue
components\*

Basic workflow is like this:

* vuex store onServerInit dispatches async load action to populate store with ALL content from cms
* (generate only) gets all routes to visit from umbraco /routes in nuxt.config.js
* _.vue catch all vue router route reads component/data from store with router path as parameter
* dynamic component is loaded and model prop is passed

**npm run generate** to create static html site

**npm run dev** to start local development webserver with hot module reloading, etc.
