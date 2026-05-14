const passwordRemoval = (user) => {

delete user.password
    return user
}

const user = {username: "admin", password: 12345};

console.log(passwordRemoval(user))
