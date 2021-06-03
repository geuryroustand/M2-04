const tableTeam1 = document.querySelector(".table-team-1");
const tableTeam2 = document.querySelector(".table-team-2");

const displayTeam = () => {
  // document.querySelector("#team1").value;
};

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");

button1.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();

  const team1 = document.querySelector("#team1").value;

  const ol = document.createElement("ol");
  const li = document.createElement("li");
  ol.appendChild(li);
  ol.textContent = team1;
  tableTeam1.appendChild(ol);
});

button2.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const team2 = document.querySelector("#team2").value;

  const ol = document.createElement("ol");
  const li = document.createElement("li");
  ol.appendChild(li);
  ol.textContent = team2;
  tableTeam2.appendChild(ol);
});
