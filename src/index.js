import $ from 'jquery'

$(document).ready(() => {
  $.ajax({
     url: "https://wordwatch-api.herokuapp.com/api/v1/top_word",
     success: function(data){
        $(".word-count").append(`The top word is "${Object.keys(data.word)}" and it's count is "${Object.values(data.word)}".`)
     }
  })

    // $.post('https://wordwatch-api.herokuapp.com/api/v1/words',   // url
    //    { myData: { "word": { "value": "bahhumbug" } } }, // data to submit
    //    function(data, status, jqXHR) {// success callback
    //       $('p').append('status: ' + status + ', data: ' + data);
    // });
})
