import Pictures from './Pictures';

describe('Something should return if there is an image or not.', () => {
    it('It should be const', () => {
      expect(Pictures).toBeDefined();
    });
    it('It should be function', () => {
      expect(typeof Pictures).toBe('function');
    });
});