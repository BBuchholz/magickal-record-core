const Wxrd = require("./wxrd");
const magickalRecordTools = require("./magickal-record-tools");

class WxrdBook {

    constructor(){

        this.allWxrdsByUuid = new Map();
        this.tools = new magickalRecordTools();
    }

    findFirstByAlias(aliasValue) {
        
        var found = undefined;

        for(let wxrd of this.allWxrdsByUuid.values()){
            
            for(let alias of wxrd.getAllAliases()){
                
                if(alias && 
                    alias.trim() == aliasValue.trim()){

                    found = wxrd;
                }
            }
            
        }
        
        return found;
    }

    createWxrd(defaultAlias) {

        const newWxrd = new Wxrd(defaultAlias);

        this.allWxrdsByUuid.set(newWxrd.uuid, newWxrd);

        return newWxrd;
    };

    mergeByUuid(wxrdToMerge) {

    }

    getWxrdsByAlias(alias) {

        let found = this.findFirstByAlias(alias);

        if(!found){
            found = this.createWxrd(alias);
        }        

        return [found];
    };

    updateAliasForUuid(uuid, alias) {
         
        let found = undefined;

        if(this.allWxrdsByUuid.has(uuid)){
            found = this.allWxrdsByUuid.get(uuid);
            found.setAlias(alias);
        }

        return found;
    }

    getWxrdByUuid(uuid) {
        return this.allWxrdsByUuid.get(uuid);
    }
    
    clearAllWxrds() {

        this.allWxrdsByUuid.clear();
    };

}

module.exports = WxrdBook;