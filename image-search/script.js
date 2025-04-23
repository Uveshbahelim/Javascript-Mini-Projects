let accesskey = "aLtBJdY2WUBwUn413ynCTAVj65Svs9qyMJd48L70RQc"

let searchForm = document.getElementById("search-form");
let searchBox = document.getElementById("search-box");
let searchReasult = document.getElementById("search-result");
let showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

   try{
    const response = await fetch(url);
    const data = await response.json();


    if (page === 1) {
        searchReasult.innerHTML = "";
    }

    const result = data.results;

    result.forEach((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image)
        searchReasult.appendChild(imageLink)
    })
    showMoreBtn.style.display = "block"
   } catch (error) {
      console.log("This page is not found");
      
   }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    keyword = searchBox.value;
    searchImages()
    searchBox.value = "";

})

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})