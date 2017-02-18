var storeData;

$(document).ready(function(){
  // console.log('jquery running!');

  // $('#forwardButton').on('click', function (){

    // Upon page load, get the data from the server
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        i = 7;
      $('#forwardButton').on('click', function (){
        $("#dataContainer").empty();
        i++;
        if (i == 17) {
          i=0;
        } // end of if reset
        appendDom();
      }); // end of forward click

       $('#backwardButton').on('click', function (){
         $("#dataContainer").empty();
         i--;
         if (i < 0) {
           i=16;
         } // end of if reset
         appendDom();
       }); // end of back click

        function appendDom(){  //function appends Dom with 0 index of phirephiters array:  .name .git.shoutout
        $("#dataContainer").append('<h2 class="gitUser">' + data.phirephiters[i].name + '</h2>' + '<p class="gitUser">' + data.phirephiters[i].git_username + '</p>');
        $("#dataContainer").append('<h2 class="shoutOut">'  + data.phirephiters[i].shoutout + '</h2>');
        $("#dataContainer").append('<img class="phiImages" src="' + data.phirephiters[i].imageURL + '"/>')
      }//end of appendDom

      // $('#forwardButton').on('click', function (){
      //   i++;
        // $("#dataContainer").append('<h2>' + data.phirephiters[i].name + '</h2>');
        // $("#dataContainer").append('<h2>' + data.phirephiters[i].git_username + " " + '</h2>');
        // $("#dataContainer").append('<h2>'  + data.phirephiters[i].shoutout + '</h2>');




        // $("#dataContainer").append(data.phirephiters[i])
        // $("#dataContainer").append('<h2>' + a + " " + b + " " + c + '</h2>');
        // append('<h2>' + phiData.name + '</h2>');
        // var $el = $("#dataContainer").children().last();
        //  $el.append('<h2>' + phiData.name + '</h2>');
        //  $el.append('<p>' + phiData.git_username + '</p>');
        //  $el.append('<div>' + phiData.shoutout + '</div>');


        // i++
        // console.log(data.phirephiters[i]);
        // // $('#dataContainer').append('<h2>' + data.phirephiters[i]+ '</h2>'); doesn't work
        // i++
        // console.log(data.phirephiters[i]);
        // i++
        // console.log(data.phirephiters[i]);
        // return storeData;

        // next I need to display that data, one at a time via click
      // } // end of for loop
    }  // end of success function
      // console.log(storeData);
    }); // end of AJAX get request
      // console.log(storeData);
    // function storeData(phiData){
    //     console.log(phiData); // phirefighters array logs 1 at a time because loop above calls one at a time
        // return phiData; //now I have phiData variable with phirefighters array stored
       // end of storeData
      //  for (var i = 0; i < phiData.length; i++) {
      //    phiData[i]
      //  }
      //  if (phiData[i]17) {
       //
      //  }

        // $('#dataContainer').append('<div class="phiInfo"></div>');
        //  var $el = $("#dataContainer").children().last();
        //  $el.append('<h2>' + phiData.name + '</h2>');
        //  $el.append('<p>' + phiData.git_username + '</p>');
        //  $el.append('<div>' + phiData.shoutout + '</div>');
        // }



});// end of document ready

//
// $('#loadData').on('click', function(){
//     console.log('getting data');
//   }); // end of click
