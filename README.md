# CodeLou_FrontEnd

## Description
```
    My goal was to do more than only meet the project requirements. I sought to start a project that when completed during the "back-end" section of Code Louisville, would show my ability to present the required technical material in a useful, visually pleasing manner; and to show my ability to find solutions on my own when necessary.
```

## Custom CSS Classes
```
The class(es) I created are:
1. .nav-link  Styles the navigation links.
2. .btn-nav  Styles the search button.
3.& 4. .btn-nav:hover, .nav-link:hover  Change the background color of nav and search buttons.
5. .banner  Centers banner contents.
6. .hrhH1  Styles the <h1>.
7. .tagline  Styles the tag line under <h1>.
8. .outlawedH2  Styles the <h2>.
9. .historic-images  Parent of img elements that style the indictment and warrant documents.
10. .figure-caption  Style captions under documents and photos.
11. .button-documents  Styles the buttons under the indictment and warrant.
12. .button-documents:hover  Changes the arrow pointer to a finger pointer.
13. & 14.  .modal-body, .footer  Set background color.
15. .indictment p, .warrant p, .theHistory p, #navPopUp p  Format text.
16. .theHistory p::first-letter  Increase size of first letter in each <p> of latin filler text.
17. .photoCredits   Styles the <ul>
18. .photoCredits li   Styles the <li>.
19. .copyrightInfo p   Style the copyright info.
20. .moreFun p   Style the right side of the footer.
21. .wrap   Enforces the sticky footer.
    

## Custom JavaScript Functions
```
The javascript functions I created are:

1. Anonymous function opens a jQuery-UI dialog  on click of undeveloped links (features).

$('.nav-link, .btn-search, .bkEmail, .bobsSite').click(function (evt) {
        evt.preventDefault();
        $('#navPopUp').dialog('open');
         });

2. Anonymous function opens a jQuery-UI dialog  on mousedown in search box.

    $('.input-nav').mousedown(function() {
        $('#navPopUp').dialog('open');
    }); 


