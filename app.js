const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const newSearch = this.elements.query.value
    const res = await axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${newSearch}`)
    retrieveTVShow(res)
})

const retrieveTVShow = (show) => {
    console.log(show.data.name);
    console.log(show.data.image.medium);
    console.log(show.data.network.name);
    console.log(show.data.genres);
    console.log(show.data.rating.average);
}
