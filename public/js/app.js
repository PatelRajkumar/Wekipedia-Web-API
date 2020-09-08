const paragraph = document.querySelector('.para1')
const btn = document.querySelector('#btn')
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
btn.addEventListener('click', (e) => {
    e.preventDefault()
    const input = document.querySelector('#input')

    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles=' + encodeURIComponent(input.value) + '&redirects=true'
    fetch(proxyUrl + url).then((response) => {
        if (response.status != 200) {
            console.log('there is something wrong', response.status)
            return;
        }
        response.json().then((data) => {
            if (data.error) {
                paragraph.textContent = 'something wrong'
            }
            var paragraph1 = data.query.pages
            var paragraph2 = JSON.stringify(paragraph1)
            paragraph2 = paragraph2.substr(100, 3000)
            paragraph2 = paragraph2.replaceAll('\\n', '')
            paragraph.innerHTML = paragraph2

        })
    })
})
const input1 = document.querySelector('#input')
input1.addEventListener('click', (e) => {
    e.preventDefault()
    paragraph.textContent = ""
    input1.textContent = ""
})