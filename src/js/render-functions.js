export function createGallery(list) {
  return list.map(item => createCard(item)).join('');
}

function createCard(item) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = item;
  return `        
        <li>
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" />
            <ul>
              <li>
                <p>Likes</p>
                <p>${likes}</p>
              </li>
              <li>
                <p>Views</p>
                <p>${views}</p>
              </li>
              <li>
                <p>Comments</p>
                <p>${comments}</p>
              </li>
              <li>
                <p>Downloads</p>
                <p>${downloads}</p>
              </li>
            </ul>
          </a>
        </li>`;
}
