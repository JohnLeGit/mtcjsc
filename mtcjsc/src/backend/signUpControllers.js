const db = require('./databaseModel')


const usersController = {}
//TAKE HOME TASK 1
usersController.signUp = async (req,res,next) => {
    try {//reconstruct email and password for signUp
        const {Email, Password} = req.body
        const lookupUsername = `SELECT email FROM usersLogin WHERE email = '${Email}'`;
        console.log('lookUp' , lookupUsername)
        const resultLookUp = await db.query(lookupUsername)
        console.log('result Look Up' ,resultLookUp.rows[0])
        if(resultLookUp.rows.length > 0){
            console.log('4')
            console.log(`${Email} you entered already have someone`)
        }
        else {
        const databaseUserSignUp = `INSERT INTO usersLogin (Email, Password)
        VALUES ('${Email}' , '${Password}')`;
        const createNewUser = await db.query(databaseUserSignUp)
        res.locals.newUser = createNewUser.rows[0]
    }
    } catch (error) {
        return next ({
            log :`Error ${error} inside `
        })
    }
}


module.exports = usersController;