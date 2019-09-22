$(document).ready(function() {
  
    function getQuote() {
    
      
      var quotes = ["It's a me!", "They drew first blood.", "Cubs win!", "Keep your eye on the ball.", "This is a tasty burger!", "A journey of a thousand miles must begin with a single step.", "Life is 10% what happens to me and 90% how I react to it.", "We become what we think about.", "An unexamined life is not worth living."];
      var author = ["-Mario", "-John Rambo", "-Harry Carey", "-Every little league coach", "-Jules", "Lao Tzu", "Henry Stanley Haskins", "Earl Nightingale", "Socrates"];
      
      var randomNum = Math.floor((Math.random() * quotes.length));
      var randomQuote = '"' + quotes[randomNum] + '"';
      var theAuthor = author[randomNum];
      
      $("#text").text(randomQuote);
      $("#author").text(theAuthor);
    }
    
    $("#new-quote").on("click", function() {
      getQuote();
      
    $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=" + $('#text').text() + " " + $('#author').text());
      
    });
    
  });
   
  