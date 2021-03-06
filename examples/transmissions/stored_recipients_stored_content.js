'use strict';

var key = 'YOURAPIKEY'
  , SparkPost = require('sparkpost')
  , client = new SparkPost(key);

var trans = {
  from: 'From Envelope <from@example.com>',
  subject: 'Example Email for Stored List and Template',
  recipientList: 'example-list',
  template: 'my-template',
  recipients: [{ address: { email: 'john.doe@example.com' } }]
};

client.transmissions.send(trans, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log('Congrats you can use our SDK!');
  }
});
