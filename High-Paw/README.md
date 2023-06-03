## Project #1: High Paw
Give a high-level overview of the project purpose:

### SITUATION
- High Paw is a deployed, full stack application created for the Deployment module of the Multiverse curriculum. High Paw's main concept is a social media platform where users can register there dogs/puppies. The gimmmick and novelty of the ptoject idea is that the animals themselves are the ones interacting with the site - the profile are the dog's demographics, as if they were the ones registering! The dogs would be the ones creating events and hangouts via geolocation. The animals can edit their own hangouts, see other's hangouts, and register for them. The dogs would be the ones creating events and hangouts via geolocation. The animals can edit their own hangouts, see other's hangouts, and register for them.
### TASK
- There are 4 main parts to the root project structure: `.github/workflows`, `client`, `server`, and `docker-compose.yml`. These core parts are for Continous Integration and Continous Deployment, frontend implementation, backend development, and containerization, respectively. 
- Following the Software Development Life Cycle (SDLC), in a team of 4, we started off with Analysis and Design - we established the concept of a dog-centric social platform with geolocation as one of the main features. Two team members responsible for frontend development was also responsible for the overall rendered design, using Figma and wireframes. Then came the design for the backend development, which me and another team memeber was responsible for. We created and connected the MongoDb database, created protected routes, created a RESTful API, backend form validation, authentication, and authorization. We also needed an efficient workflow, so CI and CD was implemented via GitHub Actions.
- Steps 3-5, Implementation, Test, and Deployment: Implementation was mainly done with pair prgramming, 2 memebers each working on the frontend or backend. The team met up when connecting the frontend to the backend, deployment issues, and other questions that needed to be asked from the other pair. With the use of the CI/CD, triggering our tests workflow with every pull request to main and trigering the build and deploy workflow with a push to the main branch gave us the space to debug the needed code, see which tests were successful or not, and why a deployment may or may not be working.
- Step 6: Maintenance: The team maintain the application via cleaning the databases when needed and looking over website usage. This last step is the newest step for me, since this is a long-term step in the SDLC and will need constant and consistent vigilance and actions.

### Action
- My main contributions revolved backend development and deployment. 
- Deployment
    - Wrote the 

### Result
- (*Result*) Showcase your final application with its functionality

### Photos
- Include relevant screenshots

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
