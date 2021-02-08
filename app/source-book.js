const { v4: uuidv4 } = require('uuid');
const allSourceIdentities = new Map();

function sourceBook() {

    this.getSourceByAlias = function(){

    };

    this.storeIdentity = function(sourceIdentity) {

        const newUuid = generateUuid();

        const newEntry = {
            uuid: newUuid,
            body: content,
            sourceUuid: "",
            title: "",            
            parentRecords: new Map(),
            wxrdTags: new Map(),
						alias: "",
            enteredAt: this.generateTimestamp()
        };

        allEntries.set(newUuid, newEntry);

        return newEntry;
    };

    this.generateTimestamp = function() {

        return "";
    }

    this.getSourceIdentityByUuid = function(uuid) {

        return allSourceIdentities.get(uuid);
    };
    
    this.clearAllSourceIdentities = function() {

        allSourceIdentities.clear();
    };

    function generateUuid(){

        return uuidv4();
    }
}

module.exports = sourceBook;
