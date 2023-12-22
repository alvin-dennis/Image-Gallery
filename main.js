const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {
  'pic1.jpg' : 'A zoomed in pin of an eye',
  'pic2.jpg' : 'A Random pic',
  'pic3.jpg' : 'A Bunch of white and purple flowers',
  'pic4.jpg' : 'An Egyptian painting',
  'pic5.jpg' : 'A butterfly sitting on a leaf'
}



for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}



btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
