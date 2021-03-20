const WxrdBook = require("./wxrd-book");
const RecordEntry = require("./record-entry");

class EntryLog extends WxrdBook {

    /**
     * 
     * @param {string} content 
     * @returns {RecordEntry}
     */
    createEntry(content) {

        const defaultAlias = "Record Entry: " + this.tools.generateTimestamp();
        const newWxrd = this.createWxrd(defaultAlias);

        //should look like this
        const newEntry = new RecordEntry(newWxrd);


        newEntry.setBody(content);


        return newEntry;
    };

    clearAllEntries(){
        this.clearAllWxrds();
    }

}

module.exports = EntryLog;