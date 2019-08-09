var $ = require('jquery');

require('jquery-ui/ui/widgets/datepicker'); 
require('jquery-ui/themes/base/datepicker.css'); 
require('jquery-ui/ui/widgets/button'); 
require('jquery-ui/themes/base/button.css');
require('jquery-ui/themes/base/theme.css');
require('./assets/scss/main.scss');
$( function() {
  $( "#datepicker" ).datepicker();
} );
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