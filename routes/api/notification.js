const express = require('express')
//let fetch = require('node-fetch')
const fetch = require('node-fetch-commonjs')
const router = express.Router()
router.post('/', (req, res) => {
  var notification = {
    title: 'Title of notification',
    text: 'hello Welecome',
    body: 'Welcome All and How are yoy?',
  }

  var fcm_tokens = [
    'ec-Y9tzGRdCQPs7eMrAehe:APA91bFfBndEQ0CKoIAR1vxHu-0uqSZZcV0Ri4rqoT1a4rXGehex3qdKDpa9N6QRddoWc5GFvpvKCLCFo7gKGrECfjfTGuJfKPcLq_M5FDpvO7zZO4Cf2fah_ArOelrYUdB9icOlz0us',
  ]
  var notification_body = {
    to: '/topics/topic',
    notification: notification,
    //registration_ids: fcm_tokens,
  }

  fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'POST',
    headers: {
      Authorization:
        'key=' +
        'AAAASaOpW54:APA91bHzpD9-OQ2EO5PV56qcTca6PmIhqxIS03Q-eERmhmUApggH0NmVbYPdWeDCU7g2qTkdjVONUtWMIqMW2EcCHNhTU_Qq6XMZAqKSzf6o7MMhyM4H6jS0vz2n724vl6wjf0huChDj',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(notification_body),
  })
    .then((data) => {
      console.log('TEST22')
      res.send({ msg: 'success' })
    })
    .catch((e) => {
      res.send({ msg: 'wrong' })
    })
})
module.exports = router
