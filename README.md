# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:


### `npm install`

Installs all the dependencies required to run the project

### `npm start`

Runs the app in the development mode.\
The API works only on IPv4 adress so localhost will not fetch the data.

Open {Your IPv4}:3000 to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Approach`

This project is created using the following main tools : 
[Imgur Gallery API](https://apidocs.imgur.com/),
Redux Toolkit, 
Axios,
React Router Dom
& SASS.

The data is fetched from the redux slice of the gallery as an action and is stored in a redux state.

The action is then dispatched when the project is rendered to extra reducers so we can track the fetching process and it's outcome.

After the api is fetched successfully the redux state is called to the Home component where it is filtered and displayed by mapping the data into the Card component.

It can be re-fetched according to the parameters passed as arguments to display our selected filters.

There is also a loading state stored into redux states that checks if the data is fetched or not.

When the card component is clicked the post data is passed on to the single post component where we dispatch an action to save the data to a post state in the redux store and another action is dispatched when returning so that the post state is set empty after the component is unmounted.


### Live Version
[Imgur Gallery](https://imgur-api-gallery.netlify.app/)

### `Credits`
Aldi Alinj




