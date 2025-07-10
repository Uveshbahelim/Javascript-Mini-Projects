const quote = document.getElementById('quote')
const author = document.getElementById('author')
const api_link = "http://api.quotable.io/random";


 async function getquote(url) {
    const response = await fetch(url)
    let data = await response.json()
    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getquote(api_link)

function twitt() {
    window.open("https://twitter.com/intent/tweet?text=" +quote.innerHTML, "Tweet window", "width=600, height=300")
}