const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const starrtAddMovieButton = document.querySelector('header button');
// const starrtAddMovieButton = document.querySelector('header').lastElementChild;
const backDrop = document.getElementById('backdrop');
// const backDrop = document.body.firstElementChild;
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');

const movies = [];
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const updateUI = () => {
    if (movies.length === '') {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    
    movies.splice(movieIndex, 1);
    const rootList = document.getElementById('movie-list');
    // rootList.removeChild(rootList.children[movieIndex]);
    rootList.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUI();
};

const closeMovieDeletionModal = () => {
    toggleBackDrop();
    deleteMovieModal.classList.remove('visible');
};

const startDeleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible');
    toggleBackDrop();
    const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));
    confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');
    // confirmDeletionBtn.removeEventListener('click',deleteMovieHandler.bind(  )) this will not work because of bind
    cancelDeletionBtn.removeEventListener('click',closeMovieDeletionModal);

    cancelDeletionBtn.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionBtn.addEventListener('click', deleteMovieHandler.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = ('movie-element');
    newMovieElement.innerHTML = `
        <div class="movie-element__image"> 
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>`;

        newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
        const rootList = document.getElementById('movie-list');
        rootList.appendChild(newMovieElement);
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}

const showMovieModal = ()  => {
    addMovieModal.classList.add('visible');
    toggleBackDrop();
};

const clearMovieInput = () => {
    for(const usrInput of userInputs) {
        usrInput.value = '';
    }
}

const toggleBackDrop = () => {
    backDrop.classList.toggle('visible')
};

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInput();
}

const addMovieHandler = () => {
 const titleValue = userInputs[0].value;
 const imageUrlValue = userInputs[1].value;
 const ratingValue = userInputs[2].value;

 if (titleValue.trim() === '' || 
    imageUrlValue.trim() === '' || 
    ratingValue.trim() === '' || 
     +ratingValue < 1 || 
     +ratingValue > 5)
 alert('Please enter valid values (rating between 1 and 5)');

 const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
 };

 movies.push(newMovie);
 console.log(movies);
 toggleBackDrop();
 closeMovieModal();
 clearMovieInput();
 renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
 updateUI();
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackDrop();
    clearMovieInput();
}

 starrtAddMovieButton.addEventListener('click', showMovieModal);
 cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
 backDrop.addEventListener('click', backdropClickHandler);
 confirmAddMovieBtn.addEventListener('click', addMovieHandler);