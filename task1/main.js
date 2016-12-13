var name,
	time, 
	place, 
	event;

	name = prompt('What is your name?', 'Yura');
	event = prompt('What will you do', 'an interview');
	time = prompt('When?', '13.12.16 15:00');
	place = prompt('Where?', 'Epam Lviv');
	console.log(name + ' has ' + event + ' at ' + time + ' somewhere in ' + place);