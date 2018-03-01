$(document).ready(function () {

    $("#navPopUp").dialog({
        position: { my: "center", at: "top+25%", of: window },
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        hide: 'drop'
    }); // end Functionality to Come" PopUp dialog definition

    $('.nav-link, .btn-search, .bkEmail, .bobsSite').click(function (evt) {
        evt.preventDefault();
        $('#navPopUp').dialog('open');
    }); //end nav buttons, search button, Bob's Email click event

    $('.input-nav').mousedown(function() {
        $('#navPopUp').dialog('open');
    }); // end search input popup


});  // end ready

