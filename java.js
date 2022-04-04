
window.onload = function () {
    $.ajax({
        type: 'GET',
        url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
        success: function (data) {

            //console.log(data)

            //console.log(data[1].casa.compra);
            //console.log(data[1].casa.venta);
            //console.log(data[1].casa.nombre);
            //console.log(data[1].casa.variacion);

            $(".app").prepend(`
        
                    <div class="d-flex flex-column justify-content-center align-items-center align-content-center">
                    <div class="d-flex flex-row justify-content-center align-items-center align-content-center " >
                    <div class="mb-2"><img src="./imgs/dolarblue3.png" width="50px" height="50px"></div>
                    <h2 class="tiTulo ms-2">${data[1].casa.nombre}</h2>
                    </div>
                    <section class="d-flex flex-row">
                    <section class="d-flex flex-column me-5 justify-content-center align-items-center">
                    <h2 class="tiTulo1">Compra</h2>
                    <h3>${data[1].casa.compra}</h3>
                    </section>
                    <section class="d-flex flex-column justify-content-center align-items-center">
                    <h2 class="tiTulo1">Venta</h2>
                    <h3>${data[1].casa.venta}</h2>
                    </section>
                    </section>
                    <h2 class="tiTulo1">Variacion: ${data[1].casa.variacion}</h2>
                    </div>
                    `)

        }
    });
    
    let url1 = "https://api.coinstats.app/public/v1/markets?coinId=bitcoin"
    let array=[];

    $.get(url1, function (btc) {

        for (const dato of btc) {
            array.push(dato)
        }
       
        const item = array.filter(item => item.exchange === 'Binance');

        let intems = item[0]

        $(".app1").prepend(`
        <div class=" d-flex flex-row justify-content-center align-items-center align-content-center">
        <div class="mb-2 me-2"><img class="imagenBtc" src="./imgs/btc1.png" width="45px" height="45px"></div>
        <h1 class="tiTulo">Bitcoin:</h1>
        <h2 class="prEcios ms-2 mt-1">${intems.price}</h2>
        <div class="mb-1 ms-2"><img class="imagenBtc" src="./imgs/dolar.png" width="50px" height="50px"></div>
        </div>
        
        `)


})

    let url2 = "https://api.coinstats.app/public/v1/markets?coinId=ethereum"
    let array1 = [];

    $.get(url2, function (eth) {

        for (const dato1 of eth) {
            array1.push(dato1)
        }

        const item1 = array1.filter(item1 => item1.exchange === 'Binance');

        let intems1 = item1[0]

        $(".app2").prepend(`
        <div class="d-flex flex-row justify-content-center align-items-center align-content-center">
        <div class="mb-2 me-2"><img class="imagenBtc" src="./imgs/eth.png" width="50px" height="50px"></div>
        <h1 class="tiTulo">Ethereum:</h1>
        <h2 class="prEcios ms-2 mt-1">${intems1.price}</h2>
        <div class="mb-1 ms-2"><img class="imagenBtc" src="./imgs/dolar.png" width="50px" height="50px"></div>
        </div>
        
        `)


    })

 const today=new Date()
 console.log(today)


 
    


 
}






/*
   $("body").prepend(`
        
        <div>
        <h2>${data.data[0].title}</h2>
        </div>
         `)

*/



