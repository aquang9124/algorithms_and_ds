var btn = document.getElementById('clicka');
btn.addEventListener( 'click', (e) => {

	if ( $('#the-only-box').attr('data-fancy') ) 
	{
		var currentBox = parseInt( $( '#the-only-box' ).attr( 'data-curr-box' ) );
		var boxClasses = document.getElementById( 'the-only-box' ).className.split( /\s+/ );

		if ( boxClasses.length > 1 && currentBox > 0 ) 
		{
			$( '#the-only-box' ).removeClass( `box${ currentBox }` );

			if ( currentBox < 6 ) {
				currentBox += 1;
			} else {
				currentBox = 1;
			}
		}
		else
		{
			currentBox += 1;
		}

		$( '#the-only-box' ).attr( 'data-curr-box', currentBox);
		$( '#the-only-box' ).addClass( `box${ currentBox }` );

	}
	else
	{
		console.log('Did not happen');
	}

} );