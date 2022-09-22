import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerFrame = document.querySelector('#vimeo-player');
const player = new Player(playerFrame);
const timeData = localStorage.getItem('videoPlayerCurrentTime');

if (timeData) {
  player.setCurrentTime(timeData);
}
player.on('timeupdate', throttle(savedTime, 1000));
function savedTime(data) {
  localStorage.setItem('videoPlayerCurrentTime', data.seconds);
}
