/* ===== Persist data with LevelDB ==================*/

let level = require('level');
let chainDB = './chaindata';
let db = level(chainDB);