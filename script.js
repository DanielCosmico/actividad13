const buyHelmet = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("A helmet has been bought.");
    }, 1000)
})

const buyGloves = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("A pair of gloves have been bought.");
    }, 2000)
})

const rideBike = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("A bike has been ridden.");
    }, 8000)
})

const buyStuff = () =>{
    buyHelmet
        .then(infoHelmet =>{
            console.log(infoHelmet);
            return buyGloves;
        })
        .then(infoGloves =>{
            console.log(infoGloves);
            return rideBike;
        })
        .then(rideOnBike =>{
            console.log(rideOnBike);
        })
        .catch(error =>{
            console.log(error);
        })
        .finally(() => console.log("Every task has been done."));

}

buyStuff();