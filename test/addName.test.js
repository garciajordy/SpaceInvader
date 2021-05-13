import addName from "../src/helper/PlayerName"
test('adds the new score to player', () => {
    let player = document.createElement('div');
    //player.name = "me"
    addName(player,"test")
    expect(player.naming).toMatch("test");
    addName(player,"updated")
    expect(player.naming).toMatch("updated");
  });