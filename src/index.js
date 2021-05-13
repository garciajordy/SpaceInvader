import Phaser from 'phaser';
import SceneMainMenu from './js/SceneMainMenu';
import SceneMain from './js/SceneMain';
import SceneGameOver from './js/SceneGameOver';
import SceneLeaderBoard from './js/SceneLeaderBoard';

const config = {
  type: Phaser.WEBGL,
  width: 480,
  height: 640,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  parent: 'wrapper',
  dom: {
    createContainer: true,
  },
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneGameOver,
    SceneLeaderBoard,
  ],
  pixelArt: true,
  roundPixels: true,
};
const gameArray = [];
const game = new Phaser.Game(config);
gameArray.push(game);
