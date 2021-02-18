const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const newSearch = this.elements.query.value
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${newSearch}`)
    retrieveTVShow(res.data)
})

const retrieveTVShow = (shows) => {
    for (let result of shows) {
        if (result.show.image){
            const name = document.querySelector('h3')
            const img = document.querySelector('img')
            const showDetails = document.querySelector('#showDetails')
            const networkName = document.createElement('li')
            const genres = document.createElement('li')
            const ratingAvg = document.createElement('li')
            name.innerText = result.show.name
            img.src = result.show.image.medium
            networkName.innerText = `Network - ${result.show.network.name}`
            genres.innerText = `Genres - ${result.show.genres}`
            ratingAvg.innerText = `Rating - ${result.show.rating.average}/10`
            showDetails.appendChild(networkName);
            showDetails.appendChild(genres);
            showDetails.appendChild(ratingAvg);
        }
    }
}
