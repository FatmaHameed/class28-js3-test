'use strict';

/*
    Put your JavaScript here
*/
function main() {
  const selectEl = document.querySelector('select');
  // console.log(selectEl);
  const options = document.createElement('option');
  selectEl.appendChild(options);
  const filmInfo = document.getElementById('post');
  const filmImg = document.createElement('img');
  const filmDetails = document.createElement('div');
  // filmInfo.appendChild(filmImg);
  // filmInfo.appendChild(filmDetails);
  const url1 = 'http://www.omdbapi.com/?i=tt3896198&apikey=49f64b30';
  const url2 = 'http://www.omdbapi.com/?i=tt1285016&apikey=49f64b30';
  const url3 = 'http://www.omdbapi.com/?i=tt1285010&apikey=49f64b30';
  console.log(selectEl);
  // const urlArray = [url1, url2, url3];
  let dataArray = [];

  function getData() {
    fetch(url1)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dataArray.push(data);
        selectEl.innerHTML += `<option>${data.Title}</option>`;
        filmImg.src = data.Poster;
        filmDetails.textContent = data.Plot;
        return fetch(url2);
      })
      .then((response) => response.json())
      .then((data) => {
        // data2 = data;
        dataArray.push(data);
        selectEl.innerHTML += `<option>${data.Title}</option>`;
        filmImg.src = data.Poster;
        filmDetails.textContent = data.Plot;
        console.log(data);
        return fetch(url3);
      })
      .then((response) => response.json())
      .then((data) => {
        dataArray.push(data);
        console.log(dataArray);
        // data3 = data;
        console.log(data);
        selectEl.innerHTML += `<option>${data.Title}</option>`;
      })
      .then(() => {
        selectEl.addEventListener('change', (e) =>
          dataArray.forEach((movie) => {
            console.log(selectEl.value);
            console.log(movie.plot);
            if (e.target.value === movie.Title) {
              filmImg.src = movie.Poster;
              filmDetails.textContent = movie.Plot;
            }
            filmInfo.appendChild(filmImg);
            filmInfo.appendChild(filmDetails);
          }),
        );
      });
  }
  console.log(dataArray);

  getData();
}
main();
