function masProducto(num){   
    var valuebtn = document.getElementById("plus_" + num.toString()).value;
    var count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    count = count + 1;   
    document.getElementById("numero_productos_" + valuebtn ).innerHTML = count.toString();

    var precio_text = document.getElementById("precio_"+valuebtn).textContent;
    var precio_u = parseInt(precio_text.substr(19,22));    
    var total = count * precio_u;
    document.querySelector("#precio_" + valuebtn).innerHTML = `<small class="text-muted"> Precio unitario: $${precio_u}<br> Precio Total: $${total} </small>`;


    var total_text = document.getElementById("total_final").textContent;  
    var final_total = parseInt(total_text.substr(18,38)) + precio_u;
    document.getElementById("total_final").innerHTML = "Total productos: $" + final_total.toString();
    document.getElementById("servicio").innerHTML = "Servicio: $3500";
    let gran_total = final_total + 3600;
    document.getElementById("gran_total").innerHTML = "Total: $" + gran_total.toString();
    
}

function menosProducto(num){  
    var valuebtn = document.getElementById("minus_" + num.toString()).value;
    var count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    count = count - 1;   
    if(count<1)
    {
        count = 1;        
    }
    else{
        var precio_text = document.getElementById("precio_"+valuebtn).textContent;
        var precio_u = parseInt(precio_text.substr(19,22));    
        var total = count * precio_u;
        document.querySelector("#precio_" + valuebtn).innerHTML = `<small class="text-muted"> Precio unitario: $${precio_u}<br> Precio Total: $${total} </small>`; 
    
        var total_text = document.getElementById("total_final").textContent;  
        var final_total = parseInt(total_text.substr(18,38)) - precio_u;
        document.getElementById("total_final").innerHTML = "Total productos: $" + final_total.toString();
        document.getElementById("servicio").innerHTML = "Servicio: $3500";
        let gran_total = final_total + 3600;
        document.getElementById("gran_total").innerHTML = "Total: $" + gran_total.toString();
    }
    document.getElementById("numero_productos_" + valuebtn ).innerHTML = count.toString();

    
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
