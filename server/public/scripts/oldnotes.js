var storeData;

$(document).ready(function(){
  // console.log('jquery running!');

  // $('#forwardButton').on('click', function (){

    // Upon page load, get the data from the server
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){ //only have access to this data one time? // we now have the phirephiters array of objects
        // for (var i = 0; i < data.phirephiters.length; i++) { // loop through phirephiters array data
        // storeData = data.phirephiters[i];  // call/populate the storeData function with phirephiters as data, 1 index at a time
        // storeData = data; // went a different way - couldn't get var outside of this success function other than populating a function like example, but that was called at each index for full array and couldn't figure out how to not do that
        console.log(data); // got that phirephiters array of objects
        // i = 0; // start at 0; eventually add randomizer here
        // console.log(data.phirephiters[i]); // first object in phirephiters array is object Melissa
        // console.log(data.phirephiters[i].name); // first name in array is name Melissa

        i = 0;
      $('#forwardButton').on('click', function (){
        $("#dataContainer").empty();
        appendDom();
        i++;
      }); // end of forward click


       $('#backwardButton').on('click', function (){
         $("#dataContainer").empty();
         i--; // if i comes in as 1, it should go back to 0 before appending DOM
         appendDom(); // should call appendDom with 0 but needs extra click
       }); // end of back click

        function appendDom(){  //function appends Dom with 0 index of phirephiters array:  .name .git.shoutout
        $("#dataContainer").append('<h2>' + data.phirephiters[i].name + '</h2>');
        $("#dataContainer").append('<h2>' + data.phirephiters[i].git_username + " " + '</h2>');
        $("#dataContainer").append('<h2>'  + data.phirephiters[i].shoutout + '</h2>');
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
