Loggit = () => {
    console.log('You clicked me!  Again!!');
    document.getElementById('dayRadios').setAttribute('disabled', 'disabled');

}

Disabler = (event) => {
    console.log('Clicked to disable');
    document.getElementById(event.target).setAttribute('disabled', 'disabled');
}

// $("fieldset").click(function (event) {
//     console.log(" was clicked");
//     // document.getElementById(event.currentTarget.id).setAttribute('disabled', 'disabled');

// });


// $("#zipCodeSet").bind('change', function () {
//     console.log('this works');
//     $("#zipCodeSet").attr('disabled', 'disabled');
// });

$("fieldset").bind('change', function () {
    console.log('this works');
    $(this).attr('disabled', 'disabled');
});