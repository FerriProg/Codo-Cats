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

    //traduccion de los temperamentos: separo en array segun las comas, recorro el array con un map, y hago un switch
    //para reemplazar cada palabra en ingles por su traduccion en español. Al final vuelvo a unir con comas y transformo
    //en string nuevamente para poder mostrarlo.

    let temperamentos = breed.temperament
      .split(', ')
      .map((temperamento) => {
        switch (temperamento) {
          case 'Active':
            return 'Activo';
          case 'Energetic':
            return 'Enérgico';
          case 'Independent':
            return 'Independiente';
          case 'Dependent':
            return 'Dependiente';
          case 'Intelligent':
            return 'Inteligente';
          case 'Gentle':
            return 'Amable';
          case 'Affectionate':
            return 'Afectivo';
          case 'affectionate':
            return 'Afectivo';
          case 'Social':
            return 'Sociable';
          case 'social':
            return 'Sociable';
          case 'Playful':
            return 'Juguetón';
          case 'playful':
            return 'Juguetón';
          case 'Interactive':
            return 'Interactivo';
          case 'Lively':
            return 'Dinámico';
          case 'Sensitive':
            return 'Sensible';
          case 'Curious':
            return 'Curioso';
          case 'Easy Going':
            return 'Tranquilo';
          case 'Calm':
            return 'Calmo';
          case 'calm':
            return 'Calmo';
          case 'Loyal':
            return 'Leal';
          case 'loyal':
            return 'Leal';
          case 'Agile':
            return 'Ágil';
          case 'Fun-loving':
            return 'Divertido';
          case 'Relaxed':
            return 'Relajado';
          case 'Friendly':
            return 'Amistoso';
          case 'Alert':
            return 'Alerta';
          case 'Demanding':
            return 'Demandante';
          case 'Patient':
            return 'Paciente';
          case 'Highly interactive':
            return 'Altamente interactivo';
          case 'Mischievous':
            return 'Travieso';
          case 'Sweet':
            return 'Dulce';
          case 'Quiet':
            return 'Tranquilón';
          case 'Peaceful':
            return 'Pacífico';
          case 'Clever':
            return 'Listo';
          case 'clever':
            return 'Listo';
          case 'Devoted':
            return 'Devoto';
          case 'Talkative':
            return 'Charlatán';
          case 'Warm':
            return 'Cálido';
          case 'highly intelligent':
            return 'Altamente Inteligente';
          case 'Expressive':
            return 'Expresivo';
          case 'Trainable':
            return 'Entrenable';
          case 'trainable':
            return 'Entrenable';
          case 'inquisitive':
            return 'Inquisitivo';
          case 'Adaptable':
            return 'Adaptable';
          case 'Loving':
            return 'Amoroso';
          case 'Shy':
            return 'Tímido';
          case 'Sedate':
            return 'Sosegado';
          case 'Easygoing':
            return 'Tranquilo';
          case 'Outgoing':
            return 'Salidor';
          case 'Adventurous':
            return 'Aventurero';
          case 'Sweet-tempered':
            return 'Dulcecito';
          case 'Tenacious':
            return 'Tenaz';

          default:
            return temperamento;
        }
      })
      .join(', ');

    const html = `
      <div class="card">
        <img src="${breedImageData.url}" alt="Cat ${i + 1} image" />
        <div class="cardBody">
          <h3>${breed.name}</h3>
          <p><b>Temperamento:</b> ${temperamentos}</p>
          <p><b>Peso:</b> ${breed.weight.metric} kg </p>
          <p><b>Años de vida:</b> ${breed.life_span} años</p>
          <p><b>Más información:</b> <a href="${
            breed.wikipedia_url
          }" target="_blank">Click aquí</a></p>
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
