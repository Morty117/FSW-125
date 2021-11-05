# Express
    - Express is a minimal and flexible node.js app framework that provides a robust set of features for web and mobile applications
    
    - We MUST initialize a new node project
        1. npm init -y
        2. npm install express
    - This will return a Object notation in the terminal and give a package.json 
    - package.json does a few things for us
        1. lists the dependencies our package depends on
        2. specify the versions of any project we are using and allowing our builds to be repoduceable/easier to share with other developers
    - The only thing we need in this file is the 'name': of the project\
    - IF YOU'RE using npmjs.com use mature frameworks that have:
        - LOTS of weekly downloads 
        - THE SIZE won't be too large or have multiple dependencies inside the dependencies
        - MAKE sure there is documentation

# Nodemon
    - a tool that allows us to automatically restart our node application when file changes are detected
    - we no longer would need to kill the server, save the file and retype node (filename)
    - npm install --save-dev nodemon will save the dependency as devDependencies within your package.json
    - its best practice to save them in seperate dependencies because one will be for the application and the other for the developer

# RESTful API Architecture
    Vocab
    - Resource - single item(object) in a database /user
    - Collection - a group of similar items in a database /users
    - Base URL(Root) - http://amazon.com
    - API Endpoint - base URL plus a route http://amazon.com/movies/fhckas9918287
    - Parameters - how we pick out/get one route movies/:movieId
    - Query String - /movies?genre=action&year=1999
    - Client - user/frontend
    - Server - intermediary/backend
    - Request method - CRUD (CREATE, READ, UPDATE, DELETE) / REST (GET, POST, PUT, DELETE)