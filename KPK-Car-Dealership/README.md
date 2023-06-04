## Project #2: KPK Car Dealership
A high-level overview of the project purpose:

### Situation
- High Paw is a deployed, full stack application created for the Deployment module of the Multiverse curriculum. High Paw's main concept is a social media platform where users can register there dogs/puppies. The gimmick and novelty of the project idea is that the animals themselves are the ones interacting with the site - the profile are the dog's demographics, as if they were the ones registering! The dogs would be the ones creating events and hangouts via geolocation. The animals can edit their own hangouts, see other's hangouts, and register for them. The dogs would be the ones creating events and hangouts via geolocation. The animals can edit their own hangouts, see other's hangouts, and register for them.

### Task
- There are 4 main parts to the root project structure: `.github/workflows`, `client`, `server`, and `docker-compose.yml`. These core parts are for Continuous Integration and Continuous Deployment, frontend implementation, backend development, and containerization, respectively. 
- Next part fulfills JF 1.1 Competency Checklist. Following the Software Development Life Cycle (SDLC), in a team of 4, we started off with Analysis and Design - we established the concept of a dog-centric social platform with geolocation as one of the main features. Two team members responsible for frontend development was also responsible for the overall rendered design, using Figma and wireframes. Then came the design for the backend development, which me and another team member was responsible for. We created and connected the MongoDb database, created protected routes, created a RESTful API, backend form validation, authentication, and authorization. We also needed an efficient workflow, so CI and CD was implemented via GitHub Actions.
- Steps 3-5, Implementation, Test, and Deployment: Implementation was mainly done with pair programming, 2 members each working on the frontend or backend. The team met up when connecting the frontend to the backend, deployment issues, and other questions that needed to be asked from the other pair. With the use of the CI/CD, triggering our tests workflow with every pull request to main and triggering the build and deploy workflow with a push to the main branch gave us the space to debug the needed code, see which tests were successful or not, and why a deployment may or may not be working.
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
- Security/Authorization/Authentication
    - Refresh and access tokens were vital to the backend's responsibility to secure the application, specifically when registering, logging in and logging out. Collaborated on writing code to make sure refresh and and access tokens were properly stored in the database, added and deleted in session storage.      

