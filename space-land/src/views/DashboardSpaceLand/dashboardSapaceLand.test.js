import DashboardSpaceLand from './DashboardSpaceLand';

describe('You should return the data of missions and of each mission separately', () => {
    it('It should be const', () => {
      expect(DashboardSpaceLand).toBeDefined();
    });
    it('It should be function', () => {
      expect(typeof DashboardSpaceLand).toBe('function');
    });
});