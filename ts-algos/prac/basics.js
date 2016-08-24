var btn = document.getElementById('clicka');
btn.addEventListener( 'click', (e) => {

	if ( $('.box').attr('data-fancy') ) 
	{
		console.log('It happened!');
		$('.box').hasClass('box1') ? false : $('.box').addClass('box1');
	}
	else
	{
		console.log('Did not happen');
	}

} );