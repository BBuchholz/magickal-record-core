const { v4: uuidv4 } = require('uuid');

class Wxrd {

    constructor(defaultAlias) {
        this.uuid = this.generateUuid();
        this.createdAt = this.generateTimestamp();
        this.metaData = new Map();
        this.setAlias(defaultAlias);
    }

    generateTimestamp() {

        return "";
    }

    generateUuid(){

        return uuidv4();
    }


    setMetaDataByKey(key, val) {
        if(!this.metaData.has(key)){
            this.metaData.set(key, []);
        }
        this.metaData.get(key).push({
            value: val,
            valueSetAt: this.generateTimestamp()
        });
    }

    getMetaDataByKey(key) {
        return this.metaData.get(key)
            .sort((a, b) => (a.valueSetAt > b.valueSetAt) ? 1 : -1)[0].value;
    }

    getDefaultAliasValue(){
        return this.getMetaDataByKey("alias");
    }

    setAlias(aliasValue) {
        this.setMetaDataByKey("alias", aliasValue);
    }

    getAllAliases(){
        return this.metaData.get("alias").map((x) => x.value);
    } 


}

module.exports = Wxrd;