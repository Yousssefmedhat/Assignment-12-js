$(document).ready(function () {
    $(".sk-cube-grid").fadeOut(900, function () {
        $("#loading").fadeOut(900);
        $("body").css('overflow', 'auto')
    })
})

$(".open").click(function () {
    $("#leftMenu").animate({ width: '300px' }, 40)
    $("#home-content").animate({ marginLeft: '300px' }, 40)
})

$(".closebtn").click(function () {
    $("#leftMenu").animate({ width: '0px' }, 40)
    $("#home-content").animate({ marginLeft: '0px' }, 40)
})

$("#leftMenu a").click(function () {
    var sectionId = $(this).attr("href");
    var positionOfSection = $(sectionId).offset().top;
    $("html , body").animate({ scrollTop: positionOfSection }, 2000);
})

$('#sliderDown .toggle').click(function () {
    $('.inner').not($(this).next()).slideUp(300);
    $(this).next().slideToggle(300);
});

window.onload = function () {
    countDownToTime("1 october 2023 9:56:00");
}

function countDownToTime(countTo) {
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);
    let now = new Date();
    now = (now.getTime() / 1000);
    timeDifference = (futureDate - now);
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)
    setInterval(function () { countDownToTime(countTo); }, 1000);
}

var maxLength = 100;
$('textarea').keyup(function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $("#chars").text("your available character finished");
    }
    else {
        $("#chars").text(AmountLeft);
    }
});
