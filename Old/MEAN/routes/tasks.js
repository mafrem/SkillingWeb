var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://brad:aze123@ds143262.mlab.com:43262/mytasklist', ['tasks']);

//Get all tasks
router.get('/tasks', function(req, res, next){
    //res.send('TASK API');
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

//Get one task
router.get('/task/:id', function(req, res, next){
    //res.send('TASK API');
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

//Save Task
router.post('/task/:id', function(req, res, next){
    //res.send('TASK API');
    var task = req.body;
    if(!task.title || (task.isDone + '')){
        res.status(400);
        res.json({
            "error":"Bad data"
        });
    }else{
        db.tasks.save(task, function(err, tasks){
            if(err){
                res.send(err);
            }
            res.json(tasks);
        });
    }
});

//Delete one task
router.delete('/task/:id', function(req, res, next){
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

//Udpate one task
router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask ={};

    if(task.isDone){
        updTask.isDone = task.isDone;
    }
    if(task.title){
        updTask.title = task.title;
    }
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad data"
        });
    }else{
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask,{}, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }

});

module.exports = router;