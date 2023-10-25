const API_URL = 'https://api.thecatapi.com/v1/breeds';
const IMAGE_API_URL = 'https://api.thecatapi.com/v1/images';
const options = {
  method: 'GET',
};

const cardsPerPage = 3;
let currentPage = 1;
let breedsData = [];

const fetchBreeds = () => {
  fetch(`${API_URL}`, options)
    .then((response) => response.json())
    .then((response) => {
      breedsData = response;
      showBreeds(currentPage);
    });
};

const showBreeds = async (page) => {
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const divBreeds = document.querySelector('#api-breeds');
  divBreeds.innerHTML = '';

  for (let i = startIndex; i < endIndex && i < breedsData.length; i++) {
    const breed = breedsData[i];

    const breedImageResponse = await fetch(
      `${IMAGE_API_URL}/${breed.reference_image_id}`,
      options
    );
    const breedImageData = await breedImageResponse.json();

    const html = `
      <div class="card">
        <img src="${breedImageData.url}" alt="Cat ${i + 1} image" />
        <div class="cardBody">
          <h3>${breed.name}</h3>
          <p>${breed.description}</p>
        </div>
      </div>
    `;
    divBreeds.insertAdjacentHTML('beforeend', html);
  }

  updatePaginationButtons(page);
};

const updatePaginationButtons = (page) => {
  const prevButton = document.querySelector('#prev-button');
  const nextButton = document.querySelector('#next-button');

  if (page === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  const totalPages = Math.ceil(breedsData.length / cardsPerPage);
  if (page >= totalPages) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
};

const prevPage = () => {
  if (currentPage > 1) {
    currentPage--;
    showBreeds(currentPage);
  }
};

const nextPage = () => {
  const totalPages = Math.ceil(breedsData.length / cardsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    showBreeds(currentPage);
  }
};

document.querySelector('#prev-button').addEventListener('click', prevPage);
document.querySelector('#next-button').addEventListener('click', nextPage);

console.log('Iniciando la llamada a la API');
fetchBreeds();
console.log('Estoy continuando con la ejecución de mi página');
