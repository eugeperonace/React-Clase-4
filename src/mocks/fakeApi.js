
const products = [
    {id:'0', name:'PINK', price: "$15.000,00", category: "sacos", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/img1.jpg', stock:5},
    {id:'1', name:'BLUE', price: "$17.000,00", category: "sacos", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/img2.jpg', stock:4},
    {id:'2', name:'GREEN', price: "$18.000,00", category: "sacos", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/img3.jpg', stock:6},
    {id:'3', name:'GREEN', price: "$13.000,00", category: "camisas", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/img2.jpg', stock:6},
    {id:'4', name:'GREEN', price: "$14.000,00", category: "camisas", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/img3.jpg', stock:6},
]

  export const getData = (categoryId) => {
    return new Promise ((resolve, reject) => {
      const productosFiltrados = products.filter((prod) => prod.category === categoryId);
      setTimeout(() => {
        categoryId ? resolve(productosFiltrados) : resolve(products);
      }, 1000);
    });
  };

  export const getItem = (id) => {
    return new Promise((resolve, reject) => {
        const productoEncontrado = products.find((prod) => prod.id === Number(id));
        setTimeout(() => {
            resolve(productoEncontrado);
        }, 1000);
    });
};

  // export const getData = new Promise ((resolve, reject) =>{
    
  //   let condition = true
  //   setTimeout(()=>{
  //     if(condition){
  //       resolve(products)
  //     }else{
  //       reject("Promise rejected.")
  //     }
  //   },3000)
  // })

  // export const getItem = new Promise ((resolve, reject) =>{
    
  //   let condition = true
  //   setTimeout(()=>{
  //     if(condition){
  //       resolve(products.find(item => item.name === "PINK"));
  //     }else{
  //       reject("Promise rejected.");
  //     }
  //   },2000);
  // })