const school = (student) => {

    const {name} = student;
        return {name};
}

const student = {
                name: "Chinedu",
                age: 22,
                course: "Computer Science"
}

console.log(school(student))
