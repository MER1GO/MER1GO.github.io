
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


function Plugin(){
	var gallery = document.getElementById('gallery_plugin')
	var pics = document.querySelectorAll('#gallery_plugin .pics img')
	var i = 0
	document.getElementById('right').onclick = function(){
		pics[i].style.border = 'none'
		i += 1
		if(i>pics.length-1){
			i = 0
		}
		pics[i].style.border = '2px solid #fff'
		p = pics[i]
		src = p.getAttribute('src')
		document.querySelector('#gallery_plugin .mainpic img').src = src
	}
	document.getElementById('left').onclick = function(){
		pics[i].style.border = 'none'
		i -= 1
		if(i<0){
			i = pics.length-1
		}
		pics[i].style.border = '2px solid #fff'
		p = pics[i]
		src = p.getAttribute('src')
		document.querySelector('#gallery_plugin .mainpic img').src = src
	}
}
Plugin()