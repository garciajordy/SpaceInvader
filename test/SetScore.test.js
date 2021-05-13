import setScore from "../src/helper/SetScore"
test('adds the new score to player', () => {
    let player = document.createElement('div');
    player.score = 100
    expect(player.score).toBe(100);
    setScore(player,20)
    expect(player.score).toBe(120);
  });