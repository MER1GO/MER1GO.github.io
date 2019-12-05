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

function valid_email_and_phone(){
	ph = document.getElementById('phone_f')
	em = document.getElementById('email_f')
	re_ph = /[+][0-9]{3}[-][0-9]{2}[-][0-9]{3}[-][0-9]{4}/
	re_em = /\S+@\S+\.\S+/
	if(!re_ph.test(ph.value)){
		document.getElementById('phone_l').style.color = 'red'
	}
	else{
		document.getElementById('phone_l').style.color = 'black'
	}
	if(!re_em.test(em.value)){
		document.getElementById('email_l').style.color = 'red'
	}
	else{
		document.getElementById('email_l').style.color = 'black'
	}
}

document.getElementById('valid').onclick = valid_email_and_phone

document.getElementById('new_button').onclick = function(){
	if (!Modernizr.canvas) {
		em = document.getElementById('new_email')
		re_em = /\S+@\S+\.\S+/
		if(!re_em.test(em.value)){
			document.getElementById('new_email').style.border = '1px solid red'
		}
		else{
			document.getElementById('new_email').style.border = '1px solid red'
		}
	} else {

	}
  // no native canvas support available :(
}
