var im = document.querySelectorAll('img')
for(var i=0; i<im.length;i++){
	im[i].onclick = function(){
		src = this.getAttribute('src')
		m = document.getElementById('mask')
		document.querySelector('#mask div').style.background = 'url("'+src+'") center center no-repeat'
		m.style.display = 'block'
		document.body.style.overflow = 'hidden'
	}
}

document.getElementById('exit').onclick = function(){
	document.getElementById('mask').style.display = 'none'
	document.body.style.overflow = 'auto'
}

var LANGS = ['Al Salaam a’alaykum','Barev','Zdraveite',
		  'Nei Hou', 'Bok','Dobry den', 'Goddag',
		'Hallo', 'Tere', 'Terve', 'Bonjour',
		'Guten Tag', 'Kalimera', 'Aloha',
		'Shalom','Hallo','Buon giorno',	'Konnichiwa',
		'Annyong ha shimnikka', 'Labas', 'Ni Hao',
		'Ba’ax ka wa’alik',	'Sekoh', 'God dag']
var j = 0
function setGreet(){
	
	if (j==LANGS.length-1){
			j = 0
		}
	j++
	document.getElementById('date').innerHTML = LANGS[j]
}
document.body.style.opacity = 0
var i = 0
var x = setInterval(function (){
	if (i<=100){
		document.body.style.opacity = i/100
		i += 1
	}
	if(document.getElementById('date')){
		setGreet()
	}
		
	},1)
