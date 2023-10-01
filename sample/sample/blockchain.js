// import library
import { Block } from './block.js';

class Blockchain {
    constructor() {
        // create chain
        // tips genesisBlock is first block in chain
        this.chain = [this.createGenesisBlock()];
    }

    // create first block
    createGenesisBlock() {
        return new Block("10/01/2023", "Genesis block", "0");
    }

    // get latest block
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    // add new block
    addBlock(newBlock) {
        // set previous hash
        newBlock.previousHash = this.getLatestBlock().hash;
        // calculate new hash
        newBlock.hash = newBlock.calculateHash();
        // add new block to chain
        this.chain.push(newBlock);
    }

    // check chain is valid
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            // get current block
            const currentBlock = this.chain[i];
            // get previous block
            const previousBlock = this.chain[i - 1];

            // check current block hash is valid
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            // check current block previous hash is valid
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        // chain is valid
        return true;
    }
}