const  assert = require('assert');
const request = require('request')
var expect  = require('chai').expect;


const URL = "https://nodeapi.pyther.com/customer";

describe('Test Customer Endpoint', async function () {
    it('Returns array', function(done) {
        request(URL , function(error, response, body) {
            expect(JSON.parse(body)).to.be.an('array');
            done();
        });
    });
    it('Status code', function(done) {
        request(URL , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('Returns array with length > 0', function(done) {
        request(URL , function(error, response, body) {
            expect(JSON.parse(body)).to.be.an('array');
            assert(JSON.parse(body).length > 0);
            done();
        });
    });
});

describe('Test Test Endpoint', async function () {
    it('Returns array', function(done) {
        request("https://nodeapi.pyther.com/test" , function(error, response) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});




// it('Main page content', function(done) {
//     request('http://localhost:8080' , function(error, response, body) {
//         expect(body).to.equal('Hello World');
//         done();
//     });
// });

// it('Main page status', function(done) {
//     request('http://localhost:8080' , function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//     });
// });

// it('About page content', function(done) {
//     request('http://localhost:8080/about' , function(error, response, body) {
//         expect(response.statusCode).to.equal(404);
//         done();
//     });
// });

