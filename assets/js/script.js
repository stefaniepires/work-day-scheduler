//current day is displayed at the top of the calendar
    // Adding date to header
    var currentTime = moment().format("dddd MMMM Do, YYYY");
    $("#currentDay")
    .text("Today is " + currentTime);
//time blocks for standard business hours
//time block is color-coded to indicate whether it is in the past, present, or future
//click into a time block can enter an event

//click the save button for that time block text for that event is saved in local storage


//refresh the page saved events persist
