$(document).ready(function () {

    $("#navPopUp").dialog({
        position: { my: "center", at: "top+25%", of: window },
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        hide: 'explode'
    }); // end PopUp dialog definition

    $('.nav-link, .btn-search').click(function (evt) {
        evt.preventDefault();
        $('#navPopUp').dialog('open');
    }); //end click event

});  // end ready

