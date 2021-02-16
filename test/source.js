var expect = require("chai").expect;
const Source = require("../app/source");

describe("Sources", function() {
    
    var testSource;
    
    beforeEach(function(){

        testSource = new Source("defaultAlias");
    });

    it("should have a UUID", function(){

        expect(testSource).to.have.property("uuid");
    });
    
    it("should have an optionally associated email if source type is user identity", function(){

        
        //TODO fill in test
    });

    it("should have a created at timestamp", function(){

        expect(testSource).to.have.property("createdAt");
    });

    it("should have a alias for the Source Identity", function(){

        var aliasValue = testSource.getDefaultAliasValue();
        expect(aliasValue).to.equal("defaultAlias");
    });

    it("should have an optionally associated identity hash as a signature verification", function(){

        //combine email, identity name, a salt, and a passcode to generate hash
        
        //TODO fill in test
    });

});
