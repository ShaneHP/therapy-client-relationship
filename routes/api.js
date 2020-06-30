const express = require('express');
const router = express.Router();

//import all the collection models
const Client = require('../models/clients');
const Therapist = require('../models/therapists');
const Session = require('../models/sessions');

//get request to render the page
router.get('/', function(req, res){
    Therapist.find().then(function(therapists){
        Client.find().then(function(clients){
            Session.find().then(function(sessions){
                res.render('code-exam-view', {
                    clients: clients,
                    therapists: therapists,
                    sessions: sessions
                });
            });
        });
    });
});

//searching therapist information by first name
router.get('/therapists/:s', function(req, res, next){
    var search = req.params.s;
    Therapist.find({fname: new RegExp(search, "ig")}).then(function(therapists){
        Client.find().then(function(clients){
            Session.find().then(function(sessions){
                res.render('code-exam-view', {
                    clients: clients,
                    therapists: therapists,
                    sessions: sessions
                });
            });
        });
    });
});

//searching clients information by first name
router.get('/clients/:s', function(req, res, next){
    var search = req.params.s;
    Client.find({fname: new RegExp(search, "ig")}).then(function(clients){
        Therapist.find().then(function(therapists){
            Session.find().then(function(sessions){
                res.render('code-exam-view', {
                    clients: clients,
                    therapists: therapists,
                    sessions: sessions
                });
            });
        });
    });
});

//searching clients information by first name
router.get('/sessions/:s', function(req, res, next){
    var search = req.params.s;
    Session.find({sessionDate: new RegExp(search, "ig")}).then(function(sessions){
        Therapist.find().then(function(therapists){
            Client.find().then(function(clients){
                res.render('code-exam-view', {
                    clients: clients,
                    therapists: therapists,
                    sessions: sessions
                });
            });
        });
    });
});

//therapist get request
router.get('/therapists/all', function(req, res){
    Therapist.find({}).then(function(therapists){
        res.send(therapists);
    });
});

//client get request
router.get('/clients/all', function(req, res){
    Client.find({}).then(function(clients){
        res.send(clients);
    });
});

//session get request
router.get('/sessions/all', function(req, res){
    Session.find({}).then(function(sessions){
        res.send(sessions);
    });
});

//therapist post request
router.post('/therapists', function(req, res, next){
    Therapist.create(req.body).then(function(therapist){
        res.send(therapist);
    }).catch(next);
});

//client post request
router.post('/clients', function(req, res, next){
    Client.create(req.body).then(function(client){
        res.send(client);
    }).catch(next);
});

//session post request
router.post('/sessions', function(req, res, next){
    Session.create(req.body).then(function(session){
        res.send(session);
    }).catch(next);
});

//therapist put request
router.put('/therapists/:id', function(req, res, next){
    Therapist.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Therapist.findOne({_id: req.params.id}).then(function(therapist){
            res.send(therapist);
        });
    }).catch(next);
});

//client put request
router.put('/clients/:id', function(req, res, next){
    Client.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Client.findOne({_id: req.params.id}).then(function(client){
            res.send(client);
        });
    }).catch(next);
});

//session put request
router.put('/sessions/:id', function(req, res, next){
    Session.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Session.findOne({_id: req.params.id}).then(function(session){
            res.send(session);
        });
    }).catch(next);
});

//therapist delete request
router.delete('/therapists/:id', function(req, res, next){
    Therapist.findByIdAndRemove({_id: req.params.id}).then(function(therapist){
        res.send(therapist);
    }).catch(next);
});

//client delete request
router.delete('/clients/:id', function(req, res, next){
    Client.findByIdAndRemove({_id: req.params.id}).then(function(client){
        res.send(client);
    }).catch(next);
});

//session delete request
router.delete('/sessions/:id', function(req, res, next){
    Session.findByIdAndRemove({_id: req.params.id}).then(function(session){
        res.send(session);
    }).catch(next);
});

module.exports = router;

/*I have 3 collections in total, one for clients, one for therapists and one for therapy sessions. There was a lot of advantages to
using the embedded approach for parts of the assignment (eg. all of the different options for marital status, contact permissions could be fitted into one document etc) 
which is why I chose to use a mongodb database. In my database I implemented an imbedded approach for addresses, 
the client and therapist addresses are embedded in their personal documents.*/ 