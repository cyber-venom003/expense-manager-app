const promise = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve('The resolved data.');
    } , 5500);
});

console.log('before')

promise.then((data) => {
    console.log(data);
})

console.log('after')