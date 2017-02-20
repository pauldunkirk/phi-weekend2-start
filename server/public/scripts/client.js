$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){
      for (var i = 0; i < data.phirephiters.length; i++) {
        $('#dotsDiv').append('<span class="dot"></h2>');
      } //end of dots setup

      i = 8; // starts at me!

      $('#forwardButton').on('click', function (){
        $('.phiImages').fadeOut(500, function(){ //
          $("#dataContainer").empty();
          // $("#dotsDiv").empty();
          i++;
          if (i == data.phirephiters.length) {
            i=0;
          } // end of if reset
          appendDom();
          appendDot();
        }); //end of fadeOut
      }); // end of forward button

      $('#backwardButton').on('click', function (){
        $('.phiImages').fadeOut(500, function(){
          $("#dataContainer").empty();
          // $("#dotsDiv").empty();
          i--;
          if (i < 0) {
            i=data.phirephiters.length-1;
          } // end of if reset
          appendDom();
          appendDot();
        }); //end of fadeOut
      }); // end of back button



      function appendDom(){  //function appends Dom with 0 index of phirephiters array:  .name .git.shoutout
        $('#dataContainer').append('<h2 class="gitUser">' + data.phirephiters[i].name + '</h2>' + '<p class="gitUser">' + data.phirephiters[i].git_username + '</p>');
        $('#dataContainer').append('<h2 class="shoutOut">'  + data.phirephiters[i].shoutout + '</h2>');
        $('#dataContainer').append('<img class="phiImages" src="' + data.phirephiters[i].imageURL + '" style="display:none"/>');
        $('.phiImages').fadeIn(500);
      }//end of appendDom

      // function appendDot(){
      //       // $('#dotsDiv').html('<span class="active">' + data.phirephiters[i].name + '</span>');
      //       // for (var i = 0; i < data.phirephiters.length; i++) {
      //       //   $('#dotsDiv').append('<span class="dot"></h2>');
      //       //   // &(this).replaceWith('<span class="dot"></h2>')
      //       // } //end of dots setup
      // } //end of appendDot

    }  // end of AJAX SUCCESS function
  }); // end of AJAX GET request
});// end of document ready
