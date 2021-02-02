var expect      = require("chai").expect;
var magickalRecord = require("../app/magickal-record");

describe("Magickal Record", function() {

    describe("Record Entries", function() {

        it("should have an entry UUID", function(){

            expect(true).to.equal(false);
        });

        it("should return a list of parent records", function(){

            expect(true).to.equal(false);
        });

        it("should have a source UUID", function(){
            // The source of this entry (a secondary source 
            // if it’s copied from somewhere, otherwise the
            // current user, if signed into the Magickal record)
            expect(true).to.equal(false);
        });

        it("should have an entry title", function(){

            expect(true).to.equal(false);
        });

        it("should have an entry body", function(){

            expect(true).to.equal(false);
        });

        it("should return an entered-on timestamp", function(){

            //make this a tag
            expect(true).to.equal(false);
        });

        it("should return a list of Wxrd Tags", function(){

            expect(true).to.equal(false);
        });

    });

    describe("Wxrds", function() {

        it("should have a Wxrd UUID", function(){

            expect(true).to.equal(false);
        });

        it("should return an ordered list of aliases", function(){

            expect(true).to.equal(false);
        });

        it("should return a metadata set", function(){

            expect(true).to.equal(false);
        });
    });

    describe("Source Identities", function() {

        it("should have a name for the Source Identity", function(){

            expect(true).to.equal(false);
        });

        it("should have a source UUID", function(){

            // uuid to use when using this identity as a primary 
            // source (ie, all entries that are original ideas from
            // this source identity)
            expect(true).to.equal(false);
        });
        
        it("should have an optionally associated email", function(){

            expect(true).to.equal(false);
        });
        
        it("should have an optionally associated identity hash as a signature verification", function(){

            //combine email, identity name, a salt, and a passcode to generate hash
            expect(true).to.equal(false);
        });
        
    });

    describe("Operations", function() {

        it("should return a list of expected parameters, both optional and required", function() {

            expect(true).to.equal(false);
        });

        it("should return an operation result", function() {

            expect(true).to.equal(false);
        });

        it("should have a success status in operation result", function() {

            expect(true).to.equal(false);
        });

        it("should provide messages with the operation result", function() {

            expect(true).to.equal(false);
        });

    });

    describe("Record Browser", function() {
        
        it("should include basic meta operations in the operations list", function(){
            throw new Error("Test Not Yet Implemented");
        }); 

        it("should be in test mode", function(){
        
            var testMode = magickalRecord.isInTestingMode();
        
            expect(testMode).to.equal(true);
        
        });

        it("should list starting record entries as zero", function(){

            expect(magickalRecord.recordEntriesCount()).to.equal(0);
        });

        it("should return uuid when creating new entry", function(){

            var newUuid = magickalRecord.createEntry("this is an entry");
            var isValid = false; //replace with regular expression validation check
            expect(isValid).to.equal(true);
        });

        it("should return previously created entry when passed generated uuid", function(){

            var testEntry = undefined;
            var newUuid = magickalRecord.createEntry(testEntry.content);

            expect(testEntry).to.equal(magickalRecord.getEntryByUuid(newUuid));
        });

        it("should get sources list", function() {

            //Include in "Rogue Scholar" flippable feature (though still part of 0.3.0, just something that can be turned on or off, for users not planning on using any external sources, ie, just using it as a personal log)
            expect(true).to.equal(false);
        });

        it("should list flippable features", function() {

            expect(true).to.equal(false);
        });
        
        it("should toggle flippable features by supplying feature name", function() {

            expect(true).to.equal(false);
        });
        
        it("should report if flippable feature is active", function() {

            expect(true).to.equal(false);
        });
        
        it("should list all Wxrds", function() {

            expect(true).to.equal(false);
        });
        
        it("should get all entries for a given time span", function() {

            expect(true).to.equal(false);
        });
        
        it("should get all entries having a given set of Wxrd tags", function() {

            expect(true).to.equal(false);
        });
        
        it("should get all child entries of a given entry", function() {

            expect(true).to.equal(false);
        });
                
    });

});