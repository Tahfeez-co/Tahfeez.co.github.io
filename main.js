let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

// get total
function getTotal()
{
    if(price.valu != ''){
        let result = (+price.value + +taxes.value + +ads.value) 
        - +discount.value;
        total.innerHTML = result;
        total.style.background= '#ec1fc0';
    }else{
        total.innerHTML = '#a00d02';
    }
}




// creat product
// save localstorage
// clear inputs
// read
// count
// delete
// update
// search
// clean data