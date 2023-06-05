## Project #2: KPK Car Dealership
A high-level overview of the project purpose:

### Situation
- KPK Car Dealership is a deployed, full stack application created for the Backend module of the Multiverse curriculum. KPK Car Dealership's main concept is a mock car dealership website that has car inventory as its main rendered data. Its main features and implementations are pagination, search, filter, user vs admin rights, RESTful API, Auth0, authorization, authentication, form validation, protected endpoints, middleware, and hashing.

### Task
- There are multiple core parts to the root project structure: `client`, `db`, `src`, and the files pertaining to connecting the SQLlite database, backend routes, endpoints, protecting routes, and middleware.
- The design was mainly focused on the backend codebase, but my team and I created wireframes of the frontend components of how and where to render the data and other features of our application. 

### Action
- My main contributions revolved frontend and backend development.
- Frontend Implementations 
    - React, JS , HTML and CSS (including holo background) code for homepage (where login and sign up forms live)
    - Bootstrap components for forms (style, banners, icons)
    - Login and Sign Up Form form validation with `Yup` package
    - Loading animation and functionality
    - Entire code in `client/components/buttons`
    - Code in `client/components/Navbar.js` and `client/components/LoginRegisterPage.js`
    - Code in `client/App.js`, `client/index.html`, `client/index.js`, `client/style.css`
    - Contribute to Admin, User, and Car models  in `db`
    - Contribute to initializing sequelize, connecting the database, and seeding the data in `db/db.js`, `db/index.js`, `db/seed.js`, `db/seedFn.js`, `server.js`
    - client side and server side connection
    - Initialize react files to setup a React application in `src/App.js`, `src/index.js`, `src/style.css`
    - Contribute the code within `src/components/buttons`, `src/components`
- Backend Implementations
    - Connect login and sign up form to the backend 
    - Contribute to admin logic and functionality in `index.js`
    - Contribute to the backend routes, protected endpoints, and logic in `index.js`   
- Auth0/Authentication
    - Implement Auth0 configuration in `client/App.js`


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
- `express`
- `jsonwebtoken`
- `yup`
- `bcrypt`
- `sqlite3`

Database
- SQLite

Deployment
- Railway (backend)
- Netlify (frontend)

## Competencies
### JF 1.5
- Can work effectively and contribute appropriately on a team to produce software
- I worked independently, pair programmed, and worked with my team of 3 to produce software. Some actions I have taken to complete this job function is take initiative during meetings on how to start the Software Development Life Cycle (SDLC) for the project. I would ask others to take lead on tasks, ask if they are okay with the task and if they have any concerns or questions. I would take lead on tasks and be a willing support developer on other team member's task they are leading on. I created a Slack group chat to check-in with my teammates and set up meetings outside of scheduled meeting times to complete the necessary tasks before the deadline (made sure this was okay with everyone before proceeding). 

### JF 2.1
- Can create and analyze artefacts, such as use cases and/or user stories
- While implementing code for the endpoints, I thought of common and extreme use cases that could be possible while a user is in the application. One example is with logging in and logging out. What is a user wants to type in the endpoint `/home` in the address bar, and is not logged in? Accessing this endpoint on the browser is only accessible after authenticating the user aka logging in. If the user wants to use the browser backspace or forward arrows to access the other services in the webpage after logging out, that isn't possible of the security code implemented.
- Another user story is user vs admin rights. If a user has admin privileges, that user has access to services and functionality a user (such as a customer) does not have access to. For example, admin can edit/update car inventory, car prices, images, delete data and so on. By identifying this user story, we can plan out the code needed to make this possible. 
- Through the power of establishing use cases and user stories, we can plan and prevent a user hacking or using the website in a way that was not intended. 

### JF 2.6
- Can translate wireframes into User Interfaces
- In the design process, I created wireframes with Figma to translate them into User Interfaces. Much of my contributions are related to the frontend, creating React Components, state, other React code, CSS, and Bootstrap code that reflect the wireframes. In relation to the project, translating the wireframes to the UI meant everyone on the team knew what the end product should look like and create code that adds functionality that makes sense to the User Interface.

