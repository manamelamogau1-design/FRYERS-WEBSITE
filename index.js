
const datePlaceholder = document.getElementById("currentDate");

const today = new Date();
const formattedDate = today.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

datePlaceholder.textContent = formattedDate;
document.getElementById("searchBtn").addEventListener("click", function () {
    let searchValue = document.getElementById("searchBar").value;
    alert("You searched for: " + searchValue);
});
