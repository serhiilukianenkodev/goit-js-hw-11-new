import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPhotos } from './js/pixabey-api';
import { createGallery } from './js/render-functions';

const refs = {
  form: document.querySelector('.js-form'),
  galleryList: document.querySelector('.js-gallery'),
};

refs.form.addEventListener('submit', onSearchFormSubmit);

const options = {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
};
const gallery = new SimpleLightbox('.gallery a', options);

function onSearchFormSubmit(e) {
  e.preventDefault();
  console.dir(e.target);

  const query = e.target.elements.query.value.trim();
  const isQueryEmpty = !query;
  if (isQueryEmpty) return console.log('Your query is empty');

  console.log('🚀 ~ onSearchFormSubmit ~ query:', query);

  getPhotos(query)
    .then(({ data }) => {
      console.log(data);

      if (data.hits.length === 0) {
        console.log(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }

      return data.hits;
    })
    .then(items => {
      refs.galleryList.innerHTML = createGallery(items);
      gallery.refresh();
    })
    .catch(console.log);

  e.target.reset(query);
}