### JF 3.6
- Can implement a RESTful API ([resource: What is a REST API?](https://www.redhat.com/en/topics/api/what-is-a-rest-api))
- I followed the software architecture that makes an API RESTful:
    - A client-server architecture made up of clients, servers, and resources, with requests managed through HTTP
    - Stateless client-server communication
    - Cacheable data that streamlines client-server interactions
    - A uniform interface between components so that information is transferred in a standard form
- In `index.js`, multiple HTTP Methods were used for all endpoints: GET, POST, PUT, and DELETE
- HTTP authentication was also used with Bearer authentication, the process of giving access control to the token bearer
- The use of Postman was heavily used to make sure the RESTful API was successful and each request had a successful response, or if there was n error, proper error handling

### JF 4.3
- Is able to build, manage and deploy code into the relevant environment
- I took lead on and contributing member of many core parts of building and managing the codebase. Examples include writing the initial React code and components, login, register form and functionality and code pertaining to the database - initializing, connecting, rendering, secure sensitive and personal data.


### JF 4.4
- Can interpret and implement a given design while remaining compliant with security and maintainability requirements	
- With our design, the team needed a functionality to register, login, logout, and all other endpoints. With that in mind, we were compliant with security and maintainability requirements by adding middleware to protect all endpoints with the use of access token, refresh tokens, signing and verifying JWTs. CD is also helpful so we can be aware when deployments succeeds or fails and we can look into the codebase to debug and make sure the application is still compliant with security and maintainability. 


### JF 5.5
- Understands and can apply structured techniques to problem solving, can debug code and can understand the structure of programmes to identify and resolve issues
- My general technique to problem solving is asking myself what is the problem in the first place and what is my goal to get to the solution. If it is debugging, I look at the error messages or a `console.log()`, and play around with the code. If it is adding a feature, I do my research and look up resources such as documentation, videos, etc. I also do this with debugging. I then lean to my colleagues for help and get their input. In terms of KPK Car Dealership, I used this general process to code. For example, when I want to implement validation for the login and sign up form, I needed to research what packages, like `yup`, did I need to accomplish the validation. There were points where it was not working, so taking my time, looking at the error messages, and deeper research was essential to the success of of this implementation. 

### JF 6.4
- Works independently and takes responsibility. For example, has a disciplined and responsible approach to risk, and stays motivated and committed when facing challenges							
- A lot of my time working on the codebase was independent work. For example, researching on middleware and functionality between a user and an admin user. Contributing to the implementation and asking my team for input and feedback. I consider myself a responsible developer and team member, checking in on my teammates, asking where they are at and give each other constructive criticism that sheds light on the work not the person.

### JF 6.6
- Shows initiative for solving problems within their own remit, being resourceful when faced with a problem to solve				
- Throughout the Multiverse training, this was my first project that had Continuous deployment and a deployed site as the final product. Building a deployed, full stack application requires effective communication, discipline, dedication, and motivation to keep moving forward even when I felt stuck and couldn't get the solutions within the time I wanted them. I knew when to lean on my colleagues, productively struggle and push myself when facing challenges.  Sometimes, problem-solving is being smart with time-management and being resourceful to look for other solutions that may not have been originally planned. 

### JF 6.7
- Communicates effectively in a variety of situations to both a technical and nontechnical audience				
- Greatest example is when the recorded presentation was shown to the entire cohort and my Verizon manager was in the audience listening to my part of the video. After the presentation, he had questions for me regarding the project I effectively communicated my contributions and factors of the project. In terms of a technical audience, most, if not all of the cohort has a technical background. They asked questions and my team and I were able to answer them with relative ease because we all knew the project well and what we contributed to it. I would also add my effective communication was demonstrated to my team. Displaying excellent communication via email, Slack or in video made the process more efficient on what tasks needed to be done, when they need to be done, and by whom. 

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
