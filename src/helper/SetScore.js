function setScore(player, value) {
    let score = player.score
    let total = score + value
    return player.score =total
}
export default setScore;