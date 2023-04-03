const form = document.querySelector("#mainForm")
const input = document.querySelector("#inputt")
const space = document.querySelector("#movieposters")

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const movieName = input.value
    const config = { params: { q: movieName } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    makeImages(res.data)
    input.value = ""
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG")
            img.src = result.show.image.medium;
            space.append(img)
        }
    }
}
