const accessKey = "aLtBJdY2WUBwUn413ynCTAVj65Svs9qyMJd48L70RQc";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(
    keyword
  )}&client_id=${accessKey}&per_page=12`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) searchResult.innerHTML = "";

    data.results.forEach(result => {
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";

      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description || "Unsplash Image";

      imageLink.appendChild(image);
      searchResult.appendChild(imageLink);
    });

    showMoreBtn.style.display = data.total_pages > page ? "block" : "none";
  } catch (error) {
    console.error("Error fetching images:", error);
    searchResult.innerHTML = `<p class="error">Unable to fetch images. Try again later.</p>`;
    showMoreBtn.style.display = "none";
  }
}

searchForm.addEventListener("submit", e => {
  e.preventDefault();
  keyword = searchBox.value.trim();
  if (!keyword) return;

  page = 1;
  searchImages();
  searchBox.value = "";
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
