/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import './styles.css';
import $ from 'jquery';

/* REFERENCE: https://unsplash.com/developers */

const unsplashApiKey = process.env.UNSPLASH_API_KEY;

$(document).ready(function() {

  $(".clickable-p").click(function() {
    $('.accordion-item').hide();
    $(this).siblings("div").show();
  });

  $("#keyword-button").click(function() {
    $("#results").empty();
    const keyword = $("#keyword-input").val();
    $("#keyword-input").val("");
  });
  








  /* FOR REFERENCE */
  // $("#news-button").click(function() {
  //   $('#results').text("");
  //   const keyword = $("#news-input").val();
  //   (async () => {
  //     try {
  //       // let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OW_API_KEY}`);
  //       let response = await fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}fq=headline.search:("${keyword}")&api-key=${nytApiKey}`);

  //       let jsonifiedResponse;
  //       if (response.ok && response.status === 200) {
  //         jsonifiedResponse = await response.json();
  //         console.log(jsonifiedResponse);
  //       } else {
  //         jsonifiedResponse = false;
  //       }
  //       $('#results').append(jsonifiedResponse.response.docs[5].headline.main);
  //     } catch(e) {
  //       alert(e.message);
  //     }
  //   })();
  // });

  /* FOR REFERENCE */ 

  // $("#poke-button").click(function() {
  //   $('#results').text("");
  //   $('#results').empty();
  //   const poke = $("#poke-input").val().toLowerCase();
  //   (async () => {
  //     try {
  //       let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
  //       let jsonifiedResponse;
  //       if (response.ok && response.status === 200) {
  //         jsonifiedResponse = await response.json();
  //       } else {
  //         jsonifiedResponse = false;
  //       }
  //       let pokemon = jsonifiedResponse;
  //       let moves = pokemon.moves;
  //       if (moves) {
  //         for (let move of moves) {
  //           $('#results').append(`<div>${move.move.name}</div>`);
  //         }
  //       }
  //       else {
  //         $('#results').append(`Couldn't find a pokemon named '${poke}'. Please check spelling and try again!`);
  //       }
        
  //     } catch(e) {
  //       alert(e.message);
  //     }
  //   })();
  // });



  /* Lets the user press "enter" to press button */
  $('input').bind('keypress',function(e) {
    let event = e || window.event;
    let keycode = event.keyCode || event.which;
    if(keycode == '13') $(this).siblings("button").click();
  });
});