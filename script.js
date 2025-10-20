let jsonFile = "";

window.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    fetch("nick.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((element) => {
          document.getElementById("out").insertAdjacentHTML(
            "beforebegin",
            `<h2>${element.className}</h2>
<p>${element.teachers}</p>
<p>${element.roomNumber}</p>
<p>${element.period}</p>
<p>${element.subjectArea}</p>
`
          );
        });
      });
  } else if(event.key === "2"){
    fetch("cooper.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((element) => {
          document.getElementById("out").insertAdjacentHTML(
            "beforebegin",
            `<h2>${element.className}</h2>
<p>${element.teachers}</p>
<p>${element.roomNumber}</p>
<p>${element.period}</p>
<p>${element.subjectArea}</p>
`
          );
        });
      });
  }
});
