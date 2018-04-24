function send() {

// Imports the Google Cloud client library
 console.log("run");
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();


	
	 console.log("run1");
// Performs label detection on the image file
client
  .labelDetection('./resources/wakeupcat.jpg')
  .then(results => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  })
  .catch(err => {
    console.error('ERROR:', err);
    console.log("run2");
  });
}