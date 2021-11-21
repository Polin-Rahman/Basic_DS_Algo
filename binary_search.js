const numbers = [1, 3, 15, 21, 33, 41, 51, 69, 72, 75, 83, 89];

function binary_search(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === target) {
            return mid;
        }

        if (target < array[mid]) {
            end = mid - 1;
        }

        if (target > array[mid]) {
            start = mid + 1;
        }
    }
    return -1;
}

const index = binary_search(numbers, 15);
console.log(index);
