$(document).ready(function() {

  var animals = ["cat", "dog"];
  var renderButton = function(){
  $(".animal-tag").empty()
  for (var j = 0; j < animals.length; j++) {
    var newButton = $("<button>");
    newButton.text(animals[j]);
    newButton.attr("data-animal", animals[j]);
    $('.animal-tag').append(newButton);
  }
  }
  renderButton();
  $(".animal-tag").on("click", "button", function() {
    
    var animal = $(this).attr("data-animal");
  
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=YJYUYDogw2DNOjAG9PnOf4VeL2nQ9wcj&q=" + animal + "&limit=10&offset=0&rating=G&lang=en"
  
    //AJAX REQUEST
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
        var results = response.data;
      
  
        
      for (var i = 0; i < results.length; i++) {
           
        
          var animalDiv = $("<div>");
          var p = $("<p>").text("Rating: " + results[i].rating);
          var animalImage = $("<img>");
          
          //constructing HTML
          animalImage.attr("src", results[i].images.fixed_height.url);
  
          // Appending the div tag up top
          animalDiv.append(p);
          animalDiv.append(animalImage);
  
        
          $(".gifs-appear-here").prepend(animalDiv);
        
   };
    });
  });
  $(".btn").on("click", function(event) {
  event.preventDefault();
  var final =  $("#animal-search").val().trim()
  animals.push(final);
  renderButton();
  
  });
  
  });