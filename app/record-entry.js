const Wxrd = require("./wxrd");

class RecordEntry{

    /**
     * Wraps an existing Wxrd as a RecordEntry with all
     * relevant methods available to it
     * @param {Wxrd} wxrd - the wxrd for the entry
     */
    constructor(wxrd){
        this.wxrd = wxrd;
    }

    retrieveParentRecords(){
        return this.wxrd.retrieveTagsByPrefix("parentRecord");
    }

    addParentRecord(parentRecordUuid){
        this.wxrd.addTagByPrefix("parentRecord", parentRecordUuid);
    }

    getBody(){
        return this.wxrd.getMetaDataByKey("body");
    }

    getUuid(){
        return this.wxrd.getUuid();
    }

    getTitle(){
        return this.wxrd.getMetaDataByKey("title");
    }

    getEnteredAt(){
        return this.wxrd.getMetaDataByKey("enteredAt");
    }

    getSourceUuid(){
        return this.wxrd.getMetaDataByKey("sourceUuid");
    }


    setBody(body){
        return this.wxrd.setMetaDataByKey("body", body);
    }

    setTitle(title){
        return this.wxrd.setMetaDataByKey("title", title);
    }

    setEnteredAt(enteredAt){
        return this.wxrd.setMetaDataByKey("enteredAt", enteredAt);
    }

    setSourceUuid(sourceUuid){
        return this.wxrd.setMetaDataByKey("sourceUuid", sourceUuid);
    }
}

module.exports = RecordEntry;