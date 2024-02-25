document.addEventListener("DOMContentLoaded", function () {
    const regionInfo = document.getElementById("region");
    const regions = document.querySelectorAll(".region");
   
    regions.forEach(region => {
      region.addEventListener("mouseover", function () {
        regionInfo.textContent = `You are hovering over a ${region.id}`;
      });
   
      region.addEventListener("mouseout", function () {
        regionInfo.textContent = "Hover over a region on the right picture to see information";
      });
    });
  });