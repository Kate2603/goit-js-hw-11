// markup одной карточки
export { createCardImg };
const galleryList = document.querySelector('.gallery');
function createCardImg(imgArr) {
  galleryList.innerHTML = imgArr
    .map(
      img =>
        `<div class="photo-card">
        <div class="info">
        <a href="${img.largeImageURL}" alt="${img.tags}" >
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" class="photo-img" />
        </a>
        <div class="info-flex">
          <p class="info-item">
            <b>Likes: ${img.likes}</b>
          </p>
          <p class="info-item">
            <b>Views: ${img.views}</b>
          </p>
          <p class="info-item">
            <b>Comments: ${img.comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads: ${img.downloads}</b>
          </p>
          
        </div>
        </div>
    </div>`
    )
    .join('');
}
