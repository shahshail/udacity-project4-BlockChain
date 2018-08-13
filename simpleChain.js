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
    }

    addBlock(newBlock){
        this.chain.push(newBlock);
        }
}