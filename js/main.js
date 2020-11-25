var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://api.spoonacular.com/recipes/complexSearch?apiKey=7604406148cc4d1b9b9a53d0b2fe1e21&query=pasta&number=2');
myRequest.onload = function () {
  var myData = JSON.parse(myRequest.responseText);
  console.log(myData.results[0].title)
};
myRequest.send();
