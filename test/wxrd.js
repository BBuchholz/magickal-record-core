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

});
