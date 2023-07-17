

$(".Cliente1").click(function (){
	let carrito = document.getElementById("carrito")
	carrito.style.right = "0px"
})
$("#ocultarAside").click(function (){
	let carrito = document.getElementById("carrito")
	carrito.style.right = "-300px"
})

let precioCompra = 0 
let carrito = []

let productos = document.getElementById('productos')
let quitarProducto = document.getElementById('mostrarProductos')
let precioProducto
productos.addEventListener('click', e => {
	
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;
		let nombreProducto = product.querySelector('h1').textContent
		precioProducto = product.querySelector('button').value
		precioProducto = parseFloat(precioProducto)


		let found = false
		for (let i in carrito) {
			if (nombreProducto == carrito[i].nombre) {
				carrito[i].cantidad += 1
				carrito[i].precio += precioProducto
				precioCompra += precioProducto
				found = true
			} 
		}
		if (found == false) {
			const infoProduct = {
				cantidad: 1,
				nombre: nombreProducto,
				precio: precioProducto,
				precioInicial: precioProducto
			}
			precioCompra += precioProducto
			carrito.push(infoProduct)
		}
		mostrarProductos()		
	}

});

quitarProducto.addEventListener('click', a => {
	if (a.target.classList.contains('eliminar')) {
		const product = a.target.parentElement;
		console.log(product);
		let nombreProducto = product.querySelector('h4').textContent
		precioProducto = product.querySelector('button').value
		for (let i in carrito) {
			if (nombreProducto == carrito[i].nombre) {
				carrito[i].cantidad -= 1
				carrito[i].precio -= precioProducto
				precioCompra -=precioProducto
				console.log(carrito[i].nombre);
			}
			
		}
		mostrarProductos()
	}
});		


const mostrarPrecio = document.getElementById('total-pagar')
function mostrarProductos() { 

	const carritoContainer = document.getElementById("mostrarProductos");
	carritoContainer.innerHTML = "";

	carrito.forEach(i => {
		if (i.cantidad > 0) {
			const productoElement = document.createElement("section");
			productoElement.className = "listadoProductos"
	
			productoElement.innerHTML = `<p>${i.cantidad}</p> <h4>${i.nombre}</h4> <p class="precio-producto">$${i.precio}</p> <button class="eliminar" id="quitarProducto" value="${i.precioInicial}">X</button>
			`;
			carritoContainer.appendChild(productoElement);
		}

		
		if (precioCompra == 0) {
			$('#cart-empty').show()
			
		} else {
			$('#cart-empty').hide()
		}
		mostrarPrecio.innerText = precioCompra

	});
	console.log(carrito);
}
	

