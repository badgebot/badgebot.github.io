$( document ).ready(function() {
    var body = $("body"),
    author = $('#author')
    ruri = "https://api.unsplash.com/photos/random?client_id=de22acfebf30a3ffaf6cf2f64d79d8782126de7e74f36262145af847ead91ef1&order_by=popular"
        utmParams = "?utm_source=portfolio&utm_medium=referral&utm_campaign=api-credit"
        unsplashImg = "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=2d58953ffeb732135002a465be8230d3"
        unsplashAuthor = "Dustin Lee"
        unsplashLink = "https://unsplash.com/@dustinlee" + utmParams
        author.text(unsplashAuthor)
        author.attr("href", unsplashLink)
        body.css('background-image', 'url(' + unsplashImg + ')');
        
        
});