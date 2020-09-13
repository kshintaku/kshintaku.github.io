let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];

(function() {
  setModeEventListener();
})();

/* Dark Mode */
function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", event => {
    event.target.checked ? list.add("dark-mode") : list.remove("dark-mode");
  });
}