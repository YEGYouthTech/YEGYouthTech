(function () {
    basicScroll.create({
        elem: document.querySelector(".section-hero .bg"),
        from: 'top-top',
        to: 'bottom-top',
        direct: true,
        props: {
            '--translateY': {
                from: '0',
                to: '-100px'
            }
        }
    }).start();
    basicScroll.create({
        elem: document.querySelector(".section-hero .gallery"),
        from: 'bottom-bottom',
        to: 'bottom-top',
        direct: true,
        props: {
            '--translateX': {
                from: '-11.6569%',
                to: '-50%'
            }
        }
    }).start();
    basicScroll.create({
        elem: document.querySelector(".section-pitch .container-img"),
        from: 'top-bottom',
        to: 'bottom-top',
        direct: true,
        props: {
            '--translateY': {
                from: '0vh',
                to: '10vh'
            }
        }
    }).start();
    basicScroll.create({
        elem: document.querySelector("#donut"),
        from: document.querySelector("#section-pitch").getBoundingClientRect().y + document.documentElement.scrollTop - window.innerHeight,
        to: document.querySelector("#section-pitch").getBoundingClientRect().y + document.documentElement.scrollTop + document.querySelector("#section-pitch").getBoundingClientRect().height,
        direct: true,
        props: {
            '--translateY': {
                from: '0vh',
                to: '40vh'
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

    const sentence = new Movinwords({
        "el": ".section-pitch .text-container .text-short",
        "transition": "slideInBottom",
        "autostart": true,
        "wordSpacing": 15,
    });

})();

