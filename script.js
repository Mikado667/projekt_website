
document.addEventListener("DOMContentLoaded", () => {
    const ageVerification = document.getElementById("age-verification");
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");

    yesButton.addEventListener("click", () => {
        ageVerification.style.display = "none";
    });

    noButton.addEventListener("click", () => {
        window.location.href = "https://www.google.com";
    });
});
