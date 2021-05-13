import Phaser from 'phaser';
import ScrollingBackground from '../Entities/ScrollingBackground';

import recordBtn from '../content/recordBtn.png';
import sprBg0 from '../content/sprBg0.png';
import sprBg1 from '../content/sprBg1.png';
import sndBtnOver from '../content/sndBtnOver.wav';
import sndBtnDown from '../content/sndBtnDown.wav';
import sprBtnRestart from '../content/sprBtnRestart.png';

class SceneLeaderBoard extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneLeaderBoard' });
    this.array = JSON.parse(localStorage.getItem('array'));
    this.scoreList = '';
  }

  preload() {
    this.load.image('sprBg0', sprBg0);
    this.load.image('sprBg1', sprBg1);
    this.load.image('sprBtnRestart', sprBtnRestart);
    this.load.image('recordBtn', recordBtn);
    this.load.audio('sndBtnOver', sndBtnOver);
    this.load.audio('sndBtnDown', sndBtnDown);
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.25,
      this.game.config.height * 0.925,
      'sprBtnRestart',
    );

    this.btnRestart.setInteractive();



    this.btnRestart.setInteractive();
    this.btnRestart.on('pointerup', () => {
      this.scene.start('SceneMain');
    }, this);

    this.btnRestart.setScale(1);

    this.title = this.add.text(
      this.game.config.width * 0.5,
      128,
      'HIGHSCORES',
      {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      },
    );
    this.title.setOrigin(0.5);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }

    this.getScores();
  }

  async getScores() {
    try {
      const data = JSON.parse(localStorage.getItem('array'));
      data.forEach((elem, index) => {
        this.scoreList = this.add.text(
          this.game.config.width * 0.2,
          this.game.config.height * 0.3 + index * 50,
          `${index + 1}. ${elem.user}: ${elem.score}`,
          {
            color: '#fff',
            fontFamily: 'sans-serif',
            fontSize: '3vw',
            lineHeight: 1.3,
          },
        );
      });
    } catch {
      this.add.text(
        this.game.config.width * 0.35,
        this.game.config.height * 0.35,
        '',
        {
          color: '#d0c600',
          fontFamily: 'sans-serif',
          fontSize: '3vw',
          lineHeight: 1.3,
        },
      );
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}

export default SceneLeaderBoard;