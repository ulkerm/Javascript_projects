// const userChosenKeyName = 'level';
// let person = {
//     name: 'Max',
//     age: 30,
//     [userChosenKeyName]: '...',
//     hobbies: ['Spors', 'Cooking'],
//     greet: function() {
//         alert('Hi, Max');
//     }
// };

// person.greet();

// person.age = 31;    // overwrite the value

// person.isAdmin = true;   // add the property
// delete person.age;   // delete the property

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if(movies.length === '') {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        const { info, ...otherProps } = movie;
        console.log(otherProps);
        let { getFormattedTitle } = movie;
        // getFormattedTitle = getFormattedTitle.bind(movie);  //bele movie-ebind elemesen this umumi windows-a aid olur
        // let text = movie.getFormattedTitle() + ' - ';  bind elemeyin yerine bele de yazsan olur
        let text = getFormattedTitle.call(movie) + ' - ';
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if(title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    };

    const newMovie = {
        info:{
        title,
        [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormattedTitle() {
            return this.info.title.toUpperCase();
        }
    };

    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);