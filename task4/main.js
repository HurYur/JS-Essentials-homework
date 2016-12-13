var octothorpe = '#',
    result = '',
    i = 0,
    j = 0;

while (i < 7) { // Set how much lines do you need
    if (i % 2 != 0) {
        while (j < 5) { // Set how much octothorpes do you need
            result += octothorpe + ' ';
            j++;
        }
        console.log(result);
    } else {
        while (j < 5) { // Set how much octothorpes do you need
            result += octothorpe + ' ';
            j++;
        }
        console.log(' ' + result);
    }
    i++;
}