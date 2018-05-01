'use strict';

const expect = require("chai").expect;
const assert = require("chai").assert;

const os = require('os');

const system = require('../../../libs/system');

describe("#System Library Test", () => {

    it("#Get S.O. Information", () => {
        const infos = system.infos();
        expect(infos).to.be.a('object');
        expect(infos).to.be.a('object').and.haveOwnProperty('hostname');
        expect(infos).to.be.a('object').and.haveOwnProperty('os');
        expect(infos).to.be.a('object').and.haveOwnProperty('resources');
        expect(infos.hostname).to.be.equal(os.hostname());
    });

});