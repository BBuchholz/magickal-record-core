var expect = require("chai").expect;
var entryLog = require("../app/entry-log");

describe("Record Entries", function() {
    
    const myEntryLog = new entryLog();
    var testEntry;
    
    beforeEach(function(){
        myEntryLog.clearAllEntries();
        testEntry = myEntryLog.createEntry("A test entry");
    });


    it("should have a way to generate a standardized timestamp for all entries", function(){

        //TODO should be in the format of "yyyy-mm-dd_hh-mm-ss" (test with regex)
        const timestamp = myEntryLog.generateTimestamp();


    });

    it("should return the created entry when creating new entry", function(){

        var contentToCreate = "this is a new entry";
        var newEntry = myEntryLog.createEntry(contentToCreate);
        
        expect(newEntry.body).to.equal(contentToCreate);
    });

    it("should return previously created entry when passed generated uuid", function(){

        var newlyCreatedEntry = myEntryLog.createEntry(testEntry.content);
        var retrievedEntry = myEntryLog.getEntryByUuid(newlyCreatedEntry.uuid);
        expect(testEntry.content).to.equal(retrievedEntry.content);
    });

    it("should have an entry UUID", function(){

        expect(testEntry).to.have.property("uuid");
        
    });

    it("should return a list of parent records", function(){

        expect(testEntry).to.have.property("parentRecords");
        
    });

    it("should have a source UUID", function(){
        // The source of this entry (a secondary source 
        // if it’s copied from somewhere, otherwise the
        // current user, if signed into the Magickal record)
        
        expect(testEntry).to.have.property("sourceUuid");
    });

    it("should have an entry title", function(){

        expect(testEntry).to.have.property("title");
    });

    it("should have an entry body", function(){

        expect(testEntry).to.have.property("body");
    });

    it("should return an entered-on timestamp", function(){

        expect(testEntry).to.have.property("enteredAt");

    });

    it("should return a list of Wxrd Tags", function(){

        expect(testEntry).to.have.property("wxrdTags");
    });

});
