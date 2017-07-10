$('header ul a').on('click', function(event){
	event.preventDefault();
	var link = $(this).attr('href');
	var linkid = link.substring(1, link.length);
	$('.lists div').hide();
	$('.list li').removeClass('active-tab');
	$(this).parent().addClass('active-tab');
	$('.lists').find("#" + linkid).show()
})


$('.form select').selectmenu();
$('.ui-state-active').removeClass('ui-state-active:hover');



$('#add-btn').on('click',function(event){
	event.preventDefault();
	$('.list').fadeTo(1000,0).hide();
	$('.form').fadeTo(1000,1).show();
})

$('.close-btn').on('click', function(event){
	event.preventDefault();
	$('.list').fadeTo(500,1).show();
	$('.form').fadeTo(500,0).hide();
})


	var $ul = $('<ul>').appendTo('.lists div');
	var $ul1=$ul.eq(0).attr('data-status','0');
	var $ul2=$ul.eq(1).attr('data-status','1');
	var $ul3=$ul.eq(2).attr('data-status','2');
	var $cross = $('<i>').addClass('fa').addClass('fa-times').attr('aria-hidden','true');
	var $edit = $('<i>').addClass('fa').addClass('fa-pencil').attr('aria-hidden','true');
	
	

if(localStorage.length == 0){
	
}
else {
	for(var key in localStorage){
		
		var $cross = $('<a>').addClass('fa').addClass('fa-times').attr('aria-hidden','true');
		
		var item = localStorage.getItem(key);
		var obj = JSON.parse(item);
		var $name1 = $('<span>'+obj.Name+' '+'</span>');
		var $descr1 = $('<span>'+obj.Weigth+'</span>');
		
		if(obj.Status == 0){
			var $li = $('<li>').append($name1).append($descr1).append($cross).appendTo($ul1);
		} else if(obj.Status == 1){
			var $li = $('<li>').append($name1).append($descr1).append($cross).appendTo($ul2);
		} else if(obj.Status == 2){
			var $li = $('<li>').append($name1).append($descr1).append($cross).appendTo($ul3);
		}
		$li.attr('data-id', obj.id);
}
}

$('.new-btn').on('click', function(event){
	event.preventDefault();
	var $cross = $('<a>').addClass('fa').addClass('fa-times').attr('aria-hidden','true');
	var a;
	var $name = $('#nameof').val();
	var $descr = $('#descrof').val();
	var $name1 = $('<span>'+$name+' '+'</span>');
	var $descr1 = $('<span>'+$descr+'</span>');
	var $site = $('#site').val();
	var id = Math.random().toString(36).substr(2, 8);
	var $li = $('<li>').append($name1).append($descr1).attr('data-id', id).append($cross);
	if($site == 0){
		$li.appendTo($ul1)
		a = 0;
	} else if($site == 1){
		$li.appendTo($ul2)
		a = 1;
	} else if($site == 2){
		$li.appendTo($ul3)
		a = 2;
	}
	var data = {Name:$name,
	Weigth:$descr,
	Status: a,
	id: id};

	localStorage.setItem(id, JSON.stringify(data));

	$('#nameof').val('');
	$('#descrof').val('');
	$('.list').fadeTo(500,1).show();
	$('.form').fadeTo(500,0).hide();

})


$('.lists').on('click','.fa-times',function(event){
	event.preventDefault();
	$parent = $(this).parent();
	$parent.fadeOut(500, function(){
		$parent.remove();
	})
	localStorage.removeItem($parent.attr('data-id'))
})

$('#remove-btn').on('click', function(event){
	event.preventDefault();
	localStorage.clear();
	$('.lists ul li').remove();
})


