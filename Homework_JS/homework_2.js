function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const multiplyBy2 = createMultiplier(2);

console.log(multiplyBy2(5));
console.log(multiplyBy2(10)); 