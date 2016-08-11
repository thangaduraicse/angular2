Npm Commands:
  npm start - runs the compiler and a server at the same time, both in "watch mode"
  npm run tsc - runs the TypeScript compiler once
  npm run tsc:w - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and recompiling when it sees them
  npm run lite - runs the lite-server, a light-weight, static file server with excellent support for Angular apps that use routing
  npm run typings - runs the typings tool separately
  npm run postinstall - called by npm automatically after it successfully completes package installation. This script installs the TypeScript definition files defined in typings.json

The essential structure of every component we'll ever write:
  - One or more import statements to reference the things we need.
  - A @Component decorator that tells Angular what template to use and how to create the component. has 2 fields selector and template
  - A component class that controls the appearance and behavior of a view through its template.

We're passing metadata to the NgModule decorator function:
  imports - the other modules that export material we need in this module. Almost every application's root module should import the BrowserModule.
  declarations - components and directives that belong to this module.
  bootstrap - identifies the root component that Angular should bootstrap when it starts the application.

We import the two things we need to launch the application:
  Angular's browser platformBrowserDynamic function
  The application module, AppModule.
  Then we call platformBrowserDynamic().bootstrapModule with AppComponent.

SystemJS to load application and library modules. Earlier we added the systemjs.config.js file to the project root.

