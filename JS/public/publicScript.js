import { OBJEKTUMLISTA } from "../adatok.js";

$(function () {
  kezdoFuggveny(OBJEKTUMLISTA);
});

function kezdoFuggveny(OBJEKTUMLISTA) {
  const taroloElem = $("article");
  $("article").html(divekOsszerak(OBJEKTUMLISTA));

  let modalButton = $(".modalGomb");

  modalButton.on("click", function () {
    modalButton;
    let keresettElem = OBJEKTUMLISTA.indexOf(modalButton);
    $("#myModal").html(kartyakModalja(OBJEKTUMLISTA));
  });
}

function divekOsszerak(lista) {
  let text = `<div class="tarolo">`;
  text += `<div class="row">`;

  for (let index = 0; index < lista.length; index++) {
    const object = lista[index];
    text += `<div class="card  col-md-3">`;
    for (const key in object) {
      const element = object[key];
      if (key == "nev") {
        text += `<div class="card-header text-bg-success"><h2><span id="S${key}"> ${element} </span></h2></div>`;
      } else {
        text += `<div class="card-body"><p><span id="S${key}"> ${element} </span></p></div>`;
      }
    }
    text += `<div class="card-footer">
    <button type="button" id="${index}" class="btn btn-dark modalGomb" data-bs-toggle="modal" data-bs-target="#myModal">Gomb</button></div>`;

    text += `</div>`;
  }
  text += "</div>";
  text += "</div>";
  return text;
}

function kartyakModalja(lista) { 
  let megjelenitendo = event.target.id;
  
  console.log(megjelenitendo);
  let modal = `<div class="modal-content">`;

 /*  for (let index = 0; index < lista.length; index++) {
    const object = lista[index]; */
    //let kiirando = event.target.
    let kulcs = $(event.target).attr("id");
    console.log(kulcs);

    if ((megjelenitendo = kulcs)) {
      /* for (const key in object) {
        const element = object[key];  */

        modal += `<div class="modal-header">
        <h4 class="modal-title">Kutya neve</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

     
      <div class="modal-body">
        <ul><li>fajta: </li> <li>kor: </li></ul>
      </div>

      
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>`;
      //}
    //}
  }
  modal += `</div>`;
  //console.log(modal);

  return modal;
}
