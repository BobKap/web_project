$(document).ready(function () {

    $("#navPopUp").dialog({
        position: { my: "center", at: "top+25%", of: window },
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        hide: 'drop'
    }); // end PopUp dialog definition

    $('.nav-link, .btn-search').click(function (evt) {
        evt.preventDefault();
        $('#navPopUp').dialog('open');
    }); //end nav buttons click event

    // $('btn-nav').mouseover(function () {
    //     background-color: rgb(99, 61, 4);
    // });


});  // end ready

