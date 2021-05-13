import addName from "../src/helper/PlayerName"
test('adds new name to player', () => {
    let player = document.createElement('div');
    addName(player,"test")
    expect(player.naming).toMatch("test");
    addName(player,"updated")
    expect(player.naming).toMatch("updated");
  });