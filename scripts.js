const thumbnails = document.querySelectorAll('.js-gallery-thumbnail');
const mainImg = document.querySelector('.js-main-img');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', changeImg);
});

function changeImg(e) {
  const newImg = e.target.src;
  mainImg.src = newImg;
  scrollToTop();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
