let h = document.getElementById('h');
console.log(h);
function clock(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let hoursRotate = (hours*30)+(0.5*minutes); 
	let minutesRotate = (minutes*6)+(0.1*seconds); 
	let secondsRotate = seconds*6; 

	h.style.transform = 'rotate(' + hoursRotate + 'deg)';
	document.getElementById('m').style.transform = 'rotate(' + minutesRotate + 'deg)';
	document.getElementById('s').style.transform = 'rotate(' + secondsRotate + 'deg)';

	setTimeout(clock, 1000)	
}

clock();