$("#keyword-button").click(function() {
  $('#results').empty();
  const keyword = $("#keyword-input").val().toLowerCase();

  (async () => {
    try {
      let response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${unsplashAccessKey}`);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      let myResult = jsonifiedResponse;
      if (myResult) {
        console.log(myResult.results[0].urls.regular);
      }
      else {
        console.log('error this is else');
      // $('#results').append(`Couldn't find a pokemon named '${poke}'. Please check spelling and try again!`);
      }
    } catch(e) {
      alert(e.message);
    }
  })();
});