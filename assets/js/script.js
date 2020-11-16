$(document).ready(function() {

    //Adding date to header
    var currentTime = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay")
    .text(currentTime);
    
    
    //this makes the background gray when a user clicks into the time slot; reverts back to white when they click out
        $('textarea').focus(function(){
            $(this).css('background', "#F2F3F4");
        });
        $('textarea').blur(function(){
            $(this).css('background', "#fff");
        });
    
    
    // save button clicks and saving to local storage
    $(".saveBtn").on("click", function() {
        //get values of text entry and time it is in
        var taskText = $(this).siblings(".description").val();
        var taskTime = $(this).parent().attr("id");
        //save items to local storage
        localStorage.setItem(taskTime, taskText);
    });
    
    
    
    //loading local storage items
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#1 .description").val(localStorage.getItem("1"));
    $("#2 .description").val(localStorage.getItem("2"));
    $("#3 .description").val(localStorage.getItem("3"));
    $("#4 .description").val(localStorage.getItem("4"));
    $("#5 .description").val(localStorage.getItem("5"));
    
    });