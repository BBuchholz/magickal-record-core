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
   

    });

    describe("Wxrds", function() {
///////////////MOVED TO wxrd-book.js///////////////////////
    });

    describe("Source Identities", function() {

////MOVED TO address-book.js///////
        
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