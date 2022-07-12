(function () {
    const elem = document.querySelector(".section-hero .bg");
    basicScroll.create({
        elem: elem,
        from: 0,
        to: elem.scrollHeight,
        direct: true,
        props: {
            '--translateY': {
                from: '0',
                to: '-100px'
            }
        }
    }).start();
    const elem2 = document.querySelector(".section-hero .gallery");
    basicScroll.create({
        elem: elem2,
        from: 0,
        to: window.innerHeight,
        direct: true,
        props: {
            '--translateX': {
                from: '-11.6569%',
                to: '-50%'
            }
        }
    }).start();
    AOS.init();
    document.querySelector(".section-hero .catchphrase .word-4").innerHTML = "<span></span>";
    new Typed(".section-hero .catchphrase .word-4 span", {
        strings: ["DIGITAL!"],
        typeSpeed: 100,
        showCursor: true,
        cursorChar: "_",
        startDelay: 1000,
        loop: false
    });

})();
