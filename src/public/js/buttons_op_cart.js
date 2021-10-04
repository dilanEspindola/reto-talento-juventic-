function masProducto(num){   
    var valuebtn = document.getElementById("plus_" + num.toString()).value;
    var count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    count = count + 1;   
    document.getElementById("numero_productos_" + valuebtn ).innerHTML = count.toString();

    var precio_text = document.getElementById("precio_"+valuebtn).textContent;
    var precio_u = parseInt(precio_text.substr(19,22));    
    var total = count * precio_u;
    document.querySelector("#precio_" + valuebtn).innerHTML = `<small class="text-muted"> Precio unitario: $${precio_u}<br> Precio Total: $${total} </small>` 
    
}

function menosProducto(num){  
    var valuebtn = document.getElementById("minus_" + num.toString()).value;
    var count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    count = count - 1;   
    if(count<=1){
        count = 1;
    }
    document.getElementById("numero_productos_" + valuebtn ).innerHTML = count.toString();

    var precio_text = document.getElementById("precio_"+valuebtn).textContent;
    var precio_u = parseInt(precio_text.substr(19,22));    
    var total = count * precio_u;
    document.querySelector("#precio_" + valuebtn).innerHTML = `<small class="text-muted"> Precio unitario: $${precio_u}<br> Precio Total: $${total} </small>` 
}

function deleteCarrito(num){
    let datos = JSON.parse(localStorage.getItem('productos'));
    for(let i = 0; i < datos.length; i++) {
        if(datos[i].ID == num) {
            datos.splice(i, 1);
            console.log('Producto Eliminado');
        }
    }
    localStorage.setItem('productos', JSON.stringify(datos));
    var count_products = localStorage.getItem('num_productos');
    count_products = count_products - 1;
    localStorage.setItem('num_productos', count_products);
    swal("Completado", "El producto seleccionado se ha eliminado del carrito de compras", "success");
    cargarNumProducts();
    leerdatos();
}
