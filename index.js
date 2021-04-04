//Display date and time
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

//Logs input to local storage
$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,text);
})

//Log input into local storage
$("#hour8 .activities").val(localStorage.getItem("hour8"));
$("#hour9 .activities").val(localStorage.getItem("hour9"));
$("#hour10 .activities").val(localStorage.getItem("hour10"));
$("#hour11 .activities").val(localStorage.getItem("hour11"));
$("#hour12 .activities").val(localStorage.getItem("hour12"));
$("#hour13 .activities").val(localStorage.getItem("hour13"));
$("#hour14 .activities").val(localStorage.getItem("hour14"));
$("#hour15 .activities").val(localStorage.getItem("hour15"));
$("#hour16 .activities").val(localStorage.getItem("hour16"));
$("#hour17 .activities").val(localStorage.getItem("hour17"));


//Display available time and used time via color coding
function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $('.time-block').each(function () {
      var timeBlock = parseInt($(this).attr('id').split('hour')[1]);

      // check if we've moved past this time
      if (timeBlock < currentHour) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
    }
    else if (timeBlock === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
hourUpdater();
