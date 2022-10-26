
 /*  function scrivi() 
   {
      let budget = 1000;
      let compere = 0;

      while (budget > 0) {
        let prezzi = Math.floor(Math.random() * 100);
        if (prezzi<= budget) {
          compere += 1;
          budget -= prezzi;
          document.getElementById('lista').innerHTML += '<p> Ammontare della spesa: € ' + prezzi + '<br>Nuovo budget aggiornato: € ' + budget + '<p>';
        }
        if (budget < 100) {
          break;
        }
      }
    }*/
   
    
let btn = document.getElementById('aggiungi');

btn.addEventListener('click', function()  {
    scrivi(); })


   function scrivi() 
   {
    var budget = Number(document.getElementById('budget').value);
    if (budget<500) {
      document.getElementById('lista').innerHTML = 'Scrivi un importo superiore a 500';
      return;
    }
    sottrazione(budget);
   }

 function sottrazione(budget) { 

  var contaSpese = 0;
  var budgetParz = budget;
  var check = true;
    while (budgetParz > (budget/10)) 
    {
     var spese = Math.floor(Math.random() * 100);
    budgetParz -= spese;
    document.getElementById('lista').innerHTML += `<li>Spesa effettuata = ${spese} <br> Budget rimanente = ${budgetParz}</li>`;
    contaSpese++;

      if (budgetParz < (budget/2) && check == true) {
        check = false;
        document.getElementById('lista').innerHTML += `metà`;
      }


    }
    document.getElementById('lista').innerHTML += `finito`;
 }
