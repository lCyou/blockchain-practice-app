// import library
import { SHA256 } from 'crypto-js';
const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, data, previousHash) {
        this.timestamp = timestamp;
        this.data = data;
        // add previous hash constructor
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    // calculate this block Hash value
    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}