// chat box dark
// (function() {
//
//     $('#live-chat header').on('click', function() {
//
//         $('.chat').slideToggle(300, 'swing');
//         $('.chat-message-counter').fadeToggle(300, 'swing');
//
//     });
//
//     $('.chat-close').on('click', function(e) {
//
//         e.preventDefault();
//         $('#live-chat').fadeOut(300);
//
//     });
//
// }) ();


$(function () {

    $('.dropdown-trigger').dropdown();

//        chat box

    $(".ai-character").click(function () {
        $(".ai-chat-card").toggleClass("d-none");
    });
    $(".chat-close").click(function () {
        $(".ai-chat-card").toggleClass("d-none")
    });

//        search nav
//     $(".nav-search-icon").click(function () {
//         $(".nav-search").fadeToggle("");
//     });
});


// nav search

$(document).ready(function () {
    $(".nav-search").hide();

    $('.nav_search_icon').click(function (e) {

        e.preventDefault(); // stops link from making page jump to the top
        e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
        $('.nav-search').fadeToggle();

    });

    $('.nav-search').click(function (e) {

        e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too

    });
    $('body').click(function () {
        $('.nav-search').hide();
    });
});

// table
$(document).ready(function () {
    $('#dtBasicExample').DataTable({
        // "searching": false,
        // "bLengthChange": false,
        "pagingType": "simple_numbers" // "simple" option for 'Previous' and 'Next' buttons only
    });
    $('.dataTables_length').addClass('bs-select');
    $(".form-control").addClass("browser-default");

    // $(".table-row").click(function () {
    //     document.location.href = ("login.html");
    //     }
    // )
    $("#dtBasicExample_filter input").addClass("content-list-search");

    // toggle checkbox
    $(".checkbox-all").click(function () {
        var checkBoxes = $("input[name=recipients\\[\\]]");
        checkBoxes.prop("checked", !checkBoxes.prop("checked"));
    });

    $(".fin-pry-btn").click(function () {
        //this will find the selected website from the dropdown
        var go_to_url = $(".content-list-search").find(":selected").val();
        //this will redirect us in same window
        document.location.href = go_to_url;
    });

});

// Within a Company/Contact
$(document).ready(function () {
    $(".about-contact-toggler").click(function () {
        $(".about-contact").toggleClass("d-none", "slow");
    });

    $(".about-within").click(function () {
        $(".about-within .fa-angle-right").toggleClass("d-none", "slow");
        $(".about-within .fa-angle-down").toggleClass("d-none");
    });


    // Rich text editor
    var colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'];
    var forePalette = $('.fore-palette');
    var backPalette = $('.back-palette');

    for (var i = 0; i < colorPalette.length; i++) {
        forePalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
        backPalette.append('<a href="#" data-command="backcolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
    }

    $('.toolbar a').click(function (e) {
        var command = $(this).data('command');
        if (command == 'h1' || command == 'h2' || command == 'p') {
            document.execCommand('formatBlock', false, command);
        }
        if (command == 'forecolor' || command == 'backcolor') {
            document.execCommand($(this).data('command'), false, $(this).data('value'));
        }
        if (command == 'createlink' || command == 'insertimage') {
            url = prompt('Enter the link here: ', 'http:\/\/');
            document.execCommand($(this).data('command'), false, url);
        }
        else document.execCommand($(this).data('command'), false, null);
    });

    // placeholders
    $("#editor").attr("placeholder", "Enter note here");

});
// select 2 dropdown multiple select
$(document).ready(function () {
    // $('.js-example-basic-multiple').select2();
    // $('select').formSelect();
    // var instance = M.FormSelect.getInstance(elem);
    $('#mselect').chosen();
    $('#mselect2').chosen();
    $('#mselect3').chosen();
    $('#mselect4').chosen();
    $('#mselect5').chosen();
    $('#mselect6').chosen();
    $('#mselect7').chosen();
    $('#mselect8').chosen();
    $('#mselect9').chosen();
    $('#mselect10').chosen();
    // $('.search-field').val(Add Clients);


});

// emoji plugin
$(document).ready(function () {
    $(".emoji1").emojioneArea();
});

// text-editor
$(document).ready(function () {
    $(".txtEditor").richText();
    $("#txtEditor").richText();
    $("#txtEditor2").richText();
    $("#txtEditor3").richText();
    $("#txtEditor4").richText();
    $("#txtEditor5").richText();
    $("#txtEditor6").richText();
    $("#txtEditor7").richText();
    $(".richText-editor").addClass("emoji1");
});


// schedule
$(function () {
    $(".fc-day").click(function () {
        $(".calendar").hide("slow");
        $(".calendar-int-container").hide("slow");
        $(".add-meeting").removeClass("d-none");

    });
    $(".fc-content-skeleton tbody").click(function () {
        $("#calendar").hide("slow");
        $(".calendar-int-container").hide("slow");
        $(".add-meeting").removeClass("d-none");

    });
});
// full calendar

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid'],
        header: {
            left: 'prevYear,prev,next,nextYear today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay'
        },
        defaultDate: '2019-04-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2019-04-01'
            },
            {
                title: 'Long Event',
                start: '2019-04-07',
                end: '2019-04-10'
            },
            {
                groupId: 999,
                title: 'Repeating Event',
                start: '2019-04-09T16:00:00'
            },
            {
                groupId: 999,
                title: 'Repeating Event',
                start: '2019-04-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2019-04-11',
                end: '2019-04-13'
            },
            {
                title: 'Meeting',
                start: '2019-04-12T10:30:00',
                end: '2019-04-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2019-04-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2019-04-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2019-04-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2019-04-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2019-04-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2019-04-28'
            }
        ]
    });

    calendar.render();
});
