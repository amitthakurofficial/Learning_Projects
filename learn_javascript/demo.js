

const sort_arr = (arr) => {
    let temp = []
    for(let i=0; i<arr.length; i++) {
        let smallest = 999999999;
        for (let j = 0; j < arr.length; j++) {
            if (!temp.includes(arr[j])) {

                if (smallest > arr[j]) {
                    smallest = arr[j]
                }

            }
        }
        temp.push(smallest);
    }
    console.log(temp)
}
const testArr= [9,15,5,4,7,2,1,3,10,13,11,6]

sort_arr(testArr)








// const isPalindrome = (str) => {
//     for(let i =0; i<str.length; i++) {
//         if(str[i]!=str[(str.length-i)-1]) {
//             console.log("false")
//             return false;
//         }
//     }
//     console.log("true")
//     return true;
// }

// isPalindrome("aabbaa");


// let prime_num = 50;

// const isPrime = (prime_num) => {
//     for(i=1; i<prime_num; i++) {
//         if(prime_num%i==0 && i!=1) {
//             console.log("not a prime")
//             return;
//         }
//     }
//     console.log("prime number")
//     return;
// }

// isPrime(31)



// for(let i=0; i<10; i++) {
//     for(let j=0; j<10; j++) {
//         if(j==5) {
//             break; // this will break both loop end exit from the loop
//         }
//         if(j==5) {
//             continue; // this will break the loop only for j and continue the loop for i
//         }
//     }
// }





















