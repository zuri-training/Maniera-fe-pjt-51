
//DECLARING VARIABLES
var qty = document.getElementById('box');
var unitPrice = document.getElementById('up');
var counter = 1;



//INCREMENT and DECREMENT FXs
const nextNum = () => {
    counter++;
    console.log(counter)
    qty.innerHTML = counter;

    let finalPrice = counter * 114;
    console.log(`The final price would be ${finalPrice}`)
    unitPrice.innerHTML = finalPrice;
}
const prevNum = () => {
    counter--;
    console.log(counter);
    qty.innerHTML = counter;

    let finalPrice = counter * 114;
    console.log(`The final price would be ${finalPrice}`);
    unitPrice.innerHTML = finalPrice;
}


const remove = () => {
    console.log('Feature coming soon...')
}
