const Wxrd = require("./wxrd")

class WxrdBook {

    constructor(){

        this.allWxrdsByUuid = new Map();

    }

    findFirstByAlias(aliasValue) {
        
        for(let wxrd of this.allWxrdsByUuid.values()){
            for(let alias of wxrd.getAllAliases()){
                if(alias.aliasValue === aliasValue){
                    return wxrd;
                }
            }
            
        }
        
        return undefined;
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