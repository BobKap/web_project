$(document).ready(function() {

    $("#navPopUp").dialog( {
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        // position: [400, 400]
        hide: 'explode'
    }); // end PopUp dialog

    $('.nav-link, .btn-search').click(function(evt) {
        evt.preventDefault();
        $('#navPopUp').dialog('open');
    }); //end click

});  // end ready

