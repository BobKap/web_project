$(document).ready(function () {

    $("#navPopUp").dialog({
        position: { my: "center", at: "top+25%", of: window },
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        hide: 'drop'
    }); // end PopUp dialog definition

    $('.nav-link, .btn-search, .bkEmail').click(function (evt) {
        evt.preventDefault();
        $('#navPopUp').dialog('open');
    }); //end nav buttons click event


});  // end ready

