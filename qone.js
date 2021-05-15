function evenNumbers() {

    var arr = [1, 4, 10, 15, 18, 20];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

evenNumbers();