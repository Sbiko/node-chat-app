var expect = require('expect');
var {generateMessage , generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var text = 'lalla';
    var from = 'me xd';
    var message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});

  });
});



describe('generateLocationMessage', () => {
  it('should generate correct locate object', () => {
    var from = 'Youness';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19'
    var location = generateLocationMessage(from,latitude,longitude);
    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({from, url });

  });
});
