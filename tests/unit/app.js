"use strict";

describe("angular-seed", function (){

    var $location, $rootScope;

    beforeEach(function(){
        module("angular-seed");
    });

    beforeEach(inject(function ( _$location_, _$rootScope_) {
        $location = _$location_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(inject(function ($httpBackend) {
        $httpBackend.whenGET(/.*/).respond(200);
    }));

    it("should be true", function() {
        expect(true).toBe(true);
    })

});
