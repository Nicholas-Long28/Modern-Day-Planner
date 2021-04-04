$(document).ready(function () {
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".form-control").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time,text);
})

$("#am8 .form-control").val(localStorage.getItem("am8"));
$("#am9 .form-control").val(localStorage.getItem("am9"));
$("#am10 .form-control").val(localStorage.getItem("am10"));
$("#am11 .form-control").val(localStorage.getItem("am11"));
$("#pm12 .form-control").val(localStorage.getItem("pm12"));
$("#pm1.form-control").val(localStorage.getItem("pm1"));
$("#pm2 .form-control").val(localStorage.getItem("pm2"));
$("#pm3 .form-control").val(localStorage.getItem("pm3"));
$("#pm4 .form-control").val(localStorage.getItem("pm4"));
$("#pm5 .form-control").val(localStorage.getItem("pm5"));

function hourTracker() {
    var currentHour = moment().hour();


    $('.time-block').each(function () {
        var timeSlot = parseInt($(this).attr('id').split('hour')[1]);
        console.log(timeSlot, currentHour)

        if (timeSlot < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');
        }
        else if (timeSlot > currentHour) {
            $(this).addClass('future');
            $(this).removeClass('past');
            $(this).removeClass('present');
        }
        else (timeSlot === currentHour) {
            $(this).addClass('present');
            $(this).removeClass('past');
            $(this).removeClass('future');
        }
    })
}
hourTracker();
})