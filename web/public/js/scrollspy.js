(function () {
    const header = document.querySelector("[data-get-section]");
    const sections = document.querySelectorAll("[data-set-section]");
    const listener = function () {
        for (const section of sections) {
            const sectionBoundingRect = section.getBoundingClientRect();
            if (sectionBoundingRect.top <= 0 && sectionBoundingRect.bottom >= 0) {
                header.dataset.getSection = section.dataset.setSection;
                return;
            }
        }
        header.dataset.getSection = "none";
    };
    window.addEventListener("scroll", listener);
    window.addEventListener("resize", listener);
    window.addEventListener("load", listener);
})();
