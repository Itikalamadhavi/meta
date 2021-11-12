# project name
Facebook clone

An application is used for registering new user and if your already an existing user you can login into it

# Project Status
This project is currently in development. New users can sucessfully registered himself and if hes already an existing user he can login into his account.

# Installation and Setup Instructions
Clone down this repository. You will need node and npm installed globally on your machine.

Installation:
npm install this will install node_module 
note that install node_modules both in myanimeform(front end) and server(backend)
nodemon module is installed as dev dependencies here
you can install package.json using command npm init --y

To Run Test Suite:
npm test .

To Start Server:
npm start . and this application runs on http://localhost:1109/landing
 


# folder structure
 contains two folder i.e meta_project(front end part) and backendbackend part).
 In meta_project(folder):
 assets contains css of landing.
 components folder contain all the JSX Components which can be reusable.
 
 In backend folder:
 schema.js file contains schema part.
 connect.js file contains connection to mongodb.