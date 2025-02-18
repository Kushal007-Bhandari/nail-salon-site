document.addEventListener("DOMContentLoaded", function () {
    const bookNowBtn = document.getElementById("bookNowBtn");
    const contactOptions = document.getElementById("contactOptions");

    bookNowBtn.addEventListener("click", function () {
        if (contactOptions.style.display === "none" || contactOptions.style.display === "") {
            contactOptions.style.display = "flex";
        } else {
            contactOptions.style.display = "none";
        }
    });
});
