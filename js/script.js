
class Producto{
    constructor (nombre, precio, stock, categoria, codigoProducto, img){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.categoria = categoria
        this.codigoProducto = codigoProducto
        this.img = img
}}

const h000 = new Producto("Martillo", 700, 50, "Herramientas manuales", 100, "img/martillo-150x64.jpg")
const h001 = new Producto("Alicate", 800, 20, "Herramientas manuales", 101, "img/alicate105252-150x64.jpg")
const h002 = new Producto("Martillo de goma", 400, 30,"Herramientas manuales", 102,"img/martilloDeGoma-150x50.jpg" )
const h003 = new Producto("Destornillador ", 400, 20,"Herramientas manuales", 103, "img/destornillador258857-150x29.jpg")
const h004 = new Producto("Kit Llaves", 400, 10,"Herramientas manuales", 104, "img/kitLllaves513148-150x130.jpg")

const h100 = new Producto("Taladro", 700, 30, "Herramientas electricas", 200, "img/taladro800295-150x104.jpg")
const h101 = new Producto("Rotomartillo", 800, 10,"Herramientas electricas", 201, "img/rotoMartillo800279-150x112.jpg" )
const h102 = new Producto("Caladora", 400, 30,"Herramientas electricas", 202, "img/caladora813095-150x157.jpg")
const h103 = new Producto("Amoladora", 400, 70,"Herramientas electricas", 203, "img/amoladora800244-150x66.jpg" )


let listaHerramientas = [h000, h001, h002, h003, h004, h100, h101, h102, h103]

let card_container = document.getElementById("card-container")

renderizarCarrito(listaHerramientas)

  function renderizarCarrito(listaHerramientas){

    for(const producto of listaHerramientas){
        if(producto.stock != 0){

            let card_body = document.createElement("div")
            card_body.classList.add("col", "mx-3", "card", "h-100", "align-items-center")
            
            let img_container = document.createElement("div")
            img_container.classList.add("img-container", "d-flex")
            
            let card_img = document.createElement("img")
            card_img.classList.add("card-img-top")
            card_img.setAttribute("alt", producto.nombre)
            card_img.setAttribute("src", producto.img)
            card_img.setAttribute("width", "64")
            card_img.setAttribute("height","150")
            img_container.append(card_img)

            let card_body_inner = document.createElement("div")
            card_body_inner.classList.add("card-body")      
            
            let card_titulo = document.createElement("h5")
            card_titulo.classList.add("card-title")
            card_titulo.innerText = producto.nombre

            let card_stock = document.createElement("p")
            card_stock.classList.add("card-text", "fs-6", "mt-3")
            card_stock.innerText = `Cantidad disponible: ${producto.stock}`
            card_body_inner.append(card_titulo)
            card_body_inner.append(card_stock)

            let card_codigo = document.createElement("h4")
            card_codigo.classList.add("text-center", "fs-6")
            card_codigo.innerText = `Cod: ${producto.codigoProducto}`

            let card_precio = document.createElement("h6")
            card_precio.classList.add("text-center")
            card_precio.innerText = `$${producto.precio}`

            let card_footer = document.createElement("div")
            card_footer.classList.add("py-3")

            let btn_add = document.createElement("a")
            btn_add.id = `card-btn_${listaHerramientas.indexOf(producto)}`
            btn_add.innerText = "Añadir"
            btn_add.classList.add("btn", "btn-dark")
            btn_add.setAttribute("tabindex", "0")
            btn_add.setAttribute("role", "button")
            btn_add.setAttribute("data-bs-toggle", "popover")
            btn_add.setAttribute("data-bs-placement", "right")
            btn_add.setAttribute("data-bs-trigger", "focus")
            btn_add.setAttribute("data-bs-content", `Agregado al carrito`)
            
            let card_cantidad = document.createElement("input")
            card_cantidad.id = `catidad_input${listaHerramientas.indexOf(producto)}`
            card_cantidad.setAttribute("tabindex", "0")
            card_cantidad.setAttribute("data-bs-toggle", "popover")
            card_cantidad.setAttribute("data-bs-placement", "left")
            card_cantidad.setAttribute("data-bs-trigger", "focus")
            card_cantidad.setAttribute("data-bs-content", `Elija las unidades`)
            card_cantidad.classList.add()     

            card_footer.append(card_cantidad) 
            card_footer.append(btn_add)
            card_body.append(img_container)
            card_body.append(card_body_inner)
            card_body.append(card_codigo)
            card_body.append(card_precio)
            card_body.append(card_footer)
            card_container.append(card_body)

        let input_cantidad = document.getElementById(`catidad_input${listaHerramientas.indexOf(producto)}`)   
        
        let button = document.getElementById(`card-btn_${listaHerramientas.indexOf(producto)}`)
        button.addEventListener("click", function() {addToCart(producto, input_cantidad.value)})            
        }
    }
  }

  let tablaCarrito = document.getElementById("carrito-table")
  let offCanvasBody = document.getElementById("offcanvas-body")
  let precioFinal = 0
  let cantItemsEnCarro = 0
  let itemIdUnico = 1
  let carrito = []

   function addToCart(producto, cantidad){
        let row = document.createElement("tr")
        addAttribute(producto.nombre, row)
        addAttribute(producto.precio*cantidad, row)     
        carritoDeCompras.append(row)
        calcularPrecioTotal(producto.precio * cantidad)        
        console.log(row)        
    }
 
    for(let i=0; i < listaHerramientas.length; i++ ){
        let button = document.getElementById(`card-btn_${i}`)        
    }
    
    let carritoDeCompras = document.getElementById("carrito-table")

   

    let botonvaciar = document.getElementById("boton-vaciar")
    botonvaciar.addEventListener("click", vaciarCarrito)

    function addAttribute(atributo, row){
        let item = document.createElement("td")
        item.innerHTML = `${atributo}`
        row.append(item)
    }

    function calcularPrecioTotal (precio){
        precioTotal += precio
        let total = document.getElementById("Total")
        total.innerText = `Precio total: ${precioTotal}`
    }
     