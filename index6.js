let arr = ["кофе", "чай", "апельсин"];
let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("Элементы одинаковые");
} else {
    console.log("Элементы не одинаковые");
}