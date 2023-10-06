# Getting Started with Creating the express server and connecting the mOngoDb and validating via postman 

npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose

For `devDependencies` npm install with postfix '-D'
npm install -D nodemon concurrently 

# Bit of explaniantion of module installed above
express - Main framework for the BE
Express - validator - for data validation ex: when we post request to api if some field need to be there but not available
bcryptjs - used for password encryption as we don’t save actual value
config -  for global variable
gravatar - for displaying profile avatar ( when user signs in, it display actual profile pic as associated with email )
jsonwebtoken - as using jet pass along the token for validation
mongoose -  layer on top of database (mongo) to interact with it
request - module allow http request to another api ( for GitHub api in this project to fetch the project associated with user )

nodemon —  watch the server and automatic refresh the page
concurrently - allow us to run our backend express server and in frontend react dev server at the same time with one single command


## To run the server
npm run server

After that run below command onn postman 
> http://localhost:5000

## To Connect the mongoDb to server
Assumption - we have a account created on mongoDB Atlas | User created | IP address configured
> Click on connect button on MongoDb Atlas - https://cloud.mongodb.com/v2/64e2ebf0d003ef22be25f751#/overview ( login with ashrafaftab64)

MongoDB Atlas - "mongoURI": "mongodb+srv://ashrafaftab64:iSB2eBhxbwICXWWL@cluster0.grm3vd1.mongodb.net/?retryWrites=true&w=majority"
local mongoDb - "mongoURI": "mongodb://localhost:27017"


In order to interact with database, we need to create a model for each resources
 > Need to create a schema (mongoose schema), which holds the different fields that we want to have in any particular resources


 # router.get('/', (req, res) => {})
To access the `body` key in req object as (req.body), have to use body.parser BUT now express only provide it (no need to explicitly add the body parser in the project)
instead of `app.use(bodyParser.json())` we can use below code ( using the express)
`app.use(express.json({ extended: false }))`

# Validation on the fields of database : const { check, validationResult } = require('express-validator/check')
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


  # NOTE:
  where ever returning a promise, use the `await` inside the `async` function  



  ###### CLIENT  ######
  # with folder named `client`
  npx create-react-app client 

  # Dependencies 
  npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment

  axios - Used for async request and creating global header
  react-router-dom
  redux
  react-redux
  redux-thunk -- Middleware allows us to make asyn request in our actions
  redux-devtools-extension
  moment - date time library
  react-moment - so that we can use `moment` within react component
































































  ###### BY DEFAULT COPIED FROM DEFAULT CREATION BY REACT CLIENT APP   ######
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


