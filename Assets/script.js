// Make a function to color code hours of past present and future
// Create a function that will run once an hour that will compare the ID of your block with the current hour inside the variable date
// Google jQUery how to change or delete attributes w/ jQuery
function colorCode() {
var currentTime = moment().format("HH");
// Create jQuery function and if else if else statement to utilize past, present, and future color codes defined in original styles.css doc
    $(".time-block").each(function () {
var inputField = JSON.parse($(this).attr("id"));
    if (currentTime > inputField) {
        $(this).addClass("past");
    } else if (currentTime == inputField) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
        }
    });
}
colorCode();

// dddd MMMM Do YYYY date format provided by moment.js webpage given in original readME instructions.
var currentDate = $("#currentDay");
var date = moment().format('dddd MMMM Do YYYY');
currentDate.text(date)


// Use jQuery to getItem for display regardless of refresh
$("#9 .time-block").val(localStorage.getItem("9"))
$("#10 .time-block").val(localStorage.getItem("10"))
$("#11 .time-block").val(localStorage.getItem("11"))
$("#12 .time-block").val(localStorage.getItem("12"))
$("#13 .time-block").val(localStorage.getItem("13"))
$("#14 .time-block").val(localStorage.getItem("14"))
$("#15 .time-block").val(localStorage.getItem("15"))
$("#16 .time-block").val(localStorage.getItem("16"))
$("#17 .time-block").val(localStorage.getItem("17"))

// Add a function to save value of time-block and prevent default refresh of form *tutor assisted
$(".saveBtn").on("click", function(e) {
e.preventDefault();
var value = $(this).siblings(".time-block").val()
var time = $(this).parent().attr("id")
// console.log(value)
localStorage.setItem(time, value)
}
)



