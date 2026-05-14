const age = (age)=>{

    if (age < 13){

        return "You are a child"
}
    else if(age <= 18){
    
        return "You are a teenager"
    }
    
    else if(age > 18){

        return "You are an adult"
    }
}
console.log(age(19))
