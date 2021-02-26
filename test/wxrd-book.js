var expect = require("chai").expect;
const WxrdBook = require("../app/wxrd-book");

describe("Wxrd Book", function() {
    
    const myWxrdBook = new WxrdBook();
    var testWxrd;
    
    beforeEach(function(){
        myWxrdBook.clearAllWxrds();
        wxrdLst = myWxrdBook.getWxrdsByAlias("Test Wxrd");
        testWxrd = myWxrdBook.getWxrdsByAlias("Test Wxrd")[0];
    });

    it("should have a UUID", function(){

        expect(testWxrd).to.have.property("uuid");
    });

    it("should have an ordered list of aliases", function(){

        expect(testWxrd).to.have.property("getAllAliases");
        
    });

    it("should have a metadata property for 'alias'", function(){
        //TODO fill in test (want to change it from current implementation, alias should just be another bit of metadata)
    });


    it("should allow changing the default alias to something new", function(){

        const wxrdWithDefaultAlias = myWxrdBook.getWxrdsByAlias("A Default Alias")[0];
        expect(wxrdWithDefaultAlias.getDefaultAliasValue()).to.equal("A Default Alias");

        const wxrdWithUpdatedAlias = myWxrdBook.updateAliasForUuid(wxrdWithDefaultAlias.uuid, "A New Alias");
        const defaultUuid = wxrdWithDefaultAlias.uuid;
        const updatedUuid = wxrdWithUpdatedAlias.uuid;
        expect(defaultUuid).to.equal(updatedUuid);

        const newRetrieval = myWxrdBook.getWxrdsByAlias("A New Alias")[0];
        const defaultRetrieval = myWxrdBook.getWxrdsByAlias("A Default Alias")[0];

        expect(newRetrieval).to.eql(defaultRetrieval);
    });

    it("should have optional metadata", function(){

        expect(testWxrd).to.have.property("metaData");
    });

    it("should allow setting and retrieval of metadata by key", function() {
        
        const wxrd = myWxrdBook.getWxrdsByAlias("test")[0];

        wxrd.setMetaDataByKey("test key", "test value");

        myWxrdBook.mergeByUuid(wxrd);

        const testVal = myWxrdBook.getWxrdByUuid(wxrd.uuid).getMetaDataByKey("test key");

        expect(testVal).to.equal("test value");
    });

    it("should get most recently updated value of for key, by timestamp", function(){
        //TODO Fill In Test
        //see metadata update comments for structure desired

        const testKey = "test key";
        const firstEntry = "test value (shouldn't show)";
        const secondEntry = "test value second (should show)";

        testWxrd.setMetaDataByKey(testKey, firstEntry);

        var currentEntryValue = testWxrd.getMetaDataByKey(testKey);

        expect(currentEntryValue).to.equal(firstEntry);

        testWxrd.setMetaDataByKey(testKey, secondEntry);

        currentEntryValue = testWxrd.getMetaDataByKey(testKey);

        expect(currentEntryValue).to.equal(secondEntry);

    });

    it("should allow update of metadata by key, storing updated at timestamp", function() {
        //TODO Fill In Test
        //metadata should look like
        // {
        //     metadata: {
        //         key: "key",
        //         values: [{

        //             value: "value at timestamp",
        //             updatedAt: "timestamp"
        //         },
        //         {

        //             value: "value at timestamp",
        //             updatedAt: "timestamp"
        //         }

        //         ]
        //     }
        // }
    });


});
