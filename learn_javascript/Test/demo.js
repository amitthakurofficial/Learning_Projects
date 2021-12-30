const myFun = (arr1,k) => {
    let arr = arr1.sort();
    let total=0;
    let temp=[];

    arr.forEach(element => {
        if(total<k) {
            total+=element;
            if(total>k) {
                total=total-element;
            } else {
                temp.push(element)
            }
        }
    });
    console.log(temp.length)
}

myFun([1,8,4,7,3,5],10)