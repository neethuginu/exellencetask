const array = [
    {
        "id": 4, "name": "abc",
    },

    {
        "id": 10, "name": "ab2",
    },

    {
        "id": 5, "name": "abc3",
    },
    {
        "id": 6, "name": "abc5"
    },
];
function sort(arr, key) {
    return arr.sort(function (a, b) {
        var x = a[key]; 
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

array=sort(array, 'id');
