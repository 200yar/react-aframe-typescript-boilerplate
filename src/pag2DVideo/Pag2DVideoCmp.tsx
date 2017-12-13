/// <reference path="../index.d.ts"/>
//todo: hacer componente con raycaster para que entidad sea clicable (ejemplo: btn play videoplayer)
//todo: comprobar si se ha cargadoo aframe.js
//todo: usar parte del video pnau going bang
//todo: usar raycaster para interaccion de raton con video player controls

import * as React from 'react';
import 'aframe-video-controls/dist/aframe-video-controls';

export default class Pag2DVideoCmp extends React.Component<{}, {}> {

  onClickBtnPause = () => {
    const video1El = document.querySelector('#video1') as HTMLVideoElement;
    const video2El = document.querySelector('#video2') as HTMLVideoElement;
    video1El.pause();
    video2El.pause();
  };

  onClickBtnPlay = () => {
    const video1El = document.querySelector('#video1') as HTMLVideoElement;
    const video2El = document.querySelector('#video2') as HTMLVideoElement;
    video1El.play();
    video2El.play();
  };

  public render() {
    return (
      <div>
        <a-scene raycaster="far: 100; objects: [src='#video-play-image']" cursor="rayOrigin: mouse">

          <a-assets>
            <video id="video1"><source type="video/mp4" src="video/echo-hereweare.mp4"/></video>
            <video id="video2"><source type="video/mp4" src="video/canguros.mp4"/></video>
            <img id="video-play-image" src="img/play-video-btn.png"/>
            <img id="video-pause-image" src="img/pause-video-btn.png"/>
          </a-assets>

          <a-camera position="0 0.5 1"><a-cursor id="cursor" color="yellow"/></a-camera>

          <a-videosphere src="#video2"/>

          <a-video src="#video1" position="0 2.5 -1" scale="2 1 0"/>

          <a-entity video-controls="src:#video1; distance:1; size:2"/>

        </a-scene>
        <div className="top-menu">
          <a onClick={ this.onClickBtnPlay } className="top-menu-item">Play</a>
          <a onClick={ this.onClickBtnPause } className="top-menu-item">Pause</a>
        </div>
      </div>
    );
  }
}