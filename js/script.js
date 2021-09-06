function setPrice(product, isIncreasing, number) {
    const productCost = document.getElementById(product + '-cost')
    // productCost.innerText = 0;
    // const productCostNumber = parseInt(productCost.innerText);
    // console.log(productCostNumber)

    if (isIncreasing == false) {
        productCost.innerText = number;
    }
    else if (isIncreasing == true) {
        productCost.innerText = number;
    }
}


document.getElementById('8GB-memory').addEventListener('click', function () {
    // const productCost = document.getElementById('memory-cost')
    // productCost.innerText = 0;
    setPrice('memory', false, 0)
})


document.getElementById('16GB-memory').addEventListener('click', function () {
    // const productCost = document.getElementById('memory-cost')
    // productCost.innerText = 180;

    setPrice('memory', true, 180)
})

document.getElementById('256GB-ssd').addEventListener('click', function () {
    // const storageCost = document.getElementById('storage-cost');
    // storageCost.innerText = 0;
    setPrice('storage', false, 0)
})
document.getElementById('512GB-ssd').addEventListener('click', function () {
    // const storageCost = document.getElementById('storage-cost');
    // storageCost.innerText = 100;

    setPrice('storage', true, 100)
})

document.getElementById('free-delivery').addEventListener('click', function () {
    // const deliveryCost = document.getElementById('delivery-cost');
    // deliveryCost.innerText = 0;
    setPrice('delivery', false, 0)
})

document.getElementById('paid-delivery').addEventListener('click', function () {
    // const deliveryCost = document.getElementById('delivery-cost');
    // deliveryCost.innerText = 20;
    setPrice('delivery', true, 20)
})