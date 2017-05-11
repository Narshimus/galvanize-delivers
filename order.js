window.onload = function() {
  // document.addEventListener('DOMContentLoaded', function(){
  const TAX_RATE = .0625;
  let receiptContent = {
    'Royal with Cheese': 8.99,
    'Arugula Pie': 11.99,
    'Smoked Swine': 14.99,
    'Ice Cream Biscuit': 7.99
  };
  let tableBody = document.getElementById('table-body');
  let buttons = document.querySelectorAll('button');
  let subTotalEle = document.getElementById('subtotal');
  let taxEle = document.getElementById('tax');
  let totalEle = document.getElementById('total');
  let subTotal = 0;
  let tax = 0;
  let total = 0;
  console.log(tableBody.innerText);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      for (key in receiptContent) {
        if (key === buttons[i].name) {
          let newRow = tableBody.appendChild(document.createElement('tr'));
          let newKey = newRow.appendChild(document.createElement('td'));
          let newPrice = newRow.appendChild(document.createElement('td'));
          newKey.textContent = key;
          newPrice.className = 'tbl-ele-right';
          newPrice.textContent = `$${receiptContent[key]}`;
          subTotal += receiptContent[key];
          subTotalEle.textContent = `$${parseFloat(Math.round((subTotal)* 100) / 100).toFixed(2)}`;
          tax += receiptContent[key] * TAX_RATE;
          taxEle.textContent = `$${parseFloat(Math.round((tax)* 100) / 100).toFixed(2)}`;
          total = subTotal + tax;
          totalEle.textContent = `$${parseFloat(Math.round((total)* 100) / 100).toFixed(2)}`;
        }
      }
    })
    // })
  }
  let form = document.getElementById('form');
  form.addEventListener('submit',function(event){
    event.preventDefault();
    let name = document.querySelector("input[name='name']").value
    let phone = document.querySelector("input[name='phone']").value
    let address = document.querySelector("input[name='address']").value
    let str = 'failure';
    console.log('hello');

    if (address !== '' && phone !== '' && address !== '' && tableBody.innerText !== ''){
      str = 'success';
    }
    var x = document.getElementById(`snackbar`)
    x.textContent=str;

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 3000);

      // let status = document.getElementById('snackbar');
      // x.textContent = str;
      // status.className = "show";

      // $('.save-status').fadeIn(500, function() {
      //   setTimeout(function() {
      //     $('.save-status').fadeOut(500);
      //   }, 2000);
      // })

  })
}
