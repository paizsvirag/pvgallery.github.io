'use strict';

const selected = document.querySelector('#selected'),
      thumbnails = document.querySelectorAll('.thumbnail');
let pictures = [
      { path: './pics/asd.jpg', title: 'testTitle', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, laborum. Quis, saepe.' },
      { path: './pics/asd2.jpg', title: 'testTitle2', desc: 'Minima dignissimos rem laudantium nam ex reprehenderit ducimus accusamus quo cum tempore quae perferendis placeat voluptate, provident modi.' },
      { path: './pics/cli.png', title: 'testTitle2', desc: 'Minima dignissimos rem laudantium nam ex reprehenderit ducimus accusamus quo cum tempore quae perferendis placeat voluptate, provident modi.' },
      { path: './pics/ever-other.png', title: 'testTitle2', desc: 'Minima dignissimos rem laudantium nam ex reprehenderit ducimus accusamus quo cum tempore quae perferendis placeat voluptate, provident modi.' },
      { path: './pics/float-2.gif', title: 'testTitle2', desc: 'Minima dignissimos rem laudantium nam ex reprehenderit ducimus accusamus quo cum tempore quae perferendis placeat voluptate, provident modi.' },
    ],
    id = 0;

document.body.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 37:
      if (id > 0) {
        id--;
      } else {
        id = pictures.length - 1;
      }
      break;
    case 39:
      if (id < pictures.length - 1) {
        id++
      } else {
        id = 0;
      }
      break;
  }
  selected.setAttribute('src', pictures[id].path);
});

thumbnails.forEach(elem => {
  elem.onclick = () => {
    console.log('test');
  }
});

document.querySelector('#left').onclick = () => {
  if (id > 0) {
    id--;
  } else {
    id = pictures.length - 1;
  }
  selected.setAttribute('src', pictures[id].path);
}

document.querySelector('#right').onclick = () => {
  if (id < pictures.length - 1) {
    id++
  } else {
    id = 0;
  }
  selected.setAttribute('src', pictures[id].path);
}
