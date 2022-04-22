let money = 10000;
const buyCar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject('do not enought money');
            }
        }, 100);
    }));
};
money = 100001;
const promise = buyCar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
});
//# sourceMappingURL=main.js.map