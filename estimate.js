

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





$(document).ready(function() {
    $("button").click(function(){

        var feeArray = [];

        $.each($("input:checked"), function(){
            feeArray.push($(this).val());
        });

        console.log('Array is: ' + feeArray);
    });
});

