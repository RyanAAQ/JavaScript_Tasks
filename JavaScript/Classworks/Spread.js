const personal = {name: "Ngozi", age: 25}
const proffessional = {role: "Developer", company: "Semicolon"}

const merged = {...personal, ...proffessional}

console.log(merged)
