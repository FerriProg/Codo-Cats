const API_URL = 'https://api.thecatapi.com/v1/breeds';

const options = {
  method: 'GET',
  // headers: {
  //   // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',

  //   // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  //   // Authorization: 'Bearer 0438da3e-5024-48d0-bd1d-9456f53672f5',
  //   // accept: 'application/json',
  //   'x-api-key': '0438da3e-5024-48d0-bd1d-9456f53672f5',
  // },
  // perspectives: 'EXT030%252CINT1',
  // roofOpen: false,
  // night: true,
  // background: true,
};

const fetchMovies = () => {
  fetch(`${API_URL}`, options)
    // Primero debo convertir la respuesta en JSON
    .then((response) => console.log(response));
};

// const fetchCars = () => {
//   fetch(
//     'https://api.mercedes-benz.com/configurator/v2/markets/es_AR/models/2383611_AR1/configurations/AJ-053_AU-851_GC-421_LE-L_LU-040_MJ-803_PC-23P-30P-431-P17-P21-P29-P31-P47-P49-P54-PBP-PWS_SA-14U-16U-17U-20B-233-235-242-249-266-270-275-287-309-355-365-399-401-413-446-463-475-489-500-501-51U-549-551-581-608-632-668-670-682-70B-732-772-810-827-868-871-876-881-882-889-891-897-913-916-919-927-986-989-B01-B51-B59-H41-L6J-R01-RZS-U09-U10-U19-U22-U25-U26-U47-U60-U82-U88-Y05_SC-3U8-502-52V-7B5-82P-8U6-99B-AA6-K16-K27-SAK/images/vehicle?perspectives=EXT030%252CINT1&roofOpen=false&night=true&background=true',
//     {
//       method: 'GET',
//       headers: {
//         //   Authorization: 'Bearer 07029682-c76b-4d5d-9f65-348cd20aa5a8',
//         'x-api-key': '07029682-c76b-4d5d-9f65-348cd20aa5a8',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': 'https://ferriprog.github.io/Codo-Cars/',
//       },
//     }
//   )
//     .then((response) => {
//       console.log(response.json());
//     })
//     .catch((error) => console.error(error));
// };

// fetchCars();

// const API_URL = 'https://api.themoviedb.org/3';

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8',
//   },
// };

// const fetchMovies = () => {
//   fetch(`${API_URL}/movie/popular`, options)
//     // Primero debo convertir la respuesta en JSON
//     .then((response) => console.log(response))
//     .then((response) => response.json())
//     //Puedo recorrer la peliculas y generar los bloques
//     .then((response) => {
//       console.log(response);
//       let movies = response.results;
//       let divPopular = document.querySelector('#popular-list');
//       for (let i = 0; i < movies.length; i++) {
//         let html = `
//                     <div class="movie-item" id="movie1">
//                         <a href="detail-movie.html">
//                             <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="" class="movie-item-img">
//                             <div class="movie-item-detail">
//                                 <p class="movie-item-detail-title">${movies[i].title}</p>
//                                 <p class="movie-item-detail-subtitle">${movies[i].release_date} - ${movies[i].vote_average}</p>
//                             </div>
//                         </a>
//                     </div>
//                 `;
//         divPopular.insertAdjacentHTML('beforeend', html);
//       }
//       console.log('Finalizado la generación de peliculas');
//     })
//     // .then(function(response){
//     //     console.log(response)
//     // })
//     .catch((error) => {
//       console.error(error);
//     });
// };
// let pages = 1;

// const getNext = () => {
//   pages = pages + 1;
//   fetch(`${API_URL}/movie/popular?page=${pages}`, options)
//     // Primero debo convertir la respuesta en JSON
//     .then((response) => response.json())
//     //Puedo recorrer la peliculas y generar los bloques
//     .then((response) => {
//       console.log(response);
//       let movies = response.results;
//       let divPopular = document.querySelector('#popular-list');
//       for (let i = 0; i < movies.length; i++) {
//         let html = `
//                 <div class="movie-item" id="movie1">
//                     <a href="detail-movie.html">
//                         <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="" class="movie-item-img">
//                         <div class="movie-item-detail">
//                             <p class="movie-item-detail-title">${movies[i].title}</p>
//                             <p class="movie-item-detail-subtitle">${movies[i].release_date} - ${movies[i].vote_average}</p>
//                         </div>
//                     </a>
//                 </div>
//             `;
//         divPopular.insertAdjacentHTML('beforeend', html);
//       }
//       console.log('Finalizado la generación de peliculas');
//     })
//     // .then(function(response){
//     //     console.log(response)
//     // })
//     .catch((err) => console.log(err));
// };

// // const fetchTopRatedMovies = () => {
// //     fetch(`${API_URL}/movie/top_rated`)
// // }

console.log('Iniciando la llamada a la API');
fetchMovies();
console.log('Estoy continuando con la ejecución de mi página');
