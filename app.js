
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

const bestPrice = document.getElementById('bestPrice'); 
const Memory = document.getElementById('extraMemory'); 
const storage = document.getElementById('extraStorage'); 
const Dalivery = document.getElementById('Dalivery'); 
const total = document.getElementById('totalAmount'); 
const mainTotal = document.getElementById('mainTotal');
const cupon = document.getElementById('cupon');
const apply = document.getElementById('applybtn');


function showAmout(product,Amount) {
    product.innerText = Amount;
    sumAmout();
}

function sumAmout() {
    const price =  parseFloat(bestPrice.innerText);
    const recentMemory =  parseFloat(Memory.innerText);
    const recentstorage =  parseFloat(storage.innerText);
    const recentDalivery =  parseFloat(Dalivery.innerText);
    
    const sum = price + recentMemory + recentstorage + recentDalivery;
    total.innerText = sum;
    
    const maintotal = sum;

    mainTotal.innerText = sum;

    // cupon program 
    apply.addEventListener('click', function () {
        if (cupon.value == 'stevekaku' ) {
           const parsentage = maintotal * 20 /100;
           const mainsum = maintotal - parsentage;
           mainTotal.innerText = mainsum;
           cupon.value = '';
           apply.setAttribute("disabled", true);
        }
    });
}


// memory butn click 
memory_8.addEventListener('click',function() {
    showAmout(Memory,0);
});
memory_16.addEventListener('click',function() {
    showAmout(Memory,100);
    
});
// storage btn click 
ssd256.addEventListener('click',function() {
    showAmout(storage,0);
});
ssd512.addEventListener('click',function() {
    showAmout(storage,100);
});
ssd1Tb.addEventListener('click',function() {
    showAmout(storage,200);
});
// Dalivery btn click 
primeDalivery.addEventListener('click',function() {
    showAmout(Dalivery,0);
});
chargeDalivery.addEventListener('click',function() {
    showAmout(Dalivery,20);
});