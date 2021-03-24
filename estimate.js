
$(document).ready(function () {
    blueOnCheck();
    removesError();
    $("#gobutton").click(errorCheck);
});


const mathTime = () => {

    document.getElementById('estimateblock').style.display = "block";

    scrollTo(0, 0);

    var valueArray = [];

    $("input:checked").each(function () {


        switch (this.value) {

            case 'noideasize':
                document.getElementById('nosizewarning').style.display = "block";
                document.getElementById('allwarning').style.display = "block";
                break;

            case 'oddsystem':
                document.getElementById('oddsystemwarning').style.display = "block";
                document.getElementById('allwarning').style.display = "block";
                break;

            case 'noideasystem':
                document.getElementById('nosystemwarning').style.display = "block";
                document.getElementById('allwarning').style.display = "block";
                break;

            case 'otherfeature':
                document.getElementById('otherfeaturewarning').style.display = "block";
                document.getElementById('allwarning').style.display = "block";
                break;

            default:
                var asNumber = parseInt(this.value);
                valueArray.push(asNumber);
        }

    });

    var selecty = document.getElementById('selecty');
    var selectedzipvalue = selecty.options[selecty.selectedIndex].value;

    if (selectedzipvalue == 'far') {
        document.getElementById('farzipwarning').style.display = "block";
        document.getElementById('allwarning').style.display = "block";

    } else {

        var zipValueAsNumber = parseInt(selectedzipvalue);
        valueArray.push(zipValueAsNumber);
    };

    console.log('Values are: ' + valueArray);

    var arrayTotal = valueArray.reduce(function (a, b) {
        return a + b;
    }, 0);
    var premiumService = arrayTotal + 20;
    var allInclusiveService = arrayTotal + 35;

    var estimateData = `
    <br><br>
    <h3>Your estimate:</h3>
    <ul>
    <li><h5>Basic service: $${arrayTotal} per visit.</h5></li>
    <li><h5>Premium service: $${premiumService} per visit.</h5></li>
    <li><h5>All-inclusive service: $${allInclusiveService} per visit.</h5></li><br>
    <a href="service.html">Click here to learn about these service options</a><br>
    <a href="#" onclick="window.location.reload(true);">Click here to reset the form</a><br>
    `;

    document.getElementById('moneyblock').innerHTML = estimateData;


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












