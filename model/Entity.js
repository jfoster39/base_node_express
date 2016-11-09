var Model = require( 'objection' ).Model;

/**
 * extends Model
 * @constructor
 */
 function Entity()
 {
     Model.apply( this, arguments );
 }

 Model.extend( Entity );
 module.exports = Entity;

 // Table name is the only required property
 Entity.tableName = 'tb_entity';
