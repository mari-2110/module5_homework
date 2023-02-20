let x;

if ((typeof(x) == 'number')&&(!isNaN(x))) {
    console.log("х = числу");
} else if (typeof(x) == 'string') {
    console.log("х = строке");
} else if (typeof(x) == 'boolean') {
    console.log("х = логическому типу");
} else {
    console.log("Тип x не определён");
}