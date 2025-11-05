const fruits = ["Apples", "Peaches", "Pineapples", "Bananas"];

for (let fruit of fruits) {
    console.log(fruits);

    /**
     * "for of" way of going through an array
     * better way of writing a loop
     * goes in order through the array; from the first one to the last one:
        1. Apples
        2. Peaches
        3. Pineapples
        4. Bananas */
}



for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    console.log(fruit);

    //more common way of going through an array
}
