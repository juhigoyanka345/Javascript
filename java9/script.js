// Add click event to all table rows
document.addEventListener("DOMContentLoaded", function() {
  const rows = document.querySelectorAll("#scheduleTable tbody tr");

  rows.forEach(row => {
    row.addEventListener("click", function() {
      const day = this.cells[0].innerText || "—";
      const begin = this.cells[1].innerText;
      const end = this.cells[2].innerText;
      const topic = this.cells[3].innerText;

      alert(`📅 Day: ${day}\n🕗 Time: ${begin} - ${end}\n🎯 Topic: ${topic}`);
    });
  });
});
