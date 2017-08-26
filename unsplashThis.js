function FunsplashThis(){
	var unsplashThis = document.querySelectorAll(".unsplash-this");
    for(var x = 0; x < unsplashThis.length; x++) {
        var unsplashCategory = unsplashThis[x].getAttribute("data-category");
        var unsplashLink= "https://source.unsplash.com/random/" + x;
        unsplashThis[x].setAttribute("style", "background-image: url('"+unsplashLink+"')");
    }
}

function ready(){
    FunsplashThis();
}

window.onload = ready