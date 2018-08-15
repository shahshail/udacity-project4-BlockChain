const SHA256 = require('crypto-js/sha256')

/* ================Block Class =================
| Class with a constructor for a block -------->|
| =============================================*/
class Block{
    constructor(data){
            this.hash = "",
            this.heigt = 0,
            this.body = data,
            this.time = 0,
            this.previousblockhash  =  ""
    }
}


/* ================Block Class ===========================
| Class with a constructor for a new blockchain -------->|
| =======================================================*/

class Blockchain{
    constructor(){
        this.chain = [];
        this.addBlock(new Block("First Block in the chain - Genesis block"));
    }

    addBlock(newBlock){
        newBlock.heigt = this.chain.length
        newBlock.time = new Date().getTime().toString().slice(0,-3);
        if(this.chain.length > 0){
            newBlock.previousblockhash = this.chain[this.chain.length-1].hash;
        }
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        this.chain.push(newBlock);
        }
}