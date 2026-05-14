const carAvailability = (car) => {

    if(car.available === true)
        return "This car is available"
}

const car = {
            brand: "Toyota",
            model: "Camry",
            available: true
};

console.log(carAvailability(car))

