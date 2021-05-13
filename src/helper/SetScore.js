function setScore(player, value) {
  const { score } = player;
  const total = score + value;
  player.score = total;
  return player;
}
export default setScore;