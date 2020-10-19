const tabs = document.querySelectorAll(".tab");

      tabs.forEach((clickedTab) => {
        clickedTab.addEventListener("click", () => {
          tabs.forEach((tab) => {
            tab.classList.remove("active");
          });

          clickedTab.classList.add("active");

          const clickedTabColor = getComputedStyle(clickedTab).getPropertyValue(
            "color"
          );

          document.body.style.background = clickedTabColor;
        });
      });