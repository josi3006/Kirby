
$(document).ready(function () {
    blueOnCheck();
    removesError();
    $("#gobutton").click(errorCheck);
});


const mathTime = () => {
    console.log("Let's go!");
    var valueArray = [];
    $("input:checked").each(function () {

        switch (this.value) {

            case 'noideasize':
                console.log('No idea pool size');
                break;

            case 'oddsystem':
                console.log('I have an odd system');
                break;

            case 'noideasystem':
                console.log('No Idea what system i have');
                break;

            case 'otherfeature':
                console.log('i have some other feature');
                break;

            default:
                valueArray.push(this.value);


        }

        // if (this.value == 'far') {
        //     console.log('Far zip code');
        // } else if (this.value == 'noideasize') {
        //     console.log('No Idea Pool Size');
        // } else if (this.value == 'oddsystem' || 'noideasystem' || 'otherfeature') {
        //     console.log('Different System or Feature');
        // } else {

        //     valueArray.push(this.value);
        // }

    });

    var selecty = document.getElementById('selecty');
    var selectedzipvalue = selecty.options[selecty.selectedIndex].value;

    if (selectedzipvalue == 'far') {
        console.log('Far far away');
    } else {

        valueArray.push(selectedzipvalue);
    };

    console.log('Values are: ' + valueArray);

    
};












// Turns individual fieldsets red and displays error message if unchecked

const errorCheck = () => {

    var errorCount = 0;

    $(".check").each(function () {
        if ($(this).find('input:checked').length == 0) {
            this.style.color = 'red';
            document.getElementById("requiredError").style.display = "block";
            ++errorCount;
            scrollTo(0, 0);
        }
    });
    var selectlist = document.getElementById('selecty');
    if (selectlist.options[selectlist.selectedIndex].value == "none") {
        document.getElementById('zipSelectLabel').style.color = 'red';
        document.getElementById("requiredError").style.display = "block";
        ++errorCount
        scrollTo(0, 0);
    };

    if (errorCount == 0) {
        mathTime();
    } else {
        console.log('Yikes');
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
            checkZip();
        }
    });
};




// $(".check").bind('submit', function () {
//     $(this).prop('checked', false);
// });


// $("select, input").bind('click', function () {
//     console.log(this.value + ' is the value clicked')
// });














