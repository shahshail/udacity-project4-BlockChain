/* ===== Persist data with LevelDB ==================*/

let level = require('level');
let chainDB = './chaindata';
let db = level(chainDB);

//Add data with levelDB with key-value pair
function addLevelDBData(key, value){
    db.put(key,value, function(err) {
        if(err) return console.log('Block ' + key + ' submition Failed', err)
    })
}

//Get data from LevelDB with key/value pair
function getLevelDBData(key){
    db.get(key, function(err, value){
        if(err) return console.log('Not Found!', err);
        console.log('Value = ' + value);
    })
}