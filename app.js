const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const newSearch = this.elements.query.value
    const res = await axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${newSearch}`)
    retrieveTVShow(res)
})

const retrieveTVShow = (show) => {
    const name = document.querySelector('h3')
    const img = document.querySelector('img')
    const showDetails = document.querySelector('#showDetails')
    const networkName = document.createElement('li')
    const genres = document.createElement('li')
    const ratingAvg = document.createElement('li')
    name.innerText = show.data.name
    img.src = show.data.image.medium
    networkName.innerText = `Network - ${show.data.network.name}`
    genres.innerText = `Genres - ${show.data.genres}`
    ratingAvg.innerText = `Rating - ${show.data.rating.average}/10`
    showDetails.appendChild(networkName);
    showDetails.appendChild(genres);
    showDetails.appendChild(ratingAvg);
}
