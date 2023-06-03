## Project #1: High Paw
A high-level overview of the project purpose:

### Situation
- High Paw is a deployed, full stack application created for the Deployment module of the Multiverse curriculum. High Paw's main concept is a social media platform where users can register there dogs/puppies. The gimmmick and novelty of the ptoject idea is that the animals themselves are the ones interacting with the site - the profile are the dog's demographics, as if they were the ones registering! The dogs would be the ones creating events and hangouts via geolocation. The animals can edit their own hangouts, see other's hangouts, and register for them. The dogs would be the ones creating events and hangouts via geolocation. The animals can edit their own hangouts, see other's hangouts, and register for them.

### Task
- There are 4 main parts to the root project structure: `.github/workflows`, `client`, `server`, and `docker-compose.yml`. These core parts are for Continous Integration and Continous Deployment, frontend implementation, backend development, and containerization, respectively. 
- Following the Software Development Life Cycle (SDLC), in a team of 4, we started off with Analysis and Design - we established the concept of a dog-centric social platform with geolocation as one of the main features. Two team members responsible for frontend development was also responsible for the overall rendered design, using Figma and wireframes. Then came the design for the backend development, which me and another team memeber was responsible for. We created and connected the MongoDb database, created protected routes, created a RESTful API, backend form validation, authentication, and authorization. We also needed an efficient workflow, so CI and CD was implemented via GitHub Actions.
- Steps 3-5, Implementation, Test, and Deployment: Implementation was mainly done with pair prgramming, 2 memebers each working on the frontend or backend. The team met up when connecting the frontend to the backend, deployment issues, and other questions that needed to be asked from the other pair. With the use of the CI/CD, triggering our tests workflow with every pull request to main and trigering the build and deploy workflow with a push to the main branch gave us the space to debug the needed code, see which tests were successful or not, and why a deployment may or may not be working.
- Step 6: Maintenance: The team maintain the application via cleaning the databases when needed and looking over website usage. This last step is the newest step for me, since this is a long-term step in the SDLC and will need constant and consistent vigilance and actions.

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

### Result
- [High Paw Deployed Site](https://high-paw-ugau.onrender.com/)
- [Final Project Video Presentation Recording](https://high-paw-ugau.onrender.com/](https://youtu.be/b6yPHPoDQ2Y)

### Photos
Homepage (dark mode):
![alt text](https://github.com/Kharmalina/Multiverse-Assessment-Portfolio/assets/96323395/590bd5a4-405c-4a57-aa01-e3528715241b "High Paw Home Page")


 

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
### JF XX.XX
- List the full text of the job function first
- Describe a situation where you demonstrated this job function.
- Summarize the actions you took to accomplish the goal. 
- Emphasize the results of this action for your team or your learning. 
- Connect the competentcy to this project

### JF XX.XX
- List the full text of the job function first
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
