// ............set price function.............. 

function setPrice(product, isIncreasing, number) {
    const productCost = document.getElementById(product + '-cost')

    if (isIncreasing == false) {
        productCost.innerText = number;
    }
    else if (isIncreasing == true) {
        productCost.innerText = number;
    }
    calculateTotal();

}
// .............get input value function........... 

function getInputValue(product) {
    const productInput = document.getElementById(product + '-cost');
    const productInputNumber = parseFloat(productInput.innerText);
    return productInputNumber;
}
// ............calculateTotal function...........

function calculateTotal(code) {
    const bestPrice = getInputValue('minimum');
    const extraMemoryCost = getInputValue('memory')
    const extraStorageCost = getInputValue('storage');
    const deliveryCharge = getInputValue('delivery');
    const sumOfAllCost = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;



    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = sumOfAllCost;


    const finalTotalPrice = document.getElementById('final-total');
    finalTotalPrice.innerText = sumOfAllCost;

    // handling coupon code 

    if (code.toLowerCase() == 'stevekaku') {
        const twentyPercent = sumOfAllCost * 0.2;
        finalTotalPrice.innerText = sumOfAllCost - twentyPercent;

    }
    else {
        alert('Invalid Coupon code')
    }


}
//.................. apply button event handler..................

document.getElementById('apply-button').addEventListener('click', function () {
    const couponCode = document.getElementById('freeOf-cost').value;
    calculateTotal(couponCode)
})

//...................  memory buttons event handlers...........

document.getElementById('8GB-memory').addEventListener('click', function () {
    setPrice('memory', false, 0)

})


document.getElementById('16GB-memory').addEventListener('click', function () {
    setPrice('memory', true, 180)

})

// ................. ssd buttons event handlers................

document.getElementById('256GB-ssd').addEventListener('click', function () {
    setPrice('storage', false, 0)
})


document.getElementById('512GB-ssd').addEventListener('click', function () {

    setPrice('storage', true, 100)
})

document.getElementById('1TB-ssd').addEventListener('click', function () {

    setPrice('storage', true, 180)
})


//................... delivery buttons event handler............... 

document.getElementById('free-delivery').addEventListener('click', function () {
    setPrice('delivery', false, 0)
})

document.getElementById('paid-delivery').addEventListener('click', function () {
    setPrice('delivery', true, 20)
})