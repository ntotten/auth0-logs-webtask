require('dotenv').load();

var required_params = [
	"AUTH0_DOMAIN",
	"AUTH0_CLIENT_ID",
	"AUTH0_CLIENT_SECRET",
	"LOGGLY_SUBDOMAIN", 
	"LOGGLY_TOKEN", 
	"LOGGLY_USERNAME", 
	"LOGGLY_PASSWORD"
];

module.exports.getContextFromDotEnv = function(){
    var context = { 
    	data: {} 
    };
    required_params.forEach(function (p) {
        context.data[p] = process.env[p];
    });
    return context;
}