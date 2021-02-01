var expect      = require("chai").expect;
var magickalRecord = require("../app/magickal-record");

describe("Magickal Record", function() {

    describe("Test Mode", function() {

        it("should be in test mode", function(){
        
            var testMode = magickalRecord.isInTestingMode();
        
            expect(testMode).to.equal(true);
        
        });
    });

    describe("Record Entries", function() {

        it("should list starting record entries as zero", function(){

            expect(magickalRecord.recordEntriesCount()).to.equal(0);
        });
    });

    describe("Operations", function() {

        it("should include basic meta operations in the operations list", function(){
            throw new Error("Test Not Yet Implemented");
        });
    });
});