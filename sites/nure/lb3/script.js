var a = 5
function incby2(a) {
	a += 2
	return a
}

function even_odd(lst){
	var rtn = []
	for (var i = 0; i < lst.length; i++) {
		if(i%2==0){
			rtn.push(lst[i])
		}
		else{
			rtn.push(-lst[i])
		}
	}
	return rtn
}

var lst = [1,2,3,4,5]
even_odd(lst)

document.getElementById('version').innerHTML = navigator.platform
document.getElementById('version').style['text-align'] = 'center'

document.getElementById('id').onclick = function(){
	alert('ID = ID clicked')
}

var USER = {
	'name': 'VALENTIN',
	'age': 45
}
USER.is_old = function(){
	return this.age > 70
}

USER.is_old() // false

h2 = document.getElementById('add')
h2.onclick = function(){
	el = document.getElementById('h2_id_inner')
	el.style.display!='block'?el.style.display='block':el.style.display='none'
}

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    h2.onclick()
  }
  if (event.code == 'KeyX' && (event.ctrlKey || event.metaKey)) {
    el = document.getElementById('date')
	el.style.display!='block'?el.style.display='block':el.style.display='none'
  }
});

