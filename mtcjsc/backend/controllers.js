const db = require('../backend/databaseModel')


const usersController = {}

usersController.signUp = async (req,res,next) => {
    try {//reconstruct email and password for signUp
        const {Email, Password} = req.body
        const databaseUserSignUp = `INSERT INTO usersLogin (Email, Password)
        VALUES ('${Email}' , '${Password}')`;
        const createNewUser = await db.query(databaseUserSignUp)
        res.locals.newUser = createNewUser.rows[0]
        console.log(res.locals.newUser)
    } catch (error) {
        return next ({
            log :`Error ${error}`
        })
    }
}

module.exports = usersController;