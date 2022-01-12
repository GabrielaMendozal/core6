function actualizaLike(botonLike) {
    let divLike = botonLike.closest('.contenedor').querySelector('.megusta');
    let num = Number (divLike.innerText);
    num++;
    divLike.innerText = num;
}