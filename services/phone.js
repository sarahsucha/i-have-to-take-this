// this creates a new variable called twilio from twilio node module.
import twilio from 'twilio';
import config from '../env.js';

var accountSid = config.twilio.accountSID;
var authToken = config.twilio.authToken;

class PhoneService {
  constructor() {
    this.client = twilio(accountSid, authToken)
  }
  makeCall(){
  client.calls.create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: "+14155397005",
      from: "+16502156875"
    }, function(err, call) {
      process.stdout.write(call.sid);
    });
  }
}

// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
