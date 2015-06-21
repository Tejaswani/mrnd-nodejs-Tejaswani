
exports.Sum = function (num1, num2) {
    return num1 + num2;
}

exports.SumOfArray = function (arrayOfNums) {
    var i = 0, len, sum = 0;
    len = arrayOfNums.length;
    for(i=0;i<len;i++)
    {
        sum += arrayOfNums[i];
    }
    return sum;

}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function (arrayOfNums) {
    var i, j,sum=0;
    for (i = 0; i < arrayOfNums.length; i++) {
        for (j = 0; j < i; j++) {
            if (arrayOfNums[i] == arrayOfNums[j])
                break;
        }
        if (j == i) {
            sum += arrayOfNums[i];
        }
    }
    return sum;
}

exports.ReverseString = function (str) {
    var len = str.length, i, k = 0,temp;
    var arr = new Array(len);
    arr = str.split("");
    for (i = 0; i < len / 2; i++) {
        temp = arr[i];
        arr[i] = arr[len - i];
        arr[len - i] = temp;
    }
    return arr.join("");
}

exports.ReverseArrayOfStrings = function(arrayOfStrings){
    var l = arrayOfStrings.length, i;
    for(i=0;i<l;i++)
    {
        arrayOfStrings[i] = arrayOfStrings[i].split("").reverse("").join("");
    }
    return arrayOfStrings;
}