let currentCategory="general";
let count=2;
localStorage

function getAPIData(currentCategory) {
  const API_LINK = `https://saurav.tech/NewsAPI/top-headlines/category/${currentCategory}/in.json`;

  fetch(API_LINK)
    .then((response) => response.json())
    .then((data) => displayNews(data.articles))
    .catch((e) => console.log(e));
}
window.addEventListener("DOMContentLoaded", getAPIData(currentCategory));
console.log(currentCategory);
function getCategory() {
  const categoryArray = document.querySelectorAll(".category-item");
  console.log("Hello", categoryArray);
  categoryArray.forEach((item) => {
    console.log(item);
    item.addEventListener("click", function (e) {
      currentCategory = e.currentTarget.dataset.id;
      getAPIData(currentCategory);
    });
  });
}
//getAPIData(currentCategory);
getCategory();

function displayNews(articles) {
  document.getElementById("heading").innerHTML=currentCategory.toUpperCase();
  
  const plainCard = articles.map((art,i)=>{
  
    return `<div class="col-md-4">
    <h4>${art.title}</h4><p>
    <img src=${art.urlToImage} width=95% height=200/>
    ${art.description}</p></div>`;

  });
  document.getElementById("main-card").innerHTML = plainCard.join("");
}


