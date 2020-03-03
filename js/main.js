/*~~~~~~~~~~~~~~~~javaScript~~~~~~~~~~~~~~~~~~ */
function infoDescraption() {
    var btn = document.getElementById("btn_read"); //מצביע לכפתור
    var text = document.getElementById("moreInfo"); // מצביע לדייב קונטיינר שמכיל עוד פסקאות

    if (text.style.display === "none") {
        text.style.display = "initial";
        btn.innerHTML = "Read Less";

    } else {
        text.style.display = "none";
        btn.innerHTML = "Read More";
    }
}

/*~~~~~~~~~~~~~~~~~~jQuery~~~~~~~~~~~~~~~~~~*/
// Animate Smooth Scrool
//description btn
$('#desc').on('click', function() {
    const description = $('#description').position().top;

    $('html, body').animate({
        scrollTop: description
    }, 900);
});

// Animate Smooth Scrool
//features btn
$('#feature').on('click', function() {
    const features = $('#features').position().top;

    $('html, body').animate({
        scrollTop: features
    }, 900);
});

// Animate Smooth Scrool
//Price btn
$('#ourPrice').on('click', function() {
    const price = $('#price').position().top;

    $('html, body').animate({
        scrollTop: price
    }, 900);
});

//Animate Smooth Scrool 
// contact us btn
$('#contact-us').on('click', function() {
    const contact = $('#get-in-touch').position().top;

    $('html, body').animate({
        scrollTop: contact
    }, 900);
});


//Animate Smooth Scrool 
// return top
$('.btn_top').on('click', function() {
    const top = $('#landing').position().top;

    $('html, body').animate({
        scrollTop: top
    }, 900);
});