var foodContainer = document.getElementById("show-info")
var btn = document.getElementById("search-button")

btn.addEventListener("click", function () {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'http://api.tvmaze.com/search/shows?q=break');
  myRequest.onload = function () {
    var myData = JSON.parse(myRequest.responseText);
    renderHTML(myData);
  };
  myRequest.send();
});

function renderHTML(data) {
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "  <div class=\"show-container\"> <h2 class='show-title-h2'>" + data[i].show.name + "</h2>" +
      "<p class='show-description-p'>" +
      data[i].show.summary.replace('<p>', '').replace('</p>', '') +
      "</p></div>";
  }
  foodContainer.insertAdjacentHTML('beforeend', htmlString);
}

