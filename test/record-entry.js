const expect = require("chai").expect;
const RecordEntry = require("../app/record-entry");

describe("Record Entries", function() {

    var testEntry;

    beforeEach(function(){
        testEntry = new RecordEntry("A test Entry");
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

});