var expect = require("chai").expect;
const EntryLog = require("../app/entry-log");

describe("Entry Log", function() {
    
    const myEntryLog = new EntryLog();
    var testEntry;
    
    beforeEach(function(){
        myEntryLog.clearAllEntries();
        testEntry = myEntryLog.createEntry("A test entry");
    });



    it("should return the created entry when creating new entry", function(){

        var contentToCreate = "this is a new entry";
        var newEntry = myEntryLog.createEntry(contentToCreate);
        
        expect(newEntry.getBody()).to.equal(contentToCreate);
    });

    it("should return previously created entry when passed generated uuid", function(){

        var newlyCreatedEntry = myEntryLog.createEntry(testEntry.getBody());
        var retrievedEntry = myEntryLog.getEntryByUuid(newlyCreatedEntry.getUuid());
        expect(testEntry.getBody()).to.equal(retrievedEntry.getBody());
    });

    

});
