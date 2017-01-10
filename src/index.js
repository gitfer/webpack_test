
//import angular from '../bower_components/angular/angular.js';


require('../bower_components/angular/angular.js');

const MODULE_NAME = 'myApp';

angular.module(MODULE_NAME, []);

export default MODULE_NAME;


/* CASO 1 - importo tutti i file di controller tramite require e non cambio nulla della mia implementazione */
/*
var req = require.context("../src/controllers", true, /^(.*\.(js$))[^.]*$/igm);
req.keys().forEach(function(key){
	console.log(key)
    req(key);
});
*/

/* CASO 2 - importo i singoli file e li converto in moduli */
import myCtrl from '../src/controllers/myCtrl.js'
console.log(myCtrl);
angular.module('myApp').controller('myCtrl', myCtrl.x);