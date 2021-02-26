const Wxrd = require("./wxrd");

class RecordEntry extends Wxrd {

    constructor(content, title, enteredAt, sourceUuid){
        super(title);

        this.setMetaDataByKey("body", content);
        this.setMetaDataByKey("title", title);
        this.setMetaDataByKey("enteredAt", enteredAt);
        this.setMetaDataByKey("sourceUuid", sourceUuid);
    }

    parentRecords(){
        return [];
    }

    body(){
        return this.getMetaDataByKey("body");
    }

    title(){
        return this.getMetaDataByKey("title");
    }

    enteredAt(){
        return this.getMetaDataByKey("enteredAt");
    }

    sourceUuid(){
        return this.getMetaDataByKey("sourceUuid");
    }
}

module.exports = RecordEntry;