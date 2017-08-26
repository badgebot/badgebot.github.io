$( document ).ready(function() {
    var body = $("body"),
    author = $('#author')
        unsplashImg = "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=2d58953ffeb732135002a465be8230d3"
        unsplashAuthor = "Dustin Lee"
        unsplashLink = "https://unsplash.com/@dustinlee"
        author.text(unsplashAuthor)
        author.attr("href", unsplashLink)
        body.css('background-image', 'url(' + unsplashImg + ')');
        
});