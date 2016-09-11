// this creates a new variable called twilio from twilio node module.

class PhoneService {

  makeCall(){
    fetch('http://localhost:3000/call', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

}
export default PhoneService

// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
