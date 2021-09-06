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

function getInputValue(product) {
    const productInput = document.getElementById(product + '-cost');
    const productInputNumber = parseFloat(productInput.innerText);
    return productInputNumber;
}

function calculateTotal() {
    const bestPrice = getInputValue('minimum');
    const extraMemoryCost = getInputValue('memory')
    const extraStorageCost = getInputValue('storage');
    const deliveryCharge = getInputValue('delivery');

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;

    const finalTotalPrice = document.getElementById('final-total');
    finalTotalPrice.innerText = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;

}


document.getElementById('8GB-memory').addEventListener('click', function () {
    setPrice('memory', false, 0)

})


document.getElementById('16GB-memory').addEventListener('click', function () {
    setPrice('memory', true, 180)

})

document.getElementById('256GB-ssd').addEventListener('click', function () {
    setPrice('storage', false, 0)
})
document.getElementById('512GB-ssd').addEventListener('click', function () {

    setPrice('storage', true, 100)
})

document.getElementById('free-delivery').addEventListener('click', function () {
    setPrice('delivery', false, 0)
})

document.getElementById('paid-delivery').addEventListener('click', function () {
    setPrice('delivery', true, 20)
})