const numbers = [34, 66, 81, 88, 90, 12, 13, 45, 76];

function liner_serch(array, target) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element == target) {
            return i;
        }
    }
    return -1;
}

const index = liner_serch(numbers, 11);

console.log(index);