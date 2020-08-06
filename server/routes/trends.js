'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { Trends } = require('../models/Trends');
const { User } = require('../models/User');
const express = require('express');
const router = express.Router();
const log = console.log;

// Get data routes
router.get('/weight', (req, res) => {
  const id = req.session.user_id;
  User.findOne({_id: id}).then((data) => {
    let weightArr = data.trends.weight;
    if (weightArr.length > 7) {
      weightArr = weightArr.slice(weightArr.length - 8, weightArr.length - 1);
    }
    let values = [];
    weightArr.forEach(e => {
        values.push(e.value);
    })
    res.send({weight: values});
  }).catch((e) => {
    res.status(404).send('Cannot get weight trend');
  });
});

router.get('/sleep', (req, res) => {
  const id = req.session.user_id;
  User.findOne({_id: id}).then((data) => {
    let sleepArr = data.trends.sleep;
    if (sleepArr.length > 7) {
      sleepArr = sleepArr.slice(sleepArr.length - 8, sleepArr.length - 1);
    }
    let values = [];
    sleepArr.forEach(e => {
        values.push(e.value);
    })
    res.send({sleep: values});
  }).catch((e) => {
    res.status(404).send('Cannot get sleep trend');
  });
});

router.get('/calories', (req, res) => {
  const id = req.session.user_id;
  User.findOne({_id: id}).then((data) => {
    let caloriesArr = data.trends.calories;
    if (caloriesArr.length > 7) {
      caloriesArr = caloriesArr.slice(caloriesArr.length - 8, caloriesArr.length - 1);
    }
    let values = [];
    caloriesArr.forEach(e => {
        values.push(e.value);
    })
    res.send({calories: values});
  }).catch((e) => {
    res.status(404).send('Cannot get calories trend');
  });
});

router.get('/stress', (req, res) => {
  const id = req.session.user_id;
  User.findOne({_id: id}).then((data) => {
    let stressArr = data.trends.stress;
    if (stressArr.length > 7) {
      stressArr = stressArr.slice(stressArr.length - 8, stressArr.length - 1);
    }
    let values = [];
    stressArr.forEach(e => {
        values.push(e.value);
    })
    res.send({stress: values});
  }).catch((e) => {
    res.status(404).send('Cannot get stress trend');
  });
});

router.get('/getAll', (req, res) => {
  let weight = [];
  let stress = [];
  let sleep = [];
  let calories = [];
  User.find({type: "user"}).then((data) => {
    data.forEach(user => {
      weight.push(user.trends.weight);
      stress.push(user.trends.stress);
      sleep.push(user.trends.sleep);
      calories.push(user.trends.calories);
    })
  }).then((d) => {
      res.send({weight: weight, stress: stress, sleep: sleep, calories: calories});
  }).catch((e) => {
    res.status(404).send('Cannot find all user data for trends');
  });
});

// Adding user data to trends
router.post('/updateWeight', (req, res) => {
  const data = {date: req.body.date, value: req.body.value};
  const id = req.session.user_id;

  User.findOneAndUpdate({_id: id}, {"$push": { "trends.weight" : data}},{new: true}).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      log(user.trends.weight);
      res.send({"updated": user.trends.weight});
    }
  }).catch((e) => {
    res.status(404).send('Cannot add weight data to trends');
  });
});

router.post('/updateSleep', (req, res) => {
  const data = {date: req.body.date, value: req.body.value};
  const id = req.session.user_id;

  User.findOneAndUpdate({_id: id}, {"$push": { "trends.sleep" : data}},{new: true}).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      res.send({"updated": user.trends.sleep});
    }
  }).catch((e) => {
    res.status(404).send('Cannot add sleep data to trends');
  });
});
router.post('/updateStress', (req, res) => {
  const data = {date: req.body.date, value: req.body.value};
  const id = req.session.user_id;

  User.findOneAndUpdate({_id: id}, {"$push": { "trends.stress" : data}},{new: true}).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      res.send({"updated": user.trends.stress});
    }
  }).catch((e) => {
    res.status(404).send('Cannot add stress data to trends');
  });
});
router.post('/updateCalories', (req, res) => {
  const data = {date: req.body.date, value: req.body.value};
  const id = req.session.user_id;

  User.findOneAndUpdate({_id: id}, {"$push": { "trends.calories" : data}},{new: true}).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      res.send({"updated": user.trends.calories});
    }
  }).catch((e) => {
    res.status(404).send('Cannot add calories data to trends');
  });
});

module.exports = router;