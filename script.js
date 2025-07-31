console.log("hi this is a new page");

document.getElementById("alertBtn").addEventListener("click", function() {
  alert("hello hello");
});

document.getElementById("toggleBtn").addEventListener("click", function() {
  const paragraph = document.querySelector("p");
  paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
});
