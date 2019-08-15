var $ = require('jquery');

// require('jquery-ui/ui/widgets/datepicker'); 
// require('jquery-ui/themes/base/datepicker.css'); 
require('jquery-ui/ui/widgets/button'); 
require('jquery-ui/themes/base/button.css');
require('jquery-ui/themes/base/theme.css');
require('./assets/scss/main.scss');
require('air-datepicker/dist/css/datepicker.min.css');
require('air-datepicker/dist/js/datepicker.min.js');

$('#air_datepicker').datepicker({
  range: true,
  clearButton: true,
  

})
var applyButton = '<span class="datepicker--button" data-action="hide">ПРИМЕНИТЬ</span>';
$('.datepicker--button[data-action="clear"]').each(function( index ){ $(applyButton).insertAfter($(this)); });
$('.datepicker--button[data-action="clear"]').text("ОЧИСТИТЬ")

$( "button" ).button( {
  icon: "ui-icon-lock"
} );
//$( "#date" ).datepicker();
var myObject = {
  myFn: function() {
      console.log( this );
  }
};

$( "#foo" ).click( myObject.myFn ); // HTMLElement #foo
$( "#foo" ).click( $.proxy( myObject, "myFn" ) ); // myObject