### Result + Video Demo
- [KPK Car Dealership Deployed Site](https://kpk-cardealership.netlify.app/#/)
- [Project Video Presentation Recording](https://www.youtube.com/watch?v=LtoEbySw2fI)

https://github.com/Kharmalina/Multiverse-Assessment-Portfolio/assets/96323395/b3a21e59-57f5-4c1d-907d-41f8c1ee99b6


## Technologies

Front End
- React
- CSS
- Bootstrap
- Material UI

Back End
- express
- jsonwebtoken
- yup
- bcrypt
- sqlite3

Database
- SQLite

Deployment
- Railway (backend)
- Netlify (frontend)

## Competencies
### JF 1.5
- Can work effectively and contribute appropriately on a team to produce software
- I pair programmed with another developer that was also working on the backend. We'd take turns being the Driver and Navigator. We would help each other write and debug code and bounce ideas off of each other on what tools and code to implement and what not to implement. We'd establish a plan on who takes the lead on which tasks, work individually, then come together to show the work we have done and questions that may come up about our code. Making these kind of choices with another developer shows my ability to contribute ideas and problem solving skills as well as take in other people's ideas on how to produce software effectively. I'd also check-in with the other pair of developers, see how they are doing with their work and what work we need to do that requires all 4 of us (example, connecting the database to our application and connecting the frontend to the backend). 

### JF 1.7
- Can follow company, team or client approaches to continuous integration, version and source control
- I followed my team approaches to continuous integration, continuous deployment, version and source control - GitHub Actions, GitHub, and Git, respectively. As a team we decided these were the best tools to use because many, if not all, of the tools are industry-standard and many companies use them to help build effective code, workflows and deployment. For our project, Git and GitHub was effective in pushing and pulling the necessary branches for all team members to have the most current or working code. GitHub Actions was great to see what tests and deployments attempts succeeded or failed, and in turn what code or other factors we needed to look at for debugging and refactoring. 

### JF 2.1
- Can create and analyze artefacts, such as use cases and/or user stories
- While implementing code for the endpoints, I thought of common and extreme use cases that could be possible while a user is in the application. One example is with logging in and logging out. What is a user wants to type in the endpoint `/profile` in the address bar, and is not logged in? Accessing profile information ont he browser is only accessible after authenticating the user aka logging in. If the user wants to use the browser backspace or forward arrows to access the other services in the webpage after logging out, that isn't possible of the security code I implemented. Through the power of establishing use cases and user stories, we can plan and prevent a user hacking or using the website in a way that was not intended. 

### JF 3.4
- Can create a logical and maintainable codebase
- Collaborated and took lead on multiple tasks relating to the success of backend and deployment implementation. I took part in creating the functions and logic behind the login, logout, register, refresh token endpoints, and the profile feature. Through CI/CD, the codebase is maintainable and manageable with productive workflows. MongoDB is also maintained with the use of MongoDbCompass, a powerful GUI for querying, aggregating, and analyzing your MongoDB data in a visual environment. Another example is the backend validation - with the use of `@hapi/joi` and the `validateAsync` function, form validation is secured and is an added layer of security. Learning how to maintain a smart and effective codebase is a skill that is important for the start and continuation of a successful project. 

### JF 3.7
- Can implement authentication and authorization to an API.
- I implemented code, functions, packages and dependencies that is responsible for authentication and authorization of High Paw. Many applications include registering, logging in and logging out. These features require authentication and authorization for reducing and preventing cyber attacks again outside actors. Since High Paw has a decent level of authentication and authorization, when our users register and login an access token and refresh token is generated and expires when necessary. The refresh token is stored in storage session and is deleted when a user log outs. 

### JF 3.8
- Can encrypt sensitive data via hashing
- With the implementation of bcrypt, the sensitive data such as passwords and confirm passwords are hashed and salted. High Paw's database does not have decrypted password data - this will prevent hackers to easily take sensitive user information and attempt cyber attacks. 


### JF 4.3
- Is able to build, manage and deploy code into the relevant environment
- I took lead on writing code relating to GitHub Actions workflows, test, and build and deploy. I also took lead on configuring Render and Railway to deploy the frontend and backend, respectively. Initially, the project was fully deployed. After, with the help of my team, adding the necessary environment variables due to more code implemented in the codebase, deployment was successful and ready for production.


### JF 4.4
- Can interpret and implement a given design while remaining compliant with security and maintainability requirements	
- With our design, the team needed a functionality to register, login, logout, and all other endpoints. With that in mind, we were compliant with security and maintainability requirements by adding middleware to protect all endpoints with the use of access and fresh tokens. CI is helpful so we can be aware when tests are passing and failing and we can debug when necessary. 


### JF 5.5
- Understands and can apply structured techniques to problem solving, can debug code and can understand the structure of programmes to identify and resolve issues
- My general technique to problem solving is asking myself what is the problem in the first place and what is my goal to get to the solution. If it is debugging, I look at the error messages or a `console.log()`, and play around with the code. If it is adding a feature, I do my research and look up resources such as documentation, videos, etc. I also do this with debugging. I then lean to my colleagues for help and get their input. In terms of High Paw, I used this general process to code. For example, when I want to implement refresh and access tokens, I looked at resources on how to implement these tokens with MongoDB. Knowing how and what to search on Google or the internet is an essential skill to problem solve. 


### JF 6.4
- Works independently and takes responsibility. For example, has a disciplined and responsible approach to risk, and stays motivated and committed when facing challenges							
- A lot of my time working on the codebase was independent work. For example, I was tasked with the profile feature and CI/CD. I was responsible with implementing the code to complete the tasks, problem-solved, and debugged when I need to. I stayed motivated and disciplined to the tasks at hand without the need of someone to be with me. When writing the code for the profile endpoints, adding the middleware for protections, I check all of the possible common and uncommon use cases. I add error handling to help me figure out the issue when something is wrong. Before checking-in with my teammate, if I am stuck on a problem, I would have my organized notes to relay all the issues I have faced and the steps I have already taken. I am also responsible as a team member, I check-in with my backend partner and the other 2 teammates responsible for the front-end. We meet up outside the scheduled time to plan out the features within the deadline given to us. On the week before the presentation, I was on vacation. I did not want my backend partner to be overwhelmed with the work so I took it upon myself to work on the project outside of work to make sure my team is not burdened due to my absence. 

### JF 6.6
- Shows initiative for solving problems within their own remit, being resourceful when faced with a problem to solve				
- The greatest example that shows my initiative to solve problems was when there was a huge issue with deployment and Redis. I initially used Redis as an in-memory key–value database for the refresh tokens. Unfortunately, Redis was giving issues for deployment, and after a week of working on it, plus leaving for vacation, after consulting with my team, we decided to remove Redis from the codebase and use MongoDB instead. We needed to add another model, and implementation on all of the necessary endpoints, middleware, functions, etc. Sometimes, problem-solving is being smart with time-management and being resourceful to look for other solutions that may not have been originally planned. 

### Original README

# KPK Car Dealership

A demonstration of a car dealership website incorporating authentication.


## Features

- CRUD and REST
- Login & Hashing
- Registration
- Authorization
- Admin Rights

## Environment Variables     


To run this project, you will need to add the following environment variables to your .env file

`JWT_SECRET`

`AUTH0_SECRET`

`AUTH0_AUDIENCE`

`AUTH0_CLIENT_ID`

`AUTH0_BASE_URL`

`AREACT_APP_JWT_TOKEN`


## Installation

Install my-project with npm

```bash
  npm i
```
    
## Usage/Examples
To initialize both client and server side:
```bash
npm run dev
```


## Authors

- [@Kharmalina](https://github.com/Kharmalina)
- [@Patrickb001](https://github.com/Patrickb001)
- [@kingwangwong](https://github.com/kingwangwong)
