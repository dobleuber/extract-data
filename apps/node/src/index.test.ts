import {helloWord} from '.';

describe('hello world', () => {
    it('should return hello world', () => {
        expect(helloWord()).toBe('hello world');
    });
})

