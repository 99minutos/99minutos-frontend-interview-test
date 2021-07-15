# 🚀 Front-End Challenge

## `Introduction`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

We will create a web Application using React with typescript on the front end, using the [SpaceX Graphql API](https://api.spacex.land/graphql/). 

## Set up Instruction 
To get started with this project: 
1) Fork this repository on branch ``JR-jalbertofernandez``
2) Run <span style="color:gray">$cd 99minutos-frontend-interview-test</span> 
3) Install [Docker](https://www.docker.com/get-started)
4) Run <span style="color:gray">$docker build -t spacex_jam .</span> 
5) Run <span style="color:gray">$docker run -p 8000:80 --name spacex_jam spacex_jam</span> 
5) Open host on port 8000 ex: [http://localhost:8000](http://localhost:8000)

Get image from Docker hub: 
1) Install [Docker](https://www.docker.com/get-started)
2) Run <span style="color:gray">$docker run -p 8000:80 --name spacex_jam afernandezro7spacex_space_jam:v3</span> 
3) Open host on port 8000 ex: [http://localhost:8000](http://localhost:8000)

## The Application
``INSTRUCTIONS.md``:
- Add prints of your application in the repository and use them in the readme
- Setup instructions
- How did you decide which technologies to use as part of your solution
- Are there any improvements you could make to your submission
- What would you do differently if you were allocated more time

## technologies used as part of solution
- React js library with typescript
- Apollo Client to get info from [SpaceX Graphql API](https://api.spacex.land/graphql/). 
- Styled-Components library for styles
- Docker 

## Components and styles
The App is separated by 3 groups of components. 
- The Components of the SideBar with the list Launches Past.
- The Components of the Main Panel with information of launch selected. 
- The Styled-Components that are used throughout all the components.

![components graph](./Components.jpg "components graph")

## future improvements
- Add Routing
- Add Auth Module and protect routes
- Layout Responsives improvements
- Add CI/CD with circleCI or gitlab-ci
