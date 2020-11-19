

// $("fieldset").click(function (event) {
//     console.log(" was clicked");
//     // document.getElementById(event.currentTarget.id).setAttribute('disabled', 'disabled');

// });


// $("#zipCodeSet").bind('change', function () {
//     console.log('this works');
//     $("#zipCodeSet").attr('disabled', 'disabled');
// });

// $("fieldset").bind('change', function () {
//     console.log('this works');
//     $(this).attr('disabled', 'disabled');
// });


$(".check").bind('submit', function () {
    $(this).prop('checked', false);
});

// $("input").bind('click', function () {
//     console.log(this.value + ' is the value clicked')
// });

// $("select").bind('click', function () {
//     console.log(this.value + ' is the value clicked')
// });

$("select, input").bind('click', function () {
    console.log(this.value + ' is the value clicked')
});



// $("#acknowledgementCheckbox").bind('submit', function () {


//     console.log('binding worked');

//     if ($("#acknowledgementCheckbox").prop('checked') == false) {
//         $("#noAcknowledgement").setAttribute('display', 'block');
//     } else {
//         return;
//     }
// });



// $(document).ready(function () {
//     $("button").click(function () {

//         window.scrollTo(0, 0);


//         $("fieldset").find("input").each(function () {



//             if ($(this).prop('checked') == false) {



//                 console.log('not checked ID is: ' + this.id);

//                 // if ($(this).prop('checked') == true) {
//                 //     $(this).addClass('new');
//                 // }
//             };

//         });

//     })

// });





// $.each($("input:checked"), function () {

//     $('input').addClass('new');

// });


// if ($('#acknowledgementCheckbox').prop('checked') == false) {

//     $("#noAcknowledgement").addClass('new');

// } else if ($('#acknowledgementCheckbox').prop('checked') == true) {

//     $("#noAcknowledgement").classList.remove('new');



// } else if (

//     $('.zipOther').prop('selected') == true) {

//     $("#zipMessage").addClass('new');

// } else {

//     console.log('I made it through!');

// }







// Displays Error when Acknowledgement Checkbox is not checked

// $(document).ready(function () {
//     $("#gobutton").click(function () {
//         window.scrollTo(0, 0);
//         if ($("#acknowledgementCheckbox").prop('checked') == false) {
//             document.getElementById("noAcknowledgement").style.display = 'block';
//         }
//     });
// });



// Removes Error message from Acknowledgement Checkbox when checked

// $(document).ready(function () {
//     $("#acknowledgementCheckbox").click(function () {
//         window.scrollTo(0, 0);
//         if ($(this).prop('checked') == true) {
//             document.getElementById("noAcknowledgement").style.display = 'none';
//         }
//     });
// });








// Checks which fieldsets are not checked, turns them red

$(document).ready(function () {
    $("#gobutton").click(function () {
        $(".check").each(function () {
            if ($(this).find('input:checked').length == 0) {
                this.style.color = 'red';
                document.getElementById("requiredError").style.display = "block";
            }
        });
    });
});


$(document).ready(function () {
    $("#zipbutton").click(function () {


        var zipFieldSet = document.getElementById("selecty");
        var selectedOption = zipFieldSet.options[zipFieldSet.selectedIndex].value;

        if (selectedOption == 'none') {
            // $('#zipCodeSet').style.color = 'red';
            console.log('Not checked');
        }
    });
});




$(document).ready(function () {
    $(".check").every(function () {
        if ($(this).find('input:checked').length > 0) {
            document.getElementById("requiredError").style.display = "none";
            console.log('Allclear!!');
        }
    });
});




// Removes red when error fieldsets are checked

$(document).ready(function () {
    $(".check").click(function () {
        if ($(this).find('input:checked').length > 0) {
            this.style.color = '#006989';
        }
    });
});

$(document).ready(function () {
    $(".check").click(function () {
        if ($(this).find('selected' === true)) {
            this.style.color = '#006989';
        }
    });
});





            // if ($("#acknowledgementCheckbox").prop('checked') == false) {
            //     $("#noAcknowledgement").setAttribute('display', 'block');
            //     return;
            // } else {
            //     console.log('All good here!');
            // }

            // var feeArray = [];

            // $.each($("input:checked"), function () {
            //     feeArray.push($(this).val());
            // });

            // console.log('Array is: ' + feeArray);


