var fs = require('fs');

fs.readdir('./JSONProfiles/', function( err, files){
    var admin = require('./JSONProfiles/'+files[0])
    fs.appendFile('./accessibility.csv', 'Profile Name,', function (err) {
        if (err) return console.log(err);
    });
    for( var i = 0; i < admin.Profile.fieldPermissions.length; i++){
        var fieldName = admin.Profile.fieldPermissions[i].field.$t;
        fs.appendFile('./accessibility.csv', fieldName+',', function (err) {
            if (err) return console.log(err);
        });
    }

    fs.appendFile('./accessibility.csv', '\r\n', function (err) {
            if (err) return console.log(err);
        });
    
    files.forEach( function(file){
        var profileJson = require('./JSONProfiles/'+file);
        var profileName = file.substring(0,file.length - 5);
        fs.appendFile('./accessibility.csv', profileName+',', function (err) {
          if (err) return console.log(err);
        });

        for( var i = 0; i < profileJson.Profile.fieldPermissions.length; i++)
        {
            var permission = profileJson.Profile.fieldPermissions[i];
            var access = '';
            if( permission.editable.$t == 'false' && permission.readable.$t == 'false' ){
                access = 'hidden';
            }
            else{
                if( permission.readable.$t == 'true' ){
                    access += 'Read';
                }
                if(  permission.editable.$t == 'true' ){
                    access += '/Write';
                }
            }
            console.log(access);

            if( i != profileJson.Profile.fieldPermissions.length - 1 ){
                access += ',';
            }
            fs.appendFile('./accessibility.csv', access, function (err) {
                if (err) return console.log(err);
            });
        }

        fs.appendFile('./accessibility.csv', '\r\n', function (err) {
            if (err) return console.log(err);
        });
    })
});