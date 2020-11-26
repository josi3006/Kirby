

$(".check").bind('submit', function () {
    $(this).prop('checked', false);
});


$("select, input").bind('click', function () {
    console.log(this.value + ' is the value clicked')
});





// Turn checkboxes red and display error message if unchecked

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



// Turn zip code selector red and display error message if unselected

$(document).ready(function () {
    $("#gobutton").click(function () {

        var selectlist = document.getElementById('selecty');

        if (selectlist.options[selectlist.selectedIndex].value == "none") {
            document.getElementById('zipSelectLabel').style.color = 'red';
            document.getElementById("requiredError").style.display = "block";
        }
    });
});



// Remove error message when all required sets are checked

$(document).ready(function () {
    $("fieldset").click(function () {

        var selectlist = document.getElementById('selecty');

        function isChecked() {
            if (("input:checked").length > 0) {
                return true;
            } else {
                return false;
            }
        }

        var fieldsetArray = [
            $("#acknowledgementCheckboxSet"),
            $("#poolSizeSet"),
            $("#frequencyRadiosSet"),
            $("#dayRadiosSet"),
            $("#systemRadiosSet"),
            $("#specialFeaturesSet")
        ];


        if (fieldsetArray.every(isChecked) &&
            selectlist.options[selectlist.selectedIndex].value != "none") {

            console.log("Great!");
        }

        //     $(".check").each(function () {
        //         $(this).find('input:checked').length > 0
        //     })

        // ) {
        //     document.getElementById("requiredError").style.display = "none";
        // }
    });
});








// Removes red when individual error fieldsets are checked

$(document).ready(function () {
    $(".check").click(function () {
        if ($(this).find('input:checked').length > 0) {
            this.style.color = '#006989';
        }
    });
});

$(document).ready(function () {
    $("#selecty").click(function () {
        if (this.value != "none") {
            document.getElementById('zipSelectLabel').style.color = '#006989';
        }
    });
});




