// time conversion from 12 to 24 hour format
var timeConvert = function(time) {
	var result = "";
	var statusPM = time.indexOf('PM');
	var statusAM = time.indexOf('AM');

	if (statusPM !== -1) {
        time = time.replace('PM', '');
        time = time.split(':');
        var hour = parseInt(time[0]);

        if (hour !== 12) {
          hour += 12; 
        }

        time[0] = "" + hour;
        console.log(time.join(':'));
	}
    else if (statusAM !== -1) {
    	time = time.replace('AM', '');
    	time = time.split(':');
    	var hour = parseInt(time[0]);

    	if (hour === 12) {
    		hour -= 12;
    	}
    	
    	if (hour < 10) {
    		time[0] = "0" + hour;
    	}
    	else {
    		time[0] = "" + hour;
    	}
    	
    	console.log(time.join(':'));

    }

}

timeConvert('02:40:22AM');