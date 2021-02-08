const { v4: uuidv4 } = require('uuid');
const allWxrdsByUuid = new Map();

function wxrdBook() {

    findFirstByAlias = function(aliasValue) {
        
        for(let wxrd of allWxrdsByUuid.values()){
            for(let alias of wxrd.aliases.values()){
                if(alias.aliasValue === aliasValue){
                    return wxrd;
                }
            }
        }
        
        return undefined;
    }

    createWxrd = function(defaultAlias) {

        const newUuid = generateUuid();

        const newWxrd = {
            uuid: newUuid,
            createdAt: generateTimestamp(),
            getDefaultAliasValue: function(){
                return this.aliases[this.aliases.length - 1].aliasValue;
            },
            aliases: [{
                aliasValue: defaultAlias,
                aliasAssignedAt: generateTimestamp()
            }],
            setAlias: function(aliasValue) {
                this.aliases.push({
                    aliasValue: aliasValue,
                    aliasAssignedAt: generateTimestamp()
                });
            },
            metaData: new Map(),
            setMetaDataByKey: function(key, val) {
                this.metaData.set(key, val);
            },
            getMetaDataByKey: function(key) {
                return this.metaData.get(key);
            }
        };

        allWxrdsByUuid.set(newUuid, newWxrd);

        return newWxrd;
    };

    generateTimestamp = function() {

        return "";
    }


    this.mergeByUuid = function(wxrdToMerge) {

    }

    this.getWxrdsByAlias = function(alias) {

        let found = findFirstByAlias(alias);

        if(!found){
            found = createWxrd(alias);
        }        

        return [found];
    };

    this.updateAliasForUuid = function(uuid, alias) {
         
        let found = undefined;

        if(allWxrdsByUuid.has(uuid)){
            found = allWxrdsByUuid.get(uuid);
            found.setAlias(alias);
        }

        return found;
    }

    this.getWxrdByUuid = function(uuid) {
        return allWxrdsByUuid.get(uuid);
    }
    
    this.clearAllWxrds = function() {

        allWxrdsByUuid.clear();
    };

    function generateUuid(){

        return uuidv4();
    }
}

module.exports = wxrdBook;