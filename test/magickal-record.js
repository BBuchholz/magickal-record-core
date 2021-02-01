var expect      = require("chai").expect;
var magickalRecord = require("../app/magickal-record");

describe("Magickal Record", function() {

    describe("Test Mode", function() {

        it("should be in test mode", function(){
        
            var testMode = magickalRecord.isInTestingMode();
        
            expect(testMode).to.equal(true);
        
        });
    });

});