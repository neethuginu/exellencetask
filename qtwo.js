

    var arr = [1, 0, 0, 1,1, 0,0, 1,1];

	var count = 0;
	var temp = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 1) {
			count++;
			if (count > temp)
				temp = count;
		} else {
			count = 0;
		}
	}
	return temp;

	console.log(temp)
