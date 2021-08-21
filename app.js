
// get memory card by id 
const memory_8 = document.getElementById('memory_8_gb'); 
const memory_16 = document.getElementById('memory_16_gb'); 
// get storage by id 
const ssd256 = document.getElementById('ssd256'); 
const ssd512 = document.getElementById('ssd512'); 
const ssd1Tb = document.getElementById('ssd1Tb'); 
// get all dalivery btn 
const primeDalivery = document.getElementById('primeDalivery');
const chargeDalivery = document.getElementById('chargeDalivery');

// table data 
const basePrice = document.getElementById('basePrice'); 
const memory = document.getElementById('extra-memory-cost'); 
const storage = document.getElementById('extraStorage'); 
const dalivery = document.getElementById('Dalivery'); 
const total = document.getElementById('totalAmount');

const cupon = document.getElementById('cupon');
const apply = document.getElementById('applybtn');

const mainTotal = document.getElementById('mainTotal');




// memory butn click 
memory_8.addEventListener('click',function() {
    showAmout(memory,0);
});
memory_16.addEventListener('click',function() {
    showAmout(memory,180);
    
});
// storage btn click 
ssd256.addEventListener('click',function() {
    showAmout(storage,0);
});
ssd512.addEventListener('click',function() {
    showAmout(storage,100);
});
ssd1Tb.addEventListener('click',function() {
    showAmout(storage,180);
});
// Dalivery btn click 
primeDalivery.addEventListener('click',function() {
    showAmout(dalivery,0);
});
chargeDalivery.addEventListener('click',function() {
    showAmout(dalivery,20);
});

apply.addEventListener('click', function () {

    if (cupon.value == 'stevekaku') {
       const discount = parseFloat(total.innerText) * 0.2;
       const finalTotal= parseFloat(total.innerText) - discount;
       mainTotal.innerText = finalTotal;
       cupon.value = "";
    }
});

function showAmout(product,Amount) {
    product.innerText = parseFloat(Amount);
    calculation();
}

function calculation() {
    const getBasePrice  =  parseFloat(basePrice.innerText);
    const getMemoryPrice  =  parseFloat(memory.innerText);
    const getStoragePrice  =  parseFloat(storage.innerText);
    const getDaliveryPrice  =  parseFloat(dalivery.innerText);
    
    const getTotalPrice = getBasePrice + getMemoryPrice + getStoragePrice + getDaliveryPrice;
    total.innerText = getTotalPrice;

    const tempTotal = getTotalPrice;
    mainTotal.innerText = tempTotal;
}
