const WxrdBook = require("./wxrd-book");

class EntryLog extends WxrdBook {

    createEntry(content) {

        const defaultAlias = "Record Entry: " + this.tools.generateTimestamp();
        const newEntry = this.createWxrd(defaultAlias);

        // need to do something like this to cast to RecordEntry
        // https://stackoverflow.com/a/9253085/670768 



        newEntry.setMetaDataByKey

        return newEntry;
    };

    clearAllEntries(){
        this.clearAllWxrds();
    }

}

module.exports = EntryLog;