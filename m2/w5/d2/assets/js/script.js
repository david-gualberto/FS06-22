
   function scrivi() 
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
    }
   
    
//let btn = document.getElementById('aggiungi');

//btn.addEventListener('click', function()  {
    //scrivi() })
/*   function scrivi() 
   {
    let budget = Number(document.getElementById('budget').value);
    if (budget<500) {
      document.getElementById('scrivi').innerHTML = 'Scrivi un importo superiore a 500'
      return;
    }
    sottrazione(budget) ;
   }

 function sottrazione(budget) { 
      let spese = Math.floor(Math.random() * 100);
      let budgetParz = budget - spese;
      document.getElementById('scrivi').innerHTML = `<li>Spesa effettuata = ${spese} <br> Budget rimanente = ${budgetParz}</li>`;

      while (budgetparz > 0) {
        budgetParz = budgetParz - spese;
        document.getElementById('scrivi').innerHTML = `<li>Spesa effettuata = ${spese} <br> Budget rimanente = ${budgetParz}</li>`;
      }
 } */
