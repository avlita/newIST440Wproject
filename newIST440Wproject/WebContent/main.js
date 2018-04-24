function uploadFiles(event) {
  event.stopPropagation(); // Stop stuff happening
  event.preventDefault(); // Totally stop stuff happening

  //Grab the file and asynchronously convert to base64.
  var file = $('#fileInput')[0].files[0];
  var reader = new FileReader()
  reader.onloadend = processFile
  reader.readAsDataURL(file);
}

function processFile(event) {
  var encodedFile = event.target.result;
  sendFiletoCloudVision(encodedFile)
}

var type = $("#type").val();

// Strip out the file prefix when you convert to json.
var json = '{' +
  ' "requests": [' +
  '	{ ' +
  '	  "image": {' +
  '	    "content":"' + content.replace("data:image/jpeg;base64,", "") + '"' +
  '	  },' +
  '	  "features": [' +
  '	      {' +
  '	      	"type": "' + type + '",' +
  '			"maxResults": 200' +
  '	      }' +
  '	  ]' +
  '	}' +
  ']' +
  '}';

