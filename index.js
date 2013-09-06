var heroes = [
  {
    name: 'Chuck Norris',
    facts: [
      'No existe la teor�a de la evoluci�n, tan s�lo una lista de las' +
      ' especies que Chuck Norris permite vivir. ',
      'Chuck Norris no te pisa un pie, sino el cuello.',
      'Chuck Norris borr� la papelera de reciclaje.']
  },
  {
    name: 'Bruce Scheneier',
    facts: [
      'Science is defined as mankinds futile attempt at learning ' +
      'Bruce Schneiers private key.',
      'Others test numbers to see whether they are prime. Bruce ' +
      'decides whether a number is prime.']
  },
  {
    name: 'Arturo P�rez-Reverte',
    facts: [
      'P�rez-Reverte se baja m�sica en casa de Ramonc�n.',
      'P�rez-Reverte no necesita investigar para escribir novela ' +
      'hist�rica, el pasado cambia conforme teclea en la m�quina.']
  }
];
 
 
exports.index = function(req, res) {
  var names = heroes.map(function(p) { return p.name; });
  res.render('index', { heroes: names })
};