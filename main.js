// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

const button = document.querySelector('button')
const resBtn = () => {
 console.log('button clicked')
 axios.get('https://swapi.dev/api/planets/?search=alderaan').then(resp => {
     console.log(resp.data)
     const alderaanResidence = resp.data.results[0].residents
    for(i = 0; i < alderaanResidence.length; i++) {
        axios.get(alderaanResidence[i]).then(res => {
            console.log(res.data)
            const h2 = document.createElement("h2")
            h2.innerText = res.data.name
            document.querySelector("body").appendChild(h2)
        })
    }
 })
}
button.addEventListener('click', resBtn)
