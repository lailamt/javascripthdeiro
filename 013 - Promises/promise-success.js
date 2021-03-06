// Utilitary function
function awaitRandom() {
    let min = 0;
    let max = 5;
    //Generate Random number between 5 - 10
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    let awaitTime = rand * 1000;
    // Create promise
    return new Promise((resolve, reject) => {
        console.log(`Wait for ${rand} seconds`);

        setTimeout(function() {
            resolve();
        }, awaitTime);
    });
}

// Start
awaitRandom().then(_ => {
    console.log("########### FINISHED ###########");
    return 1;
}).then(payload => {
    console.log("Received from last promise: ", payload);
    return 2;
}).then(payload => {
    console.log("Received from last promise: ", payload);
    return 3;
});