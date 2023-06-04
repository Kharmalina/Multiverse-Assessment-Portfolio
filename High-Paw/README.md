## Project #1: High Paw
A high-level overview of the project purpose:

### Situation
- High Paw is a deployed, full stack application created for the Deployment module of the Multiverse curriculum. High Paw's main concept is a social media platform where users can register there dogs/puppies. The gimmmick and novelty of the ptoject idea is that the animals themselves are the ones interacting with the site - the profile are the dog's demographics, as if they were the ones registering! The dogs would be the ones creating events and hangouts via geolocation. The animals can edit their own hangouts, see other's hangouts, and register for them. The dogs would be the ones creating events and hangouts via geolocation. The animals can edit their own hangouts, see other's hangouts, and register for them.

### Task
- There are 4 main parts to the root project structure: `.github/workflows`, `client`, `server`, and `docker-compose.yml`. These core parts are for Continous Integration and Continous Deployment, frontend implementation, backend development, and containerization, respectively. 
- Next part fulfills JF 1.1 Competency Checklist. Following the Software Development Life Cycle (SDLC), in a team of 4, we started off with Analysis and Design - we established the concept of a dog-centric social platform with geolocation as one of the main features. Two team members responsible for frontend development was also responsible for the overall rendered design, using Figma and wireframes. Then came the design for the backend development, which me and another team memeber was responsible for. We created and connected the MongoDb database, created protected routes, created a RESTful API, backend form validation, authentication, and authorization. We also needed an efficient workflow, so CI and CD was implemented via GitHub Actions.
- Steps 3-5, Implementation, Test, and Deployment: Implementation was mainly done with pair prgramming, 2 memebers each working on the frontend or backend. The team met up when connecting the frontend to the backend, deployment issues, and other questions that needed to be asked from the other pair. With the use of the CI/CD, triggering our tests workflow with every pull request to main and trigering the build and deploy workflow with a push to the main branch gave us the space to debug the needed code, see which tests were successful or not, and why a deployment may or may not be working.
- Step 6: Maintenance: The team maintain the application via cleaning the databases when needed and looking over website usage. This last step is the newest step for me, since this is a long-term step in the SDLC and will need consistent vigilance and actions to take place.

### Action
- My main contributions revolved backend development, deployment, and Docker implementation.
- Backend Implementations
    - Collaborated with the `Models` files. Helped wrote and refactor the models code for `Hangout.model.js`, `Token.model.js`, and `User.model.js`.
    - Took lead on the backend validation schema with the use of `@hapi/joi` dependency. Under `server/helpers/validations_schema.js`, the schemas I contributed were `authSchema`, for registration form, `loginSchema`, for login form, `profileSchema`, for updating profile details, and `refreshTokenSchema`, a part of an alternate solution to implement refresh tokens.
    - Wrote the majority of the functions and logic that will be used in the backend routes. Under `server/helpers/jwt_helper.js`, the functions I wrote were `signAccessToken`, `verifyAccessToken`, `signRefreshToken`, and `verifyRefreshToken`.
    - Took lead in the server folder structure for the backend routes. Files include `server/routes/Auth.route.js`, `server/routes/Hangout.route.js`, and `server/routes/Profile.route.js`.
    - Collaborated on the functions and logic behind the register, login, logout and refreshToken endpoints, which can be found in `server/controllers/Auth.Controller.js`.
    - Took lead on the backend functions and logic for the endpoints of the profile feature. The endpoints include `GET(/:id)`, and `POST(/edit/:id)`.
- Containerization/Docker
    - Wrote the code for the Dockerfiles in the `server` and `client` folders. 
    - Wrote and debugged the `docker-compose.yml` file. 
- Deployment
    - Wrote the `.github/workflows` files, build.yml and test.yml, for CI and CD.
    - Took lead on finding the best cloud platoform to deploy our frontend and backend. Render was for the frontend and Railway was used for the backend. 
    - Collaborated on finding all the necessary secret environment on the cloud platforms and on our GitHub repo to make deployment possible
- Security/Authorization/Authentication
    - Refresh and access tokens were vital to the backend's responsiblity to secure the application, specifically when registering, looging in and logging out. Collaborated on writing code to make sure refresh and and access tokens were properly stored in the database, added and deleted in session storage.      

