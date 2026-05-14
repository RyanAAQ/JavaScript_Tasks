const salaryReturn = (employee) => {
    
    const {salary} = employee
    return {salary};
}

const employee = {
                name: "Dapo",
                role: "Engineer",
                salary: 50000,
                
}
console.log(salaryReturn(employee))
