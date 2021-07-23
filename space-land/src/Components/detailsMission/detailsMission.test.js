import DetailsMission from './DetailsMission';

describe('I should return the details of a mission', () => {
    it('It should be const', () => {
      expect(DetailsMission).toBeDefined();
    });
    it('It should be function', () => {
      expect(typeof DetailsMission).toBe('function');
    });
});