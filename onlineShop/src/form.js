let carts=document.querySelectorAll(`.add-cart`)
let cart=document.getElementById(`cart`)

let products=[
    {
        marke:`Apple`,
        Betriebssystem:`iOS`,
        DisplayGröße:`4,7 Zoll Display`,
        farbe:`Rot`,
        price:888.00,
        inCart:0,

    },
    {
        marke:`Apple`,
        Betriebssystem:`iOS`,
        DisplayGröße:`4,8 Zoll Display`,
        farbe:`Blau`,
        price:610.00,
        inCart:0,


    },
    {
        marke:`Apple`,
        Betriebssystem:`iOS`,
        DisplayGröße:`4,9 Zoll Display`,
        farbe:`Grey`,
        price:711.00,
        inCart:0,



    },
    {
        marke:`Apple`,
        Betriebssystem:`iOS`,
        DisplayGröße:`4,6 Zoll Display`,
        farbe:`Gold`,
        price:550.00,
        inCart:0,


    },
    {
        marke:`Apple`,
        Betriebssystem:`iOS`,
        DisplayGröße:`4,7 Zoll Display`,
        farbe:`white`,
        price:760.00,
        inCart:0,


    },

]
for(let i=0;i<carts.length;i++){
    carts[i].addEventListener(`click`,()=>{
        console.log(`added to cart`)
        cartNumbers();
        console.log(i); 
        totalCost(products[i])
    })
}
function onloadCartNumbers(){
    let productNumbers=localStorage.getItem(`cartNumbers`)
    if (productNumbers) {
       
        document.querySelector(`.cart span`).textContent =productNumbers;
    }
}
function cartNumbers(){
    let productNumbers=localStorage.getItem(`cartNumbers`)
    console.log(productNumbers)
    console.log(typeof productNumbers)
    productNumbers=parseInt(productNumbers)
    console.log(typeof(productNumbers))
    if (productNumbers) {
        localStorage.setItem(`cartNumbers`,productNumbers + 1)
        document.querySelector(`.cart span`).textContent =1+productNumbers;

    } else {
        localStorage.setItem(`cartNumbers`, 1)
        document.querySelector(`.cart span`).textContent =1;                
    }

}
function totalCost(product){
    console.log(`product`);
    localStorage.setItem(`totalCost`,product.price)
let cartCost=parseInt(localStorage.getItem(`totalCost`));
if(cartCost!=null){
    cartCost=parseInt("cartCost")
    localStorage.setItem(`totalCost`,cartCost + product.price)
console.log(totalCost);
}else{
    localStorage.setItem(`totalCost`,product.price)
    console.log(`my cart cost ist,${cartCost}`);

}
console.log(typeof cartCost);
   console.log(product.price)
}



onloadCartNumbers()