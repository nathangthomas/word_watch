import $ from 'jquery'

$(document).ready(() => {
  $.ajax({
     url: "https://wordwatch-api.herokuapp.com/api/v1/top_word",
     success: function(data){
        $(".word-count").append(`The top word is "${Object.keys(data.word)}" and it's count is "${Object.values(data.word)}".`)
        console.log(Object.values(data.word))
     }
  })
})
