import Phaser from 'phaser';
import ScrollingBackground from "../Entities/ScrollingBackground"

import sprBg0 from '../content/sprBg0.png';
import sprBg1 from '../content/sprBg1.png';
import recordBtn from '../content/recordBtn.png';
import sprBtnRestartHover from '../content/sprBtnRestartHover.png';
import sprBtnRestartDown from '../content/sprBtnRestartDown.png';
import sprBtnRestart from '../content/sprBtnRestart.png';
import sndBtnOver from '../content/sndBtnOver.wav';
import sndBtnDown from '../content/sndBtnDown.wav';

class SceneGameOver extends Phaser.Scene {
    constructor() {
      super({ key: "SceneGameOver" });
    }
 
    preload() {
      this.load.image("sprBg0", sprBg0);
      this.load.image("sprBg1", sprBg1);
      this.load.image("sprBtnRestart", sprBtnRestart);
      this.load.image("sprBtnRestartHover", sprBtnRestartHover);
      this.load.image("sprBtnRestartDown", sprBtnRestartDown);
      this.load.image('recordBtn', recordBtn);
      this.load.audio("sndBtnOver", sndBtnOver);
      this.load.audio("sndBtnDown", sndBtnDown);
    }

    create() {
      this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
      });
      this.title.setOrigin(0.5);
      this.sfx = {
        btnOver: this.sound.add("sndBtnOver"),
        btnDown: this.sound.add("sndBtnDown")
      };
      this.btnRestart = this.add.sprite(
        this.game.config.width * 0.5,
        this.game.config.height * 0.5,
        "sprBtnRestart"
      );
      this.btnRecord = this.add.sprite(
        this.game.config.width * 0.5,
        this.game.config.height * 0.4,
        "recordBtn"
      );
      this.btnRecord.setScale(0.4)
      this.btnRecord.setInteractive();
      this.btnRestart.setInteractive();
      this.finalScore = this.add.text(this.game.config.width * 0.25, 12, `Score: ${localStorage.getItem("score")}`, {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center'
      })
      localStorage.setItem("score", 0)
      this.btnRestart.on("pointerover", function() {
        this.btnRestart.setTexture("sprBtnRestartHover"); // set the button texture to sprBtnPlayHover
        this.sfx.btnOver.play(); // play the button over sound
      }, this);
  
      this.btnRestart.on("pointerout", function() {
        this.setTexture("sprBtnRestart");
      });
  
      this.btnRestart.on("pointerdown", function() {
        this.btnRestart.setTexture("sprBtnRestartDown");
        this.sfx.btnDown.play();
      }, this);
  
      this.btnRestart.on("pointerup", function() {
        this.btnRestart.setTexture("sprBtnRestart");
        this.scene.start("SceneMain");
      }, this);
      this.btnRecord.on("pointerup", function () {
        this.scene.start("SceneLeaderBoard");
      }, this)
      this.backgrounds = [];
      for (var i = 0; i < 5; i++) {
        var keys = ["sprBg0", "sprBg1"];
        var key = keys[Phaser.Math.Between(0, keys.length - 1)];
        var bg = new ScrollingBackground(this, key, i * 10);
        this.backgrounds.push(bg);
      }
    }
  }

  export default SceneGameOver