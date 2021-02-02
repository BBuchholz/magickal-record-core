const { v4: uuidv4 } = require('uuid');
const allEntries = new Map();

function magickalRecord() {

    this.isInTestingMode = function() {
        return true;
    };

    this.createEntry = function(content) {

        const newUuid = generateUuid();

        const newEntry = {
            uuid: newUuid,
            body: content,
            sourceUuid: "",
            title: "",            
            parentRecords: new Map(),
            wxrdTags: new Map()
        };

        allEntries.set(newUuid, newEntry);

        return newEntry;
    };

    this.getEntryByUuid = function(uuid) {

        return allEntries.get(uuid);
    };
    
    this.clearAllEntries = function() {

        allEntries.clear();
    };

    function generateUuid(){

        return uuidv4();
    }
}

module.exports = magickalRecord;