for (let i = 0; i < 32; i++) {
	let number = Math.random();
	if (number <= 0.5) {
		document.getElementById('character').innerHTML += '<div class="white"></div>'
	}else{
		document.getElementById('character').innerHTML += '<div class="black"></div>'

	}
};

let box = document.getElementById('character');
let copy = box.cloneNode('true');
document.getElementById('container').appendChild(copy);

