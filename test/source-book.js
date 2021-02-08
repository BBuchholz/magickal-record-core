var expect      = require("chai").expect;
var sourceBook = require("../app/source-book");


describe("Sources and Identities", function() {

    const mySourceBook = new sourceBook();
    var testSourceIdentity;

    beforeEach(function(){
        
        testSourceIdentity = mySourceBook.getSourceByAlias("test");
    });


    it("should have a name for the Source Identity", function(){

        expect(testSourceIdentity).to.have.property("alias");
    });

    it("should have a UUID", function(){

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
