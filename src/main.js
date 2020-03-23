/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';
import $ from 'jquery';
// import capitalizeString from './operations';

const unsplashAccessKey = "YOUR_UNSPLASH_ACCESS_KEY_HERE";

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

/* REFERENCE: https://unsplash.com/developers */

$(document).ready(function() {

  $(".clickable-p").click(function() {
    $('.accordion-item').hide();
    $(this).siblings("div").show();
  });

  $("#keyword-button").click(function() {
    $('#results').empty();
    const keyword = $("#keyword-input").val().toLowerCase();
    const displayKeyword = capitalizeString(keyword);
    (async () => {
      try {
        let response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${unsplashAccessKey}`);
        let parsedResponse;
        if (response.ok && response.status === 200) {
          parsedResponse = await response.json();
        } else {
          parsedResponse = false;
        }
        showPhoto(parsedResponse);
      } catch(e) {
        showPhoto(false);
        console.log(e.message);
      }
    })();

    const showPhoto = function(data) {
      if (data && data.results && data.results[0]) {
        const firstImage = data.results[0];
        // const url = firstImage.urls.regular;
        // const author = firstImage.user.name;
        // const alt_description = firstImage.alt_description;

        let htmlContent = `<figure>
          <img src="${firstImage.urls.regular}" alt="${firstImage.alt_description}" class="img-fluid">
          <figcaption>${displayKeyword} by ${firstImage.user.name}</figcaption>
        </figure>`;
        $("#results").append(htmlContent);
      } else {
        $("#results").append(`There was an error handling your request. Please check your inputs and try again!`);
      }
    }; 
  });


  // (async () => {
  //   try {
  //     let response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}`);
  //     let jsonifiedResponse;
  //     if (response.ok && response.status === 200) {
  //       jsonifiedResponse = await response.json();
  //     } else {
  //       jsonifiedResponse = false;
  //     }
  //     let myResult = jsonifiedResponse;
  //     if (myResult) {
  //       console.log(myResult);
  //     }
  //     else {
  //       console.log('error this is else');
  //       // $('#results').append(`Couldn't find a pokemon named '${poke}'. Please check spelling and try again!`);
  //     }
        
  //   } catch(e) {
  //     alert(e.message);
  //   }
  // })();


  /* Lets the user press "enter" to press button */
  $('input').bind('keypress',function(e) {
    let event = e || window.event;
    let keycode = event.keyCode || event.which;
    if(keycode == '13') $(this).siblings("button").click();
  });
});