var expect      = require("chai").expect;
var magickalRecord = require("../app/magickal-record");

describe("Magickal Record", function() {
 
    const myMagickalRecord = new magickalRecord();
    var testEntry;
    var testWxrd;

    beforeEach(function(){
        //myMagickalRecord.clearAllEntries();
        //testEntry = myMagickalRecord.createEntry("A test entry");
        //testWxrd = myMagickalRecord.tagEntry(testEntry.uuid, "A Test Tag");
    });


    describe("Record Entries", function() {

/////////MOVED TO entry-log.js////////////////
    //     it("should have an entry UUID", function(){

    //         expect(testEntry).to.have.property("uuid");
            
    //     });

    //     it("should return a list of parent records", function(){

    //         expect(testEntry).to.have.property("parentRecords");
            
    //     });

    //     it("should have a source UUID", function(){
    //         // The source of this entry (a secondary source 
    //         // if it’s copied from somewhere, otherwise the
    //         // current user, if signed into the Magickal record)
            
    //         expect(testEntry).to.have.property("sourceUuid");
    //     });

    //     it("should have an entry title", function(){

    //         expect(testEntry).to.have.property("title");
    //     });

    //     it("should have an entry body", function(){

    //         expect(testEntry).to.have.property("body");
    //     });

    //     it("should return an entered-on timestamp", function(){

    //         expect(testEntry).to.have.property("enteredAt");

    //     });

    //     it("should return a list of Wxrd Tags", function(){

    //         expect(testEntry).to.have.property("wxrdTags");
    //     });

    });

    describe("Wxrds", function() {

        it("should have a Wxrd UUID", function(){

            //TODO fill in test
            
        });

        it("should return an ordered list of aliases", function(){

            //TODO fill in test
            
        });

        it("should return a metadata set", function(){

            //TODO fill in test
            
        });
    });

    describe("Source Identities", function() {

        it("should have a name for the Source Identity", function(){

            
            //TODO fill in test
        });

        it("should have a source UUID", function(){

            // uuid to use when using this identity as a primary 
            // source (ie, all entries that are original ideas from
            // this source identity)
            
            //TODO fill in test
        });
        
        it("should have an optionally associated email", function(){

            
            //TODO fill in test
        });
        
        it("should have an optionally associated identity hash as a signature verification", function(){

            //combine email, identity name, a salt, and a passcode to generate hash
            
            //TODO fill in test
        });
        
    });

    describe("Operations", function() {

        it("should return a list of expected parameters, both optional and required", function() {

            //TODO fill in test
            
        });

        it("should return an operation result", function() {

            //TODO fill in test
            
        });

        it("should have a success status in operation result", function() {

            //TODO fill in test
            
        });

        it("should provide messages with the operation result", function() {

            //TODO fill in test
            
        });

    });

    describe("Record Browser", function() {
        
        
        it("should include basic meta operations in the operations list", function(){
            
            //TODO fill in test
        }); 

        it("should be in test mode", function(){
        
            var testMode = myMagickalRecord.isInTestingMode();
        
            expect(testMode).to.equal(true);
        
        });



        it("should return the created tag when tagging an entry", function(){
            
            //TODO implement 
        });

        it("should return the tag when passed a uuid for the tag", function(){
    
            //TODO implement 
        });

        it("should get sources list", function() {

            //Include in "Rogue Scholar" flippable feature (though still part of 0.3.0, just something that can be turned on or off, for users not planning on using any external sources, ie, just using it as a personal log)
            
            //TODO fill in test
        });

        it("should list flippable features", function() {

            //TODO fill in test
        });
        
        it("should toggle flippable features by supplying feature name", function() {

            
            //TODO fill in test
        });
        
        it("should report if flippable feature is active", function() {

            //TODO fill in test
            
        });
        
        it("should list all Wxrds", function() {

            //TODO fill in test
            
        });
        
        it("should get all entries for a given time span", function() {

            //TODO fill in test
            
        });
        
        it("should get all entries having a given set of Wxrd tags", function() {

            //TODO fill in test
            
        });
        
        it("should get all child entries of a given entry", function() {

            //TODO fill in test
            
        });
                
    });

});