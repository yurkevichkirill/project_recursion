function fibs(n){
    let fibsArr = [];
    for(let i = 0; i < n; i++){
        if(i === 0){
            fibsArr.push(0);
        }
        else if(i === 1){
            fibsArr.push(1);
        }
        else{
            fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
        }
    }
    return fibsArr;
}

function fibsRec(n){
    if(n === 0){
        return [];
    } else if(n === 1){
        return [0];
    } else if(n === 2){
        return [0, 1];
    }else {
        let arr = fibsRec(n - 1);
        let copy = arr.slice();
        const last1 = arr.pop();
        const last2 = arr.pop();
        copy.push(last1 + last2);
        return copy;
    }
}

console.log(fibs(13) + ': 13');
console.log(fibsRec(13) + ': 13');