// import WatsonSpeech from 'watson-speech';

// require('watson-speech');

// import Watson from 'watson-speech';

class Speech {
  async startListening() {
    const response = await fetch('http://localhost:3000/watson-token');
    token = await response.text();
    // var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
    //     token: token
    // });
    //
    // stream.setEncoding('utf8'); // get text instead of Buffers for on data events
    //
    // stream.on('data', function(data) {
    //   console.log(data);
    // });
    //
    // stream.on('error', function(err) {
    //     console.log(err);
    // });

      // .then(function(response) {
      //   console.log('RESPONSE');
      //   console.log(JSON.stringify(response, null, 4));
      //   return response.text();
      // }).then(function (token) {
      //   var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
      //       token: token
      //   });
      //
      //   stream.setEncoding('utf8'); // get text instead of Buffers for on data events
      //
      //   stream.on('data', function(data) {
      //     console.log(data);
      //   });
      //
      //   stream.on('error', function(err) {
      //       console.log(err);
      //   });
      //
      //   // document.querySelector('#stop').onclick = stream.stop.bind(stream);
      //
      // }).catch(function(error) {
      //     console.log(error);
      // });
  }
}

export default Speech;
