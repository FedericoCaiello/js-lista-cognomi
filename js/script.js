// Chiedi all’utente il cognome
var cognomeUtente = prompt('inserisci il tuo cognome');
var cognome =  ["Caiello", "Chimento", "Bianchini", "Stefanini", "Petrollini", "Di Maio"];
// inseriscilo in un array con altri cognomi
cognome.push(cognomeUtente);
// stampa la lista ordinata alfabeticamente
cognome.sort();
for (var i = 0; i < cognome.length; i++) {
  console.log(cognome[i]);
  var contenuto = document.getElementById('lista_cognomi').innerHTML;
  document.getElementById('lista_cognomi').innerHTML = '<li>' + cognome[i] + '</li>' + contenuto;
  console.log(document.getElementById('lista_cognomi').innerHTML);
}

// Scrivi anche la posizione della lista in cui  il nuovo utente si trova
var posizione = cognome.indexOf(cognomeUtente) + 1;
document.getElementById("lista_cognomi").innerHTML = '<li>' + cognomeUtente + '</li>' + posizione + contenuto ;
