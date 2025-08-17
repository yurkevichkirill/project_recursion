function mergeSort(arr){
    const l = 0;
    const h = arr.length;
    if(arr.length > 1){
        const mid = (l + h) / 2;
        const half1 = arr.slice(0, mid);
        const half2 = arr.slice(mid);
        const sorted1 = mergeSort(half1);
        const sorted2 = mergeSort(half2);
        return merge(sorted1, sorted2);
    }
    return arr;
}

function merge(arr1, arr2){
    const m = arr1.length;
    const n = arr2.length;
    let i = 0;
    let j = 0;
    let k = 0;
    let arrResult = [];
    while(i < m && j < n){
        if(arr1[i] < arr2[j]){
            arrResult[k++] = arr1[i++];
        } else {
            arrResult[k++] = arr2[j++];
        }
    }
    for(; i < m; i++){
        arrResult[k++] = arr1[i];
    }
    for(; j < n; j++){
        arrResult[k++] = arr2[j];
    }
    return arrResult;
}

const arr = [1, 80, 19, 14, 18, 36, 2, 4, 3, 2, 1, 69];
console.log(mergeSort(mergeSort(arr)));