const magickalRecordTools = require("../app/magickal-record-tools");
const tools = new magickalRecordTools();

class Wxrd {

    constructor(defaultAlias) {
        this.uuid = tools.generateUuid();
        this.createdAt = tools.generateTimestamp();
        this.metaData = new Map();
        this.setAlias(defaultAlias);
    }

    //MOVED TO magickal-record-tools (delete when tests all pass)
    // generateTimestamp() {

    //     return "";
    // }

    //MOVED TO magickal-record-tools (delete when tests all pass)
    // generateUuid(){

    //     return uuidv4();
    // }

    retrieveTagsByPrefix(prefix){

    }

    addTagByPrefix(prefix, tag){
        
    }

    setMetaDataByKey(key, val) {
        if(!this.metaData.has(key)){
            this.metaData.set(key, []);
        }
        this.metaData.get(key).push({
            value: val,
            valueSetAt: tools.generateTimestamp()
        });
    }

    getMetaDataByKey(key) {
        return this.metaData.get(key)
            .sort((a, b) => (a.valueSetAt < b.valueSetAt) ? 1 : -1)[0].value;
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

    getUuid(){
        return this.uuid;
    }
}

module.exports = Wxrd;