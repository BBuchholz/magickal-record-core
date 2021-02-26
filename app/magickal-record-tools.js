const { v4: uuidv4 } = require('uuid');

var magickalRecordTools = function() {

    this.generateTimestamp = function() {

        const currentTime = new Date();
        return currentTime.toISOString();
    }

    this.generateUuid = function(){

        return uuidv4();
    }


}

module.exports = magickalRecordTools;