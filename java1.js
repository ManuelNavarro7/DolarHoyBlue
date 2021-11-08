window.onload = function () {
    $.ajax({
        type: 'GET',
        url: 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=a113d541baef49a89c1c05760f54debe',
        success: function (data) {

            console.log(data)

           

            $("#app").prepend(`
        
                    <div>
                    <h2>Compra:${data[1].casa.compra}</h2>
                    <h2>Venta${data[1].casa.venta}</h2>
                    <h2>${data[1].casa.nombre}</h2>
                    <h2>Variacion${data[1].casa.variacion}</h2>
                    </div>
                    `)










        }
    });
};
