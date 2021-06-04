const teams = document.querySelector("#teams");

const button = document.querySelector("button");
const form = document.querySelector(".form");

// const html = `
// <div class="col">
// <ol>
//   <h2 class="h2 font-weight-bold">Team  </h2>
//  <li class="font-weight-bold d-print-inline">${userName[i]} </li>
// </ol>
// </div>
// `;
// teams.insertAdjacentHTML("afterbegin", html);

let userName = [];

const displayUser = (arr) => {
  // const div = document.createElement("div");
  // div.className = "col";
  // const ol = document.createElement("ol");
  // div.appendChild(ol);
  // console.log(div);
  // const h2 = document.createElement("h2");
  // h2.className = "h2 font-weight-bold";
  // h2.innerText = `Team ${numberOfTeam}`;
  // ol.appendChild(h2);
  // const li = document.createElement("li");
  // li.className = "font-weight-bold ";
  // ol.appendChild(li);
  // teams.appendChild(div);
  // userName.forEach((name, i) => {
  //   li.innerText = name;
  // });
  // teams.appendChild(div);
  // ${index + 1}
};

displayUser();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberOfTeam = document.getElementById("numbe").value;

  // console.log(numberOfTeam);

  // const numberOfTeam = document.forms["form"]["num"];
  // const numberOfTeam = document.forms.form;

  // console.log(numberOfTeam.value);
  // console.log(numberOfTeam);

  const teamNames = document.getElementById("team-names").value;
  const listName = teamNames.split("\n");

  for (let index = 0; index < listName.length; index++) {
    const name = listName[index];
    userName.push(name);
    // console.log(userName);
    console.log(name);
    // if (numberOfTeam > 0) {
    // }

    const div = document.createElement("div");
    div.className = "col";
    const ol = document.createElement("ol");
    div.appendChild(ol);
    console.log(div);

    const h2 = document.createElement("h2");
    h2.className = "h2 font-weight-bold";
    h2.innerText = `Team ${numberOfTeam}`;
    ol.appendChild(h2);

    const li = document.createElement("li");
    li.className = "font-weight-bold ";
    li.innerText = name;
    ol.appendChild(li);
    teams.appendChild(div);

    // console.log(userName[numberOfTeam]);

    // if (numberOfTeam) {
    //   const html = `
    //   <div class="col">
    //   <ol>
    //     <h2 class="h2 font-weight-bold">Team ${index + 1} </h2>
    //     <li class="font-weight-bold d-print-inline">${name} </li>
    //   </ol>
    // </div>
    //   `;
    //   teams.insertAdjacentHTML("afterbegin", html);
    // }

    // console.log(userName);
  }

  // listName.forEach((name, i) => {
  //   console.log(i + 1);

  //   console.log(numberOfTeam);

  //    console.log();

  //   if (teamNames) {
  //     const div = document.createElement("div");
  //     div.className = "col";

  //     const ol = document.createElement("ol");
  //     div.appendChild(ol);
  //     console.log(div);

  //     const h2 = document.createElement("h2");
  //     h2.className = "h2 font-weight-bold";
  //     h2.textContent = `Team ${numberOfTeam}`;
  //     ol.appendChild(h2);

  //     const li = document.createElement("li");
  //     li.className = "font-weight-bold ";
  //     li.textContent = `${name}`;
  //     ol.appendChild(li);

  //     teams.appendChild(div);
  //   }
  // });

  // teamNames.forEach((name) => {
  //   console.log(name);
  // });
});

// const tableTeam1 = document.querySelector(".table-team-1");
// const tableTeam2 = document.querySelector(".table-team-2");

// const requestTeam = document.querySelector(".requestTeam");

// const displayTeam = () => {
//   // document.querySelector("#team1").value;
// };

// const button1 = document.querySelector(".button1");
// const button2 = document.querySelector(".button2");

// button1.addEventListener("click", (e) => {
//   e.preventDefault();
//   e.stopPropagation();

//   const team1 = document.querySelector("#team1").value;

//   const ol = document.createElement("ol");
//   const li = document.createElement("li");
//   ol.appendChild(li);
//   ol.textContent = team1;
//   tableTeam1.appendChild(ol);
// });

// button2.addEventListener("click", (e) => {
//   e.preventDefault();
//   e.stopPropagation();
//   const team2 = document.querySelector("#team2").value;

//   const ol = document.createElement("ol");
//   const li = document.createElement("li");
//   ol.appendChild(li);
//   ol.textContent = team2;
//   tableTeam2.appendChild(ol);
// });

// requestTeam.addEventListener("click", () => {
//   const inputRquestTeam = document.querySelector("#requestTeam").value;

//   console.log(inputRquestTeam);
// });

// const html = `
//       <div class="col">
//       <ol>
//         <h2 class="h2 font-weight-bold">Team ${i + 1} </h2>
//         <li class="font-weight-bold d-print-inline">${name[i]} </li>
//       </ol>
//     </div>
//       `;
//       teams.insertAdjacentHTML("afterbegin", html);
