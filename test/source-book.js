var expect      = require("chai").expect;
var SourceBook = require("../app/source-book");


describe("Source Book", function() {

    const mySourceBook = new SourceBook();
    var testSource;

    beforeEach(function(){
        
        testSource = mySourceBook.getWxrdsByAlias("test source")[0];
    });
    
    it("should have a list of source types", function(){

        //TODO fill in test
    });
    
});
