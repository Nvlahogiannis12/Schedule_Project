let jsonFile = "";

window.addEventListener("keydown", (event) => {
  document.getElementById("out").textContent = "";
  let fileName = "nick.json";
  switch (event.key) {
    case "1":
      fileName = "nick.json";
      break;
    case "2":
      fileName = "cooper.json";
      break;
    case "3":
      fileName = "hayley.json";
      break;
    case "4":
      fileName = "layla.json";
      break;
  }
  fetch(fileName)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        document.getElementById("out").insertAdjacentHTML(
          "beforeend",
          `
            <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h3 class="card-title">${element.className}</h3>
    <h4 class="card-subtitle mb-2 text-body-secondary">${element.teacher}</h4>
    <p class="card-text">${element.roomNumber}</p>
    <p class="card-text">${element.period}</p>
    <p class="card-text">${element.subjectArea}</p>
  </div>
</div>
          `
        );
      });
    });
});

//Sources
//Remy
//Kilgore
