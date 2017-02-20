var currentIndex = 8;
$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      for (var i = 0; i < data.phirephiters.length; i++) {
        $('#dotsDiv').append('<span class="dot"></span>');
      } //end of dots setup

      currentIndex = 8; // starts at me!

      $('#forwardButton').on('click', function (){
        $('.phiImages').fadeOut(500, function(){ //
          $("#dataContainer").empty();
          // $("#dotsDiv").empty();
          currentIndex++;
          if (currentIndex == data.phirephiters.length) {
            currentIndex = 0;
          } // end of if reset
          appendDom();
          appendDot();
        }); //end of fadeOut
      }); // end of forward button

      $('#backwardButton').on('click', function (){
        $('.phiImages').fadeOut(500, function(){
          $("#dataContainer").empty();
          // $("#dotsDiv").empty();

          currentIndex--;
          if (currentIndex < 0) {
            currentIndex=data.phirephiters.length-1;
          } // end of if reset
          appendDom();
          appendDot();
        }); //end of fadeOut
      }); // end of back button



      function appendDom(){  //function appends Dom with 0 index of phirephiters array:  .name .git.shoutout
        $('#dataContainer').append('<h2 class="gitUser">' + data.phirephiters[currentIndex].name + '</h2>' + '<p class="gitUser">' + data.phirephiters[currentIndex].git_username + '</p>');
        $('#dataContainer').append('<h2 class="shoutOut">'  + data.phirephiters[currentIndex].shoutout + '</h2>');
        $('#dataContainer').append('<img class="phiImages" src="' + data.phirephiters[currentIndex].imageURL + '" style="display:none"/>');
        $('.phiImages').fadeIn(500);
      }//end of appendDom

      function appendDot(){
        $("#dotsDiv").empty();
        for (var i = 0; i < data.phirephiters.length; i++) {

          if (i == currentIndex) {
            $('#dotsDiv').append('<span class="dot active"></span>');
          } else {
            $('#dotsDiv').append('<span class="dot"></span>');
          }
        } //end of for loops
      } //end of appendDot

    }  // end of AJAX SUCCESS function
  }); // end of AJAX GET request
});// end of document ready
