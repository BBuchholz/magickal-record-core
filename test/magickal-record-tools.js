var expect = require("chai").expect;
const magickalRecordTools = require("../app/magickal-record-tools");

describe("Tools", function() {
    
    var tools;

    beforeEach(function(){

        tools = new magickalRecordTools();
    });

    it("should have a way to generate UUID", function(){

        expect(tools).to.have.property("generateUuid");
    });

    it("should have a created at timestamp", function(){

        expect(tools).to.have.property("generateTimestamp");
    
        //SOURCES FOR REGEX:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        // https://www.regextester.com/97766 
        
        const timestamp = tools.generateTimestamp();

        let regexForIso8601DateString = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/;

        expect(regexForIso8601DateString.test(timestamp)).to.equal(true);
        
    });

});
