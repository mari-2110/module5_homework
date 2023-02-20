let inputValue = prompt("Введите значение");
console.log(inputValue);

if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}