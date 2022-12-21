const express = require('express')
const path = require('path')
const cors = require('cors')
const Pool  = require('pg');
const router = express.Router()
const app = express()
const port = 3000;


const usersController = require('./signUpControllers')
const usersControllerLogin = require('./loginControllers')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res) => res.status(200).sendFile(path.resolve(__dirname, '../../public/index.html')))

//------***** SIGN UP *****-----//
app.post('/signup',
    // usersController.checkForUsername, 
    usersController.signUp,
    (req,res) => {
        res.status('work')
    })

//------***** LOG IN *****-----//

app.get('/login',
    usersControllerLogin.login,
    (req,res) => {
        res.status('work')
    })

app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(port,() => {
    console.log(`Server is running on port: ${port}`)
})

module.exports = app