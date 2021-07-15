let btnModal= document.getElementById("btnAbrir")

let miModal= document.getElementById("miModal")

// console.log(miModal)

// let bsModal = new bootstrap.Modal(document.getElementById("miModal"))
let bsModal = new bootstrap.Modal(miModal)

// console.log(bsModal)

btnModal.addEventListener("click",() => {
  // mas operaciones

  //validaciones

  //mostramos
  // show es el metodo que permite que se abra y/o muestre nuestro modal
  bsModal.show()
})

// que se muestre despues de 3 segundos
setTimeout(() => {
  bsModal.show()
}, 3000)