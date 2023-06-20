// Smooth Scrolling
$("#navbar a, .btn, #showcase a, #contact a").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

//menu-mobile
function openNav(){
    document.getElementById("itens").style.width = '100%';
}
function closeNav(){
    document.getElementById("itens").style.width = '0';

}
function openStep(){
    document.getElementById("menuConta").style.width = '100%';
}
function closeStep(){
    document.getElementById("menuConta").style.width = '0';
}

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});