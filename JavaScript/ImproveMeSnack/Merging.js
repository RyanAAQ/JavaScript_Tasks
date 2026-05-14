const merging = (Object1, Object2) => {
    return {...Object1, ...Object2};
};
const personal = {
                name: "Kemi",
                age:  27,
};
const proffesional = {
                    role: "Designer",
                    company: "TechCorp"
};

console.log(merging(personal, proffesional));
