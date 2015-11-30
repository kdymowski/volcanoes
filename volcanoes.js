$(document).ready(function(){
	$("#all").click(function(){
		
		if(!Detector.webgl){
			  Detector.addGetWebGLMessage();
			} 
		   else {
			   if(window.top==window) {
					// You're not in a frame, so you reload the site.
					window.setTimeout('location.reload()', 999999999); //Reloads after three seconds
				}
				else {
				//You're inside a frame, so you stop reloading.
				}
		// Where to put the globe?
		var container = document.getElementById( 'container' );

		// Make the globe
		var globe = new DAT.Globe( container );

		TWEEN.start();

		// We're going to ask a file for the JSON data.
		var xhr = new XMLHttpRequest();

		// Where do we get the data?
		xhr.open( 'GET', 'volcano.json', true );

		// What do we do when we have it?
		xhr.onreadystatechange = function() {

			// If we've received the data
			if ( xhr.readyState === 4 && xhr.status === 200 ) {

				// Parse the JSON
				var data = JSON.parse( xhr.responseText );

				// Tell the globe about your JSON data
				for ( var i = 0; i < data.length; i ++ ) {
					globe.addData( data[i][1], {format: 'magnitude', name: data[i][0]} );
				}

				// Create the geometry
				globe.createPoints();

				// Begin animation
				globe.animate();

			}

		};

		// Begin request
		xhr.send(null);
		}
	})
	$("#holocene").click(function(){
		
		if(!Detector.webgl){
			  Detector.addGetWebGLMessage();
			} 
		   else {
			   if(window.top==window) {
					// You're not in a frame, so you reload the site.
					window.setTimeout('location.reload()', 999999999); //Reloads after three seconds
				}
				else {
				//You're inside a frame, so you stop reloading.
				}
		// Where to put the globe?
		var container = document.getElementById( 'container' );

		// Make the globe
		var globe = new DAT.Globe( container );

		TWEEN.start();

		// We're going to ask a file for the JSON data.
		var xhr = new XMLHttpRequest();

		// Where do we get the data?
		xhr.open( 'GET', 'holocene_volcano.json', true );

		// What do we do when we have it?
		xhr.onreadystatechange = function() {

			// If we've received the data
			if ( xhr.readyState === 4 && xhr.status === 200 ) {

				// Parse the JSON
				var data = JSON.parse( xhr.responseText );

				// Tell the globe about your JSON data
				for ( var i = 0; i < data.length; i ++ ) {
					globe.addData( data[i][1], {format: 'magnitude', name: data[i][0]} );
				}

				// Create the geometry
				globe.createPoints();

				// Begin animation
				globe.animate();

			}

		};

		// Begin request
		xhr.send(null);
		}
	})
	$("#uncertain").click(function(){
		
		if(!Detector.webgl){
			  Detector.addGetWebGLMessage();
			} 
		   else {
			   if(window.top==window) {
					// You're not in a frame, so you reload the site.
					window.setTimeout('location.reload()', 999999999); //Reloads after three seconds
				}
				else {
				//You're inside a frame, so you stop reloading.
				}
		// Where to put the globe?
		var container = document.getElementById( 'container' );

		// Make the globe
		var globe = new DAT.Globe( container );

		TWEEN.start();

		// We're going to ask a file for the JSON data.
		var xhr = new XMLHttpRequest();

		// Where do we get the data?
		xhr.open( 'GET', 'uncertain_volcano.json', true );

		// What do we do when we have it?
		xhr.onreadystatechange = function() {

			// If we've received the data
			if ( xhr.readyState === 4 && xhr.status === 200 ) {

				// Parse the JSON
				var data = JSON.parse( xhr.responseText );

				// Tell the globe about your JSON data
				for ( var i = 0; i < data.length; i ++ ) {
					globe.addData( data[i][1], {format: 'magnitude', name: data[i][0]} );
				}

				// Create the geometry
				globe.createPoints();

				// Begin animation
				globe.animate();

			}

		};

		// Begin request
		xhr.send(null);
		}
	})
	$("#year1899").click(function(){
		
		if(!Detector.webgl){
			  Detector.addGetWebGLMessage();
			} 
		   else {
			   if(window.top==window) {
					// You're not in a frame, so you reload the site.
					window.setTimeout('location.reload()', 999999999); //Reloads after three seconds
				}
				else {
				//You're inside a frame, so you stop reloading.
				}
		// Where to put the globe?
		var container = document.getElementById( 'container' );

		// Make the globe
		var globe = new DAT.Globe( container );

		TWEEN.start();

		// We're going to ask a file for the JSON data.
		var xhr = new XMLHttpRequest();

		// Where do we get the data?
		xhr.open( 'GET', '1899_volcano.json', true );

		// What do we do when we have it?
		xhr.onreadystatechange = function() {

			// If we've received the data
			if ( xhr.readyState === 4 && xhr.status === 200 ) {

				// Parse the JSON
				var data = JSON.parse( xhr.responseText );

				// Tell the globe about your JSON data
				for ( var i = 0; i < data.length; i ++ ) {
					globe.addData( data[i][1], {format: 'magnitude', name: data[i][0]} );
				}

				// Create the geometry
				globe.createPoints();

				// Begin animation
				globe.animate();

			}

		};

		// Begin request
		xhr.send(null);
		}
	})
	$("#year1900").click(function(){
		
		if(!Detector.webgl){
			  Detector.addGetWebGLMessage();
			} 
		   else {
			   if(window.top==window) {
					// You're not in a frame, so you reload the site.
					window.setTimeout('location.reload()', 999999999); //Reloads after three seconds
				}
				else {
				//You're inside a frame, so you stop reloading.
				}
		// Where to put the globe?
		var container = document.getElementById( 'container' );

		// Make the globe
		var globe = new DAT.Globe( container );

		TWEEN.start();

		// We're going to ask a file for the JSON data.
		var xhr = new XMLHttpRequest();

		// Where do we get the data?
		xhr.open( 'GET', '1900_volcano.json', true );

		// What do we do when we have it?
		xhr.onreadystatechange = function() {

			// If we've received the data
			if ( xhr.readyState === 4 && xhr.status === 200 ) {

				// Parse the JSON
				var data = JSON.parse( xhr.responseText );

				// Tell the globe about your JSON data
				for ( var i = 0; i < data.length; i ++ ) {
					globe.addData( data[i][1], {format: 'magnitude', name: data[i][0]} );
				}

				// Create the geometry
				globe.createPoints();

				// Begin animation
				globe.animate();

			}

		};

		// Begin request
		xhr.send(null);
		}
	})
	
});