var tabs = document.querySelectorAll(".tab");
tabs.forEach(function (clickedTab) {
    clickedTab.addEventListener("click", function () {
        tabs.forEach(function (tab) {
            tab.classList.remove("active");
        });
        clickedTab.classList.add("active");
        var clickedTabColor = getComputedStyle(clickedTab).getPropertyValue("color");
        document.body.style.background = clickedTabColor;
    });
});
