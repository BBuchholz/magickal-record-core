var expect = require("chai").expect;
const Wxrd = require("../app/wxrd");

describe("Wxrds", function() {
    
    var testWxrd;
    
    beforeEach(function(){

        testWxrd = new Wxrd();
    });

    it("should have a UUID", function(){

        expect(testWxrd).to.have.property("uuid");
    });

    it("should have a created at timestamp", function(){

        expect(testWxrd).to.have.property("createdAt");
        
    });

    it("should return a list of Wxrd Tags", function(){

        //TODO fill in test
        //should return all Wxrd Tags, in the format of
        // {
        //     alias: "value",
        //     wxrdUuid: "uuid goes here",
        //     userUuid: "uuid for Wxrd owner goes here",
        //     lastTaggedAt: "timestamp", // by owner user
        //     lastUntaggedAt: "timestamp" // by owner user            
        // }
        //
        // NB: each Wxrd belongs to a user, and that user 
        //     owns that Wxrd definition, Wxrds can be copied
        //     from other users, but a new Wxrd will be generated 
        //     for each user, copying the references of the previous
        //
        // can be a shallow list, the uuid will allow lookup 
        // in a WxrdBook, just need a single display alias 
        // and a uuid
    });


    it("should return a filtered list of Wxrd Tags for a given type", function(){

        //TODO fill in test
        // should be able to get all tags by type prefix
        // eg. getWxrdTags("author") should return
        // things like "author: Kenneth Grant" and "author: Crowley"
    });
});
