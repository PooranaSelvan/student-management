import bcrypt from "bcrypt"

const users = [
    {
        name:"poorana",
        email:"poorana@gmail.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:true
    },
]

export default users;