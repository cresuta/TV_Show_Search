const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const newSearch = this.elements.query.value;
    const config = {params: {q: newSearch}}
    const res = await axios.get(`http://api.tvmaze.com/singlesearch/shows`, config);
    retrieveTVShow(res);
    form.elements.query.value = "";
})

const retrieveTVShow = (show) => {
    const img = document.createElement('img');
    const showDetails = document.querySelector('#showDetails');
    const networkName = document.createElement('li');
    const genres = document.createElement('li');
    const ratingAvg = document.createElement('li');
    img.src = show.data.image.medium;
    networkName.innerText = `Network - ${show.data.network.name}`;
    genres.innerText = `Genres - ${show.data.genres}`;
    ratingAvg.innerText = `Rating - ${show.data.rating.average}/10`;
    showDetails.appendChild(img);
    showDetails.appendChild(networkName);
    showDetails.appendChild(genres);
    showDetails.appendChild(ratingAvg);
}
