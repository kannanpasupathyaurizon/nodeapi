# Node API demo with Swagger and Postgres

Created application of Node API using below modules:

  - Express framework
  - Swagger UI
  - Mocha
  - Postgres database

# Express Framework
Express is a flexible Node.js web application framework that provides a robust set of features for web applications
Below files and folders are used in the application:
- index.js: Acts as the main file of the project where we initialize the app and other elements of the project.
- package.json: Takes care of the dependencies, the scripts to run with the npm command, and the version of project.
- routes: Define the app routes, with HTTP methods. For example, in the application two routes are defined '/employeelist' and '/addemployee'.
- middlewares: We can write middlewares to interpret all incoming requests before moving to the route handler. 
- mocha: Here we can write all the unit tests or acceptance tests for the API server.
