var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();


// Creates a JSON client
var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});


// autenticacion
//client.basicAuth('$login', '$password');


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  client.get('/users', function(err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });
  
});

/* GET user for id listing. */
router.get('/:id', function(req, res, next) {
  
  client.get(`/users/${req.params.id}`, function(err, request, response, obj) {
    assert.ifError(err);
  
    res.json(obj);
  });
  
});

/* PUT user. */
router.put('/', function(req, res, next) {
  
  client.put(`/users`, req.body, function(err, request, response, obj) { // mandar los datos req.body
    assert.ifError(err);
  
    res.json(obj);
  });
  
});

/* DELETE user. */
router.delete('/:id', function(req, res, next) {
  
  client.del(`/users/${req.params.id}`, function(err, request, response, obj) { // mandar los datos req.body
    assert.ifError(err);
  
    res.json(obj);
  });
  
});

/* POST user. */
router.post('/', function(req, res, next) {
  
  client.post(`/users`, req.body, function(err, request, response, obj) { // mandar los datos req.body
    assert.ifError(err);
  
    res.json(obj);
  });
  
});


module.exports = router;
