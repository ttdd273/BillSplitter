$('.firstfour').change(function() {
    $('.cardImg').removeClass('active');
    var card = $('.firstfour').val();
    var firstNumber = card.substr(0,1);
    switch(firstNumber) {
      case '4': $('.visa').addClass('active');
          break;
      case '3':     $('.amex').addClass('active');
          break;
      case '5': $('.mastercard').addClass('active');
          break;
      case '6':  $('.discover').addClass('active');
          break;
    }
});
$('.signIn').click(function(){
  $('.theCard').toggleClass('flipped');
});


var showTemplateDialog = function() {
  var dialog = document.getElementById('my-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('dialog.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }
};

var hideDialog = function(id) {
  document
    .getElementById(id)
    .hide();
};






document.addEventListener('postchange', function (event) {
    console.log('postchange event', event);
  });
  function changeTab() {
    document.getElementById('tabbar').setActiveTab(1);
  }
  function changeButton() {
    document.getElementById('segment').setActiveButton(1);
  }
  function logIndexes() {
    console.log('active button index', document.getElementById('segment').getActiveButtonIndex());
    console.log('active tab index', document.getElementById('tabbar').getActiveTabIndex());
  }


  function tipCalc() {
    let preTipBill = document.getElementById("preTipBill").value;
    let tipPercent = document.getElementById("tipPercent").value;
    let splitBetween = document.getElementById("splitBetween").value;

    if (splitBetween === "" || splitBetween <= 0 || splitBetween.length === 0) {
        splitBetween = 1;  
    }

    if (preTipBill === "" || tipPercent === "" || preTipBill.length === 0 || tipPercent.length === 0) {
        document.getElementById("output").innerHTML = "Please input all required amounts!";
    } else {
        preTipBill = parseFloat(preTipBill).toFixed(2);
        splitBetween = parseFloat(splitBetween).toFixed(0);

        let tipTotal = preTipBill * parseFloat(tipPercent) / 100;
        tipTotal = tipTotal.toFixed(2);
        let totalBill = parseFloat(preTipBill) + parseFloat(tipTotal);
        totalBill = totalBill.toFixed(2);
        let splitBill = parseFloat(totalBill / splitBetween);
        splitBill = splitBill.toFixed(2);


        `Total Tip: ${tipTotal} <br> Total Bill: ${totalBill} <br> Each Person Pays: ${splitBill}`
        let resultSolo = `Total Tip: ${tipTotal} <br> Total Bill: ${totalBill}`;
        let resultSplit = `Total Tip: ${tipTotal} <br> Total Bill: ${totalBill} <br> Each Person Pays: ${splitBill}`;

        if (splitBetween === 1 || splitBetween === "1") {
            document.getElementById("output").innerHTML = resultSolo;
        } else {
            document.getElementById("output").innerHTML = resultSplit;
        }
    }
}
window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};