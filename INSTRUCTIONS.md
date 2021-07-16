## Setup instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


---
## How did you decide which technologies to use as part of your solution?
- **React** - to make a simple SPA. I select React instead NextJS because i don't need SSG, SSR o ISR
- **TypeScript** - to improve de development experience and avoid errors in production environments
- **Styled Components** - to get dynamic styles with element local scope and avoid to use a lot of times de "className" key
- **GraphQL** - to fetch declarative data from de SpaceX GraphQL API
- **Apollo Client** - to integrate GraphQL in React and manage componente's states
- **Mobile First Development** - to give better support and maintenance for mobile devices


---
## Are there any improvements you could make to your submission?
- Add infinite scroll button for Last Launches Component, to load more launches in the list


---
# What would you do differently if you were allocated more time?
- Manage local app state with Apollo CLient Reactive Variables
- use the built-in local state manager system of Apollo client to store all launches, and normalize them
- Add list virtualization integration to improve Las Launches Componente performance with many items, using react-window module