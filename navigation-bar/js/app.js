//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader



// start hamburger menu

class Hambeger {
    hambergerMethod(data) {
        $(data.navigationEle).slideUp(data.speed);
        $(data.hamberBtn).on(data.eventName, () => {
            $(data.circle).toggleClass(data.toggleClsName);
            $(data.navigationEle).slideToggle(data.speed);
        });
    }
}

// dom content is loaded
$(() => {
    // hambeger menu
    const hambegerCls = new Hambeger;
    hambegerCls.hambergerMethod({
        navigationEle: '.navigationComp nav',
        hamberBtn: '.hamburger',
        circle: '.circle',
        toggleClsName: 'close',
        speed: 800,
        eventName: 'click'
    });
    // end hamburger menu
});