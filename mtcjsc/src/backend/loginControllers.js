const db = require('./databaseModel')

const usersControllerLogin = {}


usersControllerLogin.login = async (req,res,next)  => {
    try {
    const {Email, Password} = req.body

    const login = `SELECT * FROM usersLogin WHERE usersLogin.email = '${Email}' AND usersLogin.password = '${Password}'`
    const loginQuery = await db.query(login)

    if(loginQuery.rows.length >= 1){
        console.log(`sucessfully log in`)
        
    } else {
        console.log(`Wrong Email or Password`)
    }

    // console.log(loginQuery)
    } catch (error){
        return next ({
            log: `Error : ${error}`
        })
    }

}


module.exports = usersControllerLogin;