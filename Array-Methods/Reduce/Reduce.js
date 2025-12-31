const numeros = [10,20,30,40];

const total = numeros.reduce((acc, num) =>{
    return acc + num
}, 0);

console.log(total);

const frutas = ['manzana', 'pera', 'manzana', 'uva', 'pera', 'manzana'];

const conteo = frutas.reduce((acc2, fruta) =>{
    acc2[fruta] = (acc2[fruta] || 0) + 1
    return acc2
},{});

console.log(conteo);

const numeros2 = [1,1,4,5,6,6];

const conteo2 = numeros2.reduce((acc3, num2) =>{
    acc3[num2] = (acc3[num2] || 0) + 1
    return acc3
}, {});

console.log(conteo2);


const ventas = [
    { producto: 'Laptop', total: 1000 },
    { producto: 'Mouse', total: 50 },
    { producto: 'Laptop', total: 1000 },
    { producto: 'Teclado', total: 100 }
  ]
  

  const resultado = ventas.reduce((contenedor, venta)=>{
    const producto = venta.producto
    const total = venta.total

    if(!contenedor[producto]){
        contenedor[producto] = 0
    }

    contenedor[producto] = contenedor[producto] + total
    return contenedor
  }, {});

  console.log(resultado);