

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


$("fieldset").bind('submit', function () {
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



$(document).ready(function () {
    $("button").click(function () {

        window.scrollTo(0, 0);

        if ($('#acknowledgementCheckbox').prop('checked') == false) {

            $("#noAcknowledgement").addClass('new');

        } else if ($('#acknowledgementCheckbox').prop('checked') == true) {

            $("#noAcknowledgement").classList.remove('new');
        


        } else if (

            $('.zipOther').prop('selected') == true) {

            $("#zipMessage").addClass('new');

        } else {

            console.log('I made it through!');

        }


    });

});







// $(document).ready(function () {
//     $("button").click(function () {

//         window.scrollTo(0, 0);

//         if ($("#acknowledgementCheckbox").prop('checked') == false) {
//             $("#noAcknowledgement").setAttribute('display', 'block');
//             return;
//         } else {
//             console.log('All good here!');
//         }

//         var feeArray = [];

//         $.each($("input:checked"), function () {
//             feeArray.push($(this).val());
//         });

//         console.log('Array is: ' + feeArray);
//     });
// });

