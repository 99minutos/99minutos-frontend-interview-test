import StoryMission from './StoryMission';

describe('I should put particular data of each story', () => {
    it('It should be const', () => {
      expect(StoryMission).toBeDefined();
    });
    it('It should be function', () => {
      expect(typeof StoryMission).toBe('function');
    });
});