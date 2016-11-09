// ----------------------------------------------
// Location is js keyword, using Store instead
// ----------------------------------------------

var Model = require( 'objection' ).Model;

/**
 * extends Model
 * @constructor
 */
 function Role()
 {
     Model.apply( this, arguments );
 }

 Model.extend( Role );
 module.exports = Role;

 // Table name is the only required property
 Role.tableName = 'tb_role';
