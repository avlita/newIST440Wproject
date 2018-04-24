$.ajax({
	     type: 'POST',
	    url: "https://vision.googleapis.com/v1/images:annotate?key=" + "AIzaSyDczTU0kifrO1EGlDs6-PSvcCXs3kDQ00c",
	     dataType: 'json',
	     data: json,
	     //Include headers, otherwise you get an odd 400 error.
	     headers: {
	      "Content-Type": "application/json",
	    },
	 
	     success: function(data, textStatus, jqXHR) {
	       displayJSON(data);
	     },
	    error: function(jqXHR, textStatus, errorThrown) {
	       console.log('ERRORS: ' + textStatus + ' ' + errorThrown);
	   }
	   });
	
