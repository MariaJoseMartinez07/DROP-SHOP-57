// CARRITO DROPSHOP+57

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const botones = document.querySelectorAll(".btn-carrito");
const contador = document.getElementById("contador-carrito");

actualizarContador();

botones.forEach((boton, index) => {

    boton.addEventListener("click", () => {

        const tarjetas = document.querySelectorAll(".card");
        const card = tarjetas[index];

        const producto = {
            nombre: card.querySelector("h3").textContent,
            precio: card.querySelector(".precio").textContent,
            imagen: card.querySelector("img").src
        };

        carrito.push(producto);

        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );

        actualizarContador();

        alert("Producto agregado al carrito 🛒");
    });
});

function actualizarContador(){

    if(contador){
        contador.textContent = carrito.length;
    }
}
// BOTÓN FINALIZAR COMPRA

const botonFinalizar =
document.querySelector(".btn-finalizar");

if (botonFinalizar) {

    botonFinalizar.addEventListener(
        "click",
        () => {

            const carrito =
            JSON.parse(
                localStorage.getItem("carrito")
            ) || [];

            if (carrito.length === 0) {
                alert(
                    "Tu carrito está vacío."
                );
                return;
            }

            alert(
                "¡Pedido realizado con éxito! 🎉"
            );

            localStorage.removeItem(
                "carrito"
            );

            window.location.href =
            "index.html";
        }
    );

}
