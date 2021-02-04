const { v4: uuidv4 } = require('uuid');
const allEntries = new Map();

function magickalRecord() {
 
    this.isInTestingMode = function() {
        return true;
    };

    
}

module.exports = magickalRecord;