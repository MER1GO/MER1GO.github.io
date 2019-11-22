document.getElementById('phone_f').onfocus = function(){
	document.querySelector('#phone span').style.display = 'none'
}
document.getElementById('phone_f').onblur = function(){
	if (document.getElementById('phone_f').value==''){
		document.querySelector('#phone span').style.display = 'inline-block'	
	}
}
document.getElementById('email_f').onfocus = function(){
	document.querySelector('#email span').style.display = 'none'
}
document.getElementById('email_f').onblur = function(){
	if (document.getElementById('email_f').value==''){
		document.querySelector('#email span').style.display = 'inline-block'	
	}
	// document.querySelector('#email span').style.display = 'inline-block'
}

document.getElementById('valid').onclick = function(){
	ph = document.getElementById('phone_f')
	em = document.getElementById('email_f')
	re_ph = /[+][0-9]{3}[-][0-9]{2}[-][0-9]{3}[-][0-9]{4}/
	re_em = /[a-zA-Z0-9_@]+@[a-zA-Z0-9]+\.[a-zA-Z]/
	if(!re_ph.test(ph.value)||ph.value.includes('00-000-0000')||ph.value.includes('000-0000')||ph.value.length==0){
		document.getElementById('phone_l').style.color = 'red'
		if(ph.value.length==0){
			alert("U must enter your phone")
		}
	}
	else if(ph.value.length==0){
		alert("U must enter your phone")
	}
	else{
		document.getElementById('phone_l').style.color = 'black'
	}
	if(!re_em.test(em.value)||(em.value.split('.')[1].length>3)||(em.value.split('.')[1].length<2)||em.value.length==0){
		document.getElementById('email_l').style.color = 'red'
		if(em.value.length==0){
			alert("U must enter your email")
		}
	}
	else{
		document.getElementById('email_l').style.color = 'black'
	}
	// console.log(re_ph.test(ph.value))
	// console.log(re_em.test(em.value))
}