### Result + Video Demo
- [High Paw Deployed Site](https://high-paw-ugau.onrender.com/)
- [Final Project Video Presentation Recording](https://youtu.be/b6yPHPoDQ2Y)

https://github.com/Kharmalina/Multiverse-Assessment-Portfolio/assets/96323395/d6231b8e-8896-45a1-b0ff-a77129f6ae36

https://github.com/Kharmalina/Multiverse-Assessment-Portfolio/assets/96323395/5479195b-97b6-4b8f-b343-028d92d76aa4

https://github.com/Kharmalina/Multiverse-Assessment-Portfolio/assets/96323395/8724f82d-4ef6-4968-90a1-bfb1b9cd728e

## Technologies

Front End
- React
- Tailwind CSS
- Cloudinary

Back End
- express
- jsonwebtoken
- @hapi/joi
- bcrypt
- mongoose

Database
- MongoDB

Deployment
- Railway (backend)
- Render (frontend)

## Competencies
### JF 1.5
- Can work effectively and contribute appropriately on a team to produce software
- I pair programmed with another developer that was also working on the backend. We'd take turns being the Driver and Navigator. We would help each other write and debug code and bounce ideas off of each other on what tools and code to implement and what not to implement. We'd establish a plan on who takes the lead on which tasks, work individually, then come together to show the work we have done and questions that may come up about our code. Making these kind of choices with another developer shows my ability to contribute ideas and problem solving skills as well as take in other people's ideas on how to produce software effectively. I'd also check-in with the other pair of developers, see how they are doing with their work and what work we need to do that requires all 4 of us (example, connecting the database to our application and connecting the frontend to the backend). 

### JF 1.7
- Can follow company, team or client approaches to continuous integration, version and source control
- I followed my team approaches to continuous integration, continuous deployment, version and source control - GitHub Actions, GitHub, and Git, respectively. As a team we decided these were the best tools to use becasue many, if not all, of the tools are industry-standard and many companies use them to help build effective code, workflows and deployment. For our project, Git and GitHub was effective in pushing and pulling the necessary branches for all team members to have the most current or working code. GitHub Actions was great to see what tests and deployments attempts succeeded or failed, and in turn what code or other factors we needed to look at for debugging and refactoring. 

### JF 3.4
- Can create a logical and maintainable codebase
- Collaborated and took lead on multiple tasks relating to the success of backend and deplopyment implementation. I took part in creating the functions and logic behind the login, logout, register, refreh token endpoints, and the profile feature. Through CI/CD, the codebase is maintainable and manageable with productive workflows. MongoDb is also maintained with the use of MongoDbCompass, a powerful GUI for querying, aggregating, and analyzing your MongoDB data in a visual environment. Learning how to maintain a smart and effective codebase is a skill that is important for the start and continuation of a successful project. 

### JF 3.7
- Can implement authentication and authorization to an API.
- I implemented code, functions, packages and dependencies that is responsible for authentication and authorization of High Paw. Many applications include registering, logging in and logging out. These features require authentication and authorization for reducing and preventing cyber attacks again outside actors. Since High Paw has a decent level of authentication and authorization, when our users register and login an access token and refresh token is generated and expires when necessary. The refresh token is stored in storage session and is deleted when a user log outs. 

### JF 3.8
- Can encrypt sensitive data via hashing
- With the implementation of bycrypt 
- Describe a situation where you demonstrated  this job function.
- Summarize the actions you took to accomplish the goal. 
- Emphasize the results of this action for your team or your learning. 
- Connect the competency to this project


### JF 4.3
- Is able to build, manage and deploy code into the relevant environment
- Describe a situation where you demonstrated  this job function.
- Summarize the actions you took to accomplish the goal. 
- Emphasize the results of this action for your team or your learning. 
- Connect the competency to this project


### JF 4.4
- Can interpret and implement a given design while remaining compliant with security and maintainability requirements				
- Describe a situation where you demonstrated  this job function.
- Summarize the actions you took to accomplish the goal. 
- Emphasize the results of this action for your team or your learning. 
- Connect the competency to this project


### JF 5.5
- Understands and can apply structured techniques to problem solving, can debug code and can understand the structure of programmes to identify and resolve issues
- Describe a situation where you demonstrated  this job function.
- Summarize the actions you took to accomplish the goal. 
- Emphasize the results of this action for your team or your learning. 
- Connect the competency to this project

### JF 6.4
- Works independently and takes responsibility. For example, has a disciplined and responsible approach to risk, and stays motivated and committed when facing challenges							
- Describe a situation where you demonstrated  this job function.
- Summarize the actions you took to accomplish the goal. 
- Emphasize the results of this action for your team or your learning. 
- Connect the competency to this project

### JF 6.6
- Shows initiative for solving problems within their own remit, being resourceful when faced with a problem to solve				
- Describe a situation where you demonstrated  this job function.
- Summarize the actions you took to accomplish the goal. 
- Emphasize the results of this action for your team or your learning. 
- Connect the competency to this project

### JF 6.7
- Communicates effectively in a variety of situations to both a technical and nontechnical audience.				
- Describe a situation where you demonstrated  this job function.
- Summarize the actions you took to accomplish the goal. 
- Emphasize the results of this action for your team or your learning. 
- Connect the competency to this project

### Original README
# High_Paw
    
    
High Paw! 🐾 A Full Stack application where users can create and attend puppy playdates with geolocation.

## Features

MVP
- Login and Register Functionality high-level authentication and authorization
- Map functionality 
Stretch Goals
- Blog feature including posts, recipes, facts, etc

## Environment Variables     


To run this project, you will need to add the following environment variables to your .env file

Client folder:

`VITE_MAPBOX_API`

Server folder:

`PORT`

`MONGODB_URI`

`DB_NAME`

`ACCESS_TOKEN_SECRET`

`REFRESH_TOKEN_SECRET`

## Installation

Install High Paw with npm

```bash
  cd client
  npm install
  npm run dev
```

```bash
  cd server
  npm install
  npm start
```

Install High Paw with Docker Compose

```bash
  docker-compose up
```
  
## Authors

- [Kharmalina Tong](https://www.github.com/Kharmalina)
- [Patrick Borgella Jr](https://github.com/Patrickb001)
- [Adrian Baltag](https://github.com/adrianbaltag)
- [Sheree Edmund](https://github.com/Sheree1986)


## Acknoledgements

- [Awesome Readme Templates](https://readme.so/editor)   
