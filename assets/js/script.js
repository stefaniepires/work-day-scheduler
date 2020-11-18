//Adding date to header
var currentTime = moment().format("MMMM Do YYYY, h:mm a");
$("#currentDay").text(currentTime);

//select all time blocks and text areas
var timeBlocks = Array.from(document.querySelectorAll(".time-block"));

var addEvent = Array.from(document.querySelectorAll(".addEvent"));

//this is for grabbing the current hour
var currentHour = moment().hour();

//array for the events that user inputs
var events = [];

var hourColorUpdate = function () {

  for (var i = 0; i < timeBlocks.length; i++) {

    var timeBlockId = timeBlocks[i].firstElementChild.id;

    var blockHour = timeBlockId.replace("hour-", "");

    if (blockHour < 9) {
        blockHour = parseInt(blockHour) + 12;
    } else {
        blockHour = parseInt(blockHour);
    }

    if (blockHour === parseInt(currentHour)) {
      var presentTime = document.getElementById(
        JSON.stringify(blockHour)
      );
    $(presentTime).addClass("present");
    } else if (blockHour> currentHour) {

      var presentTime= document.getElementById(
        JSON.stringify(blockHour)
      );

      $(presentTime).addClass("future");
    }
  }
};


hourColorUpdate();



var loadTasks = function() {

    events = localStorage.getItem('events')
    
    if(events === null) {
        events = []
    }
    else{
         events = JSON.parse(events);
    }

    for (var i = 0; i < events.length; i++){

        
   
     $(addEvent[i]).text(events[i]);

    }

};

loadTasks();


// saved to local storage when save button is clicked

    $(".saveBtn").on("click", function() {

        var userInput = $(this).siblings(".addEvent").val()

        events.push(userInput);

        localStorage.setItem('events', JSON.stringify(events))    

    });

