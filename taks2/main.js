var x1 = 55,
	x2,
	y1 = 36,
	y2;
	x2 = prompt('What is your x location coordinates?', 53);
	y2 = prompt('What is your y location coordinates?', 42);
	var distance = Math.sqrt( Math.pow(x2-x1 , 2) + Math.pow(y2-y1 , 2), 2);
    console.log('Distance is: ' + distance);
