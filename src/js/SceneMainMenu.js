import Phaser from 'phaser';
import ScrollingBackground from '../Entities/ScrollingBackground';
import sprBg0 from '../content/sprBg0.png';
import sprBg1 from '../content/sprBg1.png';
import sprBtnPlay from '../content/sprBtnPlay.png';
import sprBtnPlayHover from '../content/sprBtnPlayHover.png';
import sprBtnPlayDown from '../content/sprBtnPlayDown.png';

import sndBtnOver from '../content/sndBtnOver.wav';
import sndBtnDown from '../content/sndBtnDown.wav';

class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  preload() {
    this.load.image('sprBg0', sprBg0);
    this.load.image('sprBg1', sprBg1);
    this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('sprBtnPlayHover', sprBtnPlayHover);
    this.load.image('sprBtnPlayDown', sprBtnPlayDown);

    this.load.audio('sndBtnOver', sndBtnOver);
    this.load.audio('sndBtnDown', sndBtnDown);
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'SPACE INVADER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.title.setOrigin(0.5);
    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }

    const div = document.createElement('div');
    div.innerHTML = `
    <div class='input-box'>
    <input type='text' id='user-name' placeholder='Enter your name'/></br>
    </br>
    </br>
    <input type='button' name='submitBtn' value='Play Game' />
    </div>
    `;

    const element = this.add.dom(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      div,
    );
    element.setScale(2);
    element.addListener('click');

    element.on('click', (event) => {
      if (event.target.name === 'submitBtn') {
        const inputText = document.getElementById('user-name');

        if (inputText.value !== '') {
          element.removeListener('click');
          element.setVisible(false);
          localStorage.setItem('userName', inputText.value);

          this.scene.start('SceneMain');
        }
      }
    });
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}
export default SceneMainMenu;