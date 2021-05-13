import postData from "../src/helper/api"
test('adds new name to player', () => {
   postData("jordy",500).then(function(data){
        expect(data.result).toMatch("Leaderboard score created correctly.")
   }).catch(function (e) {
       e
   })
  });