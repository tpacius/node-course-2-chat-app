const expect = require('expect');
const {isRealString} = require('./validation');
//import isRealString

//isRealString
describe('Testing isRealString', () => {
    it('should reject non strings', () => {
        expect(isRealString(3)).toBeFalsy();
    });

    it('should reject strings of spaces', () => {
        expect(isRealString('     ')).toBeFalsy();
    });

    it('should allow string with non-space characters', () => {
        expect(isRealString('hhhh')).toBeTruthy();
    });
});
