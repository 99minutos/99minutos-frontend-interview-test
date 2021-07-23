import Missions from './Missions';

describe('Get mission data', () => {
    it('It should be const', () => {
      expect(Missions).toBeDefined();
    });
    it('It should be function', () => {
      expect(typeof Missions).toBe('function');
    });
});