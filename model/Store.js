// ----------------------------------------------
// Location is js keyword, using Store instead
// ----------------------------------------------

var Model = require( 'objection' ).Model;

/**
 * extends Model
 * @constructor
 */
 function Store()
 {
     Model.apply( this, arguments );
 }

 Model.extend( Store );
 module.exports = Store;

 // Table name is the only required property
 Store.tableName = 'tb_location';
