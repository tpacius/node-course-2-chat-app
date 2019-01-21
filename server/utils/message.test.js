const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Anon';
        let text = 'Test input'
        let res = generateMessage(from, text);
        expect(res).toMatchObject({from, text});
        expect(typeof res.createdAt).toBe('number');
    });
});

describe('generageLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'Anon';
        let lat, lon = 50;
        let res = generateLocationMessage(from, lat, lon);
        expect(res).toMatchObject({
            from: 'Anon',
            url: `https://www.google.com/maps?q=${lat},${lon}`
        });
        expect(typeof(res.createdAt)).toBe('number');
    });
});