import bcrypt from "bcrypt"

const users = [
    {
        email:"poorana@gmail.com",
        password:bcrypt.hashSync("123456", 10),
    },
]

export default users;