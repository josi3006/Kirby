

// $(".check").bind('submit', function () {
//     $(this).prop('checked', false);
// });


// $("select, input").bind('click', function () {
//     console.log(this.value + ' is the value clicked')
// });






$(document).ready(function () {
    blueOnCheck();
    removesError();
    $("#gobutton").click(errorCheck);
});




// Turns individual fieldsets red and displays error message if unchecked

const errorCheck = () => {
    $(".check").each(function () {
        if ($(this).find('input:checked').length == 0) {
            this.style.color = 'red';
            document.getElementById("requiredError").style.display = "block";
            scrollTo(0, 0);
        }
    });
    var selectlist = document.getElementById('selecty');
    if (selectlist.options[selectlist.selectedIndex].value == "none") {
        document.getElementById('zipSelectLabel').style.color = 'red';
        document.getElementById("requiredError").style.display = "block";
        scrollTo(0, 0);
    }

};



// Removes red from individual error fieldsets when checked

const blueOnCheck = () => {
    $(".check").click(function () {
        if ($(this).find('input:checked').length > 0) {
            this.style.color = '#006989';
        }
    });


    $("#selecty").click(function () {
        if (this.value != "none") {
            document.getElementById('zipSelectLabel').style.color = '#006989';
        }
    });

};




// Removes error message when all required sets are checked

const checkZip = () => {
    var selectlist = document.getElementById('selecty');
    if (selectlist.options[selectlist.selectedIndex].value == "none") {
        console.log('zip is unchecked');
    } else {
        document.getElementById("requiredError").style.display = "none";
    }
}


const removesError = () => {
    $("fieldset").click(function () {
        var count = 0;
        $(".check").each(function () {
            if ($(this).find('input:checked').length == 0) {
                count = count + 1;
            }
        });

        if (count == 0) {
            console.log('inputs are good!');
            checkZip();
        } else {
            console.log("something's missing");
        };
    });
};











