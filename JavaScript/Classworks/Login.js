const login = {username: "admin", password: "1234"};
status = ((login.username === "admin") && (login.password === "1234")) ? "Login success" : "Invalid credentials"

console.log(status)
