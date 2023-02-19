function maxColumn(matrix) {
    let newArr = matrix[0];                                 // this enters the first column [ 5,  9, 21]

    for (let i = 0; i < matrix.length; i++){
        let currentArr = matrix[i];                         // iterate through all 0: [ 5,  9, 21] 1: [ 9, 19,  6] 2: [12, 14, 15]

        for (let j = 0; j < currentArr.length; j++){        // iterate inside one of the 3 sub arrays (first one is [ 5,  9, 21] )
            if (currentArr[j] > newArr[j]) {                // if j in the current is bigger than j in the newArr : replace is
                newArr[.splice(j, 1, currentArr[j]) ]       // replace at index j, delete the existing, insert the current j (the num) /// OR YOU CAN JUST newarr[j] = currentArr[j];
            }
        }
    }
    return newArr;
}


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]
