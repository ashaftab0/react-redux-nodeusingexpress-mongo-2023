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


