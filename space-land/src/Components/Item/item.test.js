import Item from './Item';

describe('You should return the data of each card', () => {
    it('It should be const', () => {
      expect(Item).toBeDefined();
    });
    it('It should be function', () => {
      expect(typeof Item).toBe('function');
    });
});