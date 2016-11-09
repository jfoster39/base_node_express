// base url string for creating route strings
const BASE_URL = './routes/'; // this is OK in node

// helper function for dynamic route creation
function createRouteString( modelName )
{
    return BASE_URL + modelName;
}

// get all of our routes here
var registerEntityRoutes   = require( createRouteString( 'entities'  ) );
var registerLocationRoutes = require( createRouteString( 'locations' ) );
var registerRoleRoutes     = require( createRouteString( 'roles'     ) );

// register all of our routes here so that server,js can instantiate once api instance
module.exports = function (app)
{
    registerEntityRoutes(app);
    registerLocationRoutes(app);
    registerRoleRoutes(app);
};
