// You are given an integer n. The next line is an array A which contains n*n elements. The spiral traversal of
// a square matrix of dimension (n x n) results in the given array.
// Calculate the sum of all elements which are on the diagonals of the square matrix.

// The matrix traversal happens in the manner shown in the image below




function runProgram(input) {
    input = input.split("\n");
    let tc = input[0];

    for (let i = 1; i < tc * 2; i += 2) {
        let n = Number(input[i]);
        let arr = input[i + 1].trim().split(" ").map(Number);
        console.log(SpiralDiagonalSum(arr, n));
    }
}

function SpiralDiagonalSum(arr, n) {
    let matrix = new Array(n).fill(0).map((el) => new Array(n).fill(0));
    //console.log(matrix)
    let top = 0;
    let left = 0;
    let right = n-1;
    let down = n-1;
    let count = 0;
    
    while(count<n*n) {
        for(let i = left; i <= right && count < n*n; i++) {
            matrix[top][i] = arr[count];
            count++;
        }
        top++;
        for (let i = top; i <= down && count < n*n; i++) {
            matrix[i][right] = arr[count];
            count++;
        }
        right--;
        for (let i = right; i >= left && count < n*n; i--) {
            matrix[down][i] = arr[count];
            count++;
        }
        down--;
        for (let i = down; i >= top && count < n* n; i--) {
            matrix[i][left] = arr[count];
            count++;
        }
        left++;
    }

    let sumOfDiag = 0;
    for (let i=0; i<n; i++){
        sumOfDiag += matrix[i][i];
    }    

    for (let i=0; i<n; i++){
        sumOfDiag += matrix[i][n-i-1];
    } 

    if(n%2 === 1) {
        let mid = Math.floor(n/2);
        sumOfDiag -= matrix[mid][mid];
    }
    return sumOfDiag;
}


if (process.env.USERNAME === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}