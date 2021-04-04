//Display date and time
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".form-control").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,text);
})

//Log input into local storage
$("#8am .form-control").val(localStorage.getItem("8am"));
$("#9am .form-control").val(localStorage.getItem("9am"));
$("#10am .form-control").val(localStorage.getItem("10am"));
$("#11am .form-control").val(localStorage.getItem("11am"));
$("#12pm .form-control").val(localStorage.getItem("12pm"));
$("#1pm .form-control").val(localStorage.getItem("1pm"));
$("#2pm .form-control").val(localStorage.getItem("2pm"));
$("#3pm .form-control").val(localStorage.getItem("3pm"));
$("#4pm .form-control").val(localStorage.getItem("4pm"));
$("#5pm .form-control").val(localStorage.getItem("5pm"));


function hourTracker() {
    var currentHour = moment().hour();

//Display available time and used time via color coding
    $('.form-control').each(function () {
        var blockHour = parseInt($(this).attr('id'));
        console.log(blockHour, currentHour)

        if (blockHour < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');
        }
        else if (blockHour === currentHour) {
            $(this).removeClass('future');
            $(this).removeClass('past');
            $(this).addClass('present');
        }
        else {
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future');
        }
    })
    }
hourTracker();
