var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});


//
////var initials = "oni";
///*      HER ER ALLE TEACHER SIDERNE       */
//
//
//
///* TEMPLATE */
//router.get('/template', function (req, res) {
//    var db = req.db;
//    var collection = db.get('letter');
//
//    //lige nu henter den alle documenter med disse initialer, selvom den kun skal vise 1 (den første)
//    //senere skal der tilføjes en hovedside hvor brugeren kan vælge hvilken test, på baggrund af sine initialer 
//    collection.find({
//        'initials': initials
//    }, {}, function (e, docs) {
//        var docLenght = docs.length;
//        res.render('template', {
//            "testlist": docs[docLenght - 1],
//            title: 'TEMPLATE'
//        });
//    });
//});
//
//
///* ALLE FUNKTIONER DER ER TILKNYTTET MAIN */
//
////henter hjemmesiden 'main' 
router.get('/index', function(req, res) {
    res.render('index', {
        title: 'Main'
    });
});

var video_pages = [
    'locations/1/360video',
    'locations/2/360video',
    'locations/3/360video',
    'locations/4/360video'
];

router.get('/locations/1/360video', function(req, res) {
    res.render(video_pages[0], {
        title: 'Danmark'
    });
});

router.get('/locations/2/360video', function(req, res) {
    res.render(video_pages[1], {
        title: 'Grønland'
    });
});

router.get('/locations/3/360video', function(req, res) {
    res.render(video_pages[2], {
        title: 'Amazonas'
    });
});

router.get('/locations/4/360video', function(req, res) {
    res.render(video_pages[3], {
        title: 'Kina'
    });
});

router.post('/render_video', function(req, res) {
    var id = req.body.nextpage;
    var nextpage = video_pages[id];
    res.redirect(nextpage);
});

router.get('/animation', function(req, res) {
    res.render('animation', {
        title: 'Isen smelter'
    });
});
router.get('/1', function (req, res) {
	res.render('textpage', {
		title: 'Main'
	});
});
router.get('/2', function (req, res) {
	res.render('picturepage', {
		title: 'Main'
	});
});
router.get('/3', function (req, res) {
	res.render('taskpage', {
		title: 'Main'
	});
});
//
//
//router.post('/index_addinfo', function (req, res) {
//    // Set our internal DB variable
//    var db = req.db;
//    // the array MUST be emptied so that no duplicates are psuhed in
//    testModules = [];
//    // Get our form values. These rely on the "name" attributes
//    var data = req.body;
//    // get the teachers initials and remove them from the data{}
//    initials = data.initials;
//    delete data.initials;
//    // each selected .test_options represents a selected module 
//
//    for (module in data) {
//        testModules.push(module);
//    }
//    console.log('the teacher: ' + initials + ' has chosen the ' + testModules.length + ' following modules: ' + testModules);
//    testModules.push('startpage');
//
//
//    // Set our collection
//    var collection = db.get('owners');
//
//    // Submit to the DB
//    collection.insert({
//        "initials": initials
//    }, function (err, doc) {
//        if (err) {
//            // If it failed, return error
//            res.send("There was a problem adding the information to the database.");
//        } else {
//            // And forward to success page
//            res.redirect(testModules[0]);
//            testModules.shift();
//            console.log('next module should be ' + testModules[0]);
//        }
//    });
//});
//
//
//
///* ALLE FUNKTIONER DER ER TILKNYTTET WORDDICTATE */
//
////henter hjemmesiden 'worddictate_teacher' 
//router.get('/worddictate_teacher', function (req, res) {
//    res.render('worddictate_teacher', {
//        title: 'Orddiktat'
//    });
//});
//
//
//router.post('/worddictate_addinfo', function (req, res) {
//    // Set our internal DB variable
//    var db = req.db;
//    // Get our form values. These rely on the "name" attributes 
//    var lines = req.body.lines;
//    var files = req.body.files;
//
//    // Set our collection
//    var collection = db.get('worddictate');
//    // Submit to the DB
//    collection.insert({
//        "initials": initials,
//        "lines": lines,
//        "files": files
//    }, function (err, doc) {
//        if (err) {
//            // If it failed, return error
//            res.send("There was a problem adding the information to the database.");
//        } else {
//            // And forward to success page
//            res.redirect(testModules[0]);
//            testModules.shift();
//            console.log('next module should be ' + testModules[0]);
//        }
//    });
//});
//
//
//
///* ALLE FUNKTIONER DER ER TILKNYTTET NONSENSE*/
//
//router.get('/nonsense_teacher', function (req, res) {
//    res.render('nonsense_teacher', {
//        title: 'Vrøvleord'
//    });
//});
//
//
//router.post('/nonsense_addinfo', function (req, res) {
//    var db = req.db;
//
//    var files = req.body.files;
//
//    var collection = db.get('nonsense');
//    collection.insert({
//        "initials": initials,
//        "files": files
//    }, function (err, doc) {
//        if (err) {
//            res.send("There was a problem adding the information to the database.");
//        } else {
//            res.redirect(testModules[0]);
//            testModules.shift();
//            console.log('next module should be ' + testModules[0]);
//        }
//    });
//});
//
//
//
//
///* ALLE FUNKTIONER DER ER TILKNYTTET CLOZETEST*/
//
//router.get('/clozetest_teacher', function (req, res) {
//    res.render('clozetest_teacher', {
//        title: 'Clozetest'
//    });
//});
//
//
//router.post('/clozetest_addinfo', function (req, res) {
//    // Set our internal DB variable
//    var db = req.db;
//    // Get our form values. These rely on the "name" attributes 
//    var lines = req.body.lines;
//    var files = req.body.files;
//
//    // Set our collection
//    var collection = db.get('clozetest');
//    // Submit to the DB
//    collection.insert({
//        "initials": initials,
//        "lines": lines,
//        "files": files
//    }, function (err, doc) {
//        if (err) {
//            // If it failed, return error
//            res.send("There was a problem adding the information to the database.");
//        } else {
//            // And forward to success page
//            res.redirect(testModules[0]);
//            testModules.shift();
//            console.log('next module should be ' + testModules[0]);
//
//        }
//    });
//});
//
//
///* ALLE FUNKTIONER DER ER TILKNYTTET INTERPRET*/
//
//router.get('/interpret_teacher', function (req, res) {
//    res.render('interpret_teacher', {
//        title: 'Tekstforståelse'
//    });
//});
//
//
//router.post('/interpret_addinfo', function (req, res) {
//    // Set our internal DB variable
//    var db = req.db;
//    // Get our form values. These rely on the "name" attributes 
//    var texts = req.body.texts;
//    var files = req.body.files;
//
//    var questions = req.body.questions;
//    var choices = req.body.choices;
//    var labels = req.body.labels;
//
//    // Set our collection
//    var collection = db.get('interpret');
//
//    // Submit to the DB
//    collection.insert({
//        "initials": initials,
//        "texts": texts,
//        "files": files,
//        "questions": questions,
//        "choices": choices,
//        "labels": labels
//    }, function (err, doc) {
//        if (err) {
//            // If it failed, return error
//            res.send("There was a problem adding the information to the database.");
//        } else {
//            // And forward to success page
//            res.redirect(testModules[0]);
//        }
//    });
//});
//
//
//
//
///* ALLE FUNKTIONER DER ER TILKNYTTET LETTER*/
//
//router.get('/letter_teacher', function (req, res) {
//    res.render('letter_teacher', {
//        title: 'Brev'
//    });
//});
//
//
//router.post('/letter_addinfo', function (req, res) {
//    var db = req.db;
//
//    var files = req.body.files;
//
//    var collection = db.get('letter');
//    collection.insert({
//        "initials": initials,
//        "files": files
//    }, function (err, doc) {
//        if (err) {
//            res.send("There was a problem adding the information to the database.");
//        } else {
//            res.redirect(testModules[0]);
//            testModules.shift();
//            console.log('next module should be ' + testModules[0]);
//        }
//    });
//});
//
//
//
///* NEXTPAGE ER EN DUMMY DER SENDER DIG VIDERE TIL KURSISTSIDEN*/
//
//router.get('/nextpage', function (req, res) {
//    res.render('nextpage', {
//        title: 'Nextpage'
//    });
//});
//
//
//router.post('/nextpage', function (req, res) {
//    res.redirect("startpage");
//});
//
//
//
//
//
//
//
//
//
///*      HER ER ALLE PARTICIPANT SIDERNE     */
//
//
///* ALLE FUNKTIONER DER ER TILKNYTTET STARTPAGE */
//
////henter hjemmesiden 'startpage' 
//router.get('/startpage', function (req, res) {
//    res.render('startpage', {
//        title: 'Startside'
//    });
//});
//
//
//router.post('/startpage_addinfo', function (req, res) {
//    var db = req.db;
//
//    var date = req.body.date_input;
//    var firstname = req.body.firstname;
//    var lastname = req.body.lastname;
//    var dys = req.body.dys_select;
//    var fam = req.body.fam_select;
//    var tong = req.body.tong_input;
//    var home = req.body.home_input;
//
//    var collection = db.get('startpage');
//
//    collection.insert({
//
//        "date": date,
//        "firstname": firstname,
//        "lastname": lastname,
//        "is_dyslexic": dys,
//        "is_familyDyslexic": fam,
//        "mother_tongue": tong,
//        "lang_at_home": home
//
//    }, function (err, doc) {
//        if (err) {
//            res.send("There was a problem adding the information to the database.");
//        } else {
//            res.redirect("worddictate_participant");
//        }
//    });
//});
//
//
//
///* ALLE FUNKTIONER DER ER TILKNYTTET WORDDICTATE */
//
////henter 'worddictate_participant' og finder data i databasen, svarende til de indtastede initialer
//router.get('/worddictate_participant', function (req, res) {
//    var db = req.db;
//    var collection = db.get('worddictate');
//
//    //lige nu henter den alle documenter med disse initialer, selvom den kun skal vise 1 (den første)
//    //senere skal der tilføjes en hovedside hvor brugeren kan vælge hvilken test, på baggrund af sine initialer 
//    collection.find({
//        'initials': initials
//    }, {}, function (e, docs) {
//        var docLenght = docs.length;
//        res.render('worddictate_participant', {
//            "testlist": docs[docLenght - 1],
//            title: 'worddictate_participant'
//        });
//    });
//});
//
//
//router.post('/worddictate_addanswer', function (req, res) {
//    var db = req.db;
//
//    var userinput = req.body.userinput;
//    var timestamp = req.body.timestamp;
//
//    var collection = db.get('worddictate_answer');
//
//    collection.insert({
//        "participant_answer": userinput,
//        "timestamp": timestamp
//    }, function (err, doc) {
//        if (err) {
//            res.send("There was a problem adding the information to the database.");
//        } else {
//            res.redirect("nonsense_participant");
//        }
//    });
//});
//
//
//
///* ALLE FUNKTIONER DER ER TILKNYTTET NONSENSE */
//
////henter 'output' og finder data i databasen, svarende til de indtastede initialer
//router.get('/nonsense_participant', function (req, res) {
//    var db = req.db;
//    var collection = db.get('nonsense');
//
//    //lige nu henter den alle documenter med disse initialer, selvom den kun skal vise 1 (den første)
//    //senere skal der tilføjes en hovedside hvor brugeren kan vælge hvilken test, på baggrund af sine initialer 
//    collection.find({
//        'initials': initials
//    }, {}, function (e, docs) {
//        var docLenght = docs.length;
//        res.render('nonsense_participant', {
//            "testlist": docs[docLenght - 1],
//            title: 'nonsense_participant'
//        });
//    });
//});
//
//
//router.post('/nonsense_addanswer', function (req, res) {
//    var db = req.db;
//
//    var userinput = req.body.userinput;
//
//    var collection = db.get('nonsense_answer');
//
//    collection.insert({
//        "participant_answer": userinput
//    }, function (err, doc) {
//        if (err) {
//            res.send("There was a problem adding the information to the database.");
//        } else {
//            res.redirect("clozetest_participant");
//        }
//    });
//});
//
//
//
///* ALLE FUNKTIONER DER ER TILKNYTTET CLOZETEST */
//
////henter clozetest_participant og finder data i databasen, svarende til de indtastede initialer
//router.get('/clozetest_participant', function (req, res) {
//    var db = req.db;
//    var collection = db.get('clozetest');
//
//    //lige nu henter den alle documenter med disse initialer, selvom den kun skal vise 1 (den første)
//    //senere skal der tilføjes en hovedside hvor brugeren kan vælge hvilken test, på baggrund af sine initialer 
//    collection.find({
//        'initials': initials
//    }, {}, function (e, docs) {
//        var docLenght = docs.length;
//        res.render('clozetest_participant', {
//            "testlist": docs[docLenght - 1],
//            title: 'clozetest_participant'
//        });
//    });
//});
//
//
//router.post('/clozetest_addanswer', function (req, res) {
//    var db = req.db;
//
//    var userinput = req.body.userinput;
//    var timestamp = req.body.timestamp;
//
//    var collection = db.get('clozetest_answer');
//
//    collection.insert({
//        "participant_answer": userinput,
//        "timestamp": timestamp
//    }, function (err, doc) {
//        if (err) {
//            res.send("There was a problem adding the information to the database.");
//        } else {
//            res.redirect("interpret_participant");
//        }
//    });
//});
//
//
//
///* ALLE FUNKTIONER DER ER TILKNYTTET INTERPRET */
//
////henter clozetest_participant og finder data i databasen, svarende til de indtastede initialer
//router.get('/interpret_participant', function (req, res) {
//    var db = req.db;
//    var collection = db.get('interpret');
//
//    //lige nu henter den alle documenter med disse initialer, selvom den kun skal vise 1 (den første)
//    //senere skal der tilføjes en hovedside hvor brugeren kan vælge hvilken test, på baggrund af sine initialer 
//    collection.find({
//        'initials': initials
//    }, {}, function (e, docs) {
//        var docLenght = docs.length;
//        res.render('interpret_participant', {
//            "testlist": docs[docLenght - 1],
//            title: 'interpret_participant'
//        });
//    });
//});
//
//
//router.post('/interpret_addanswer', function (req, res) {
//    var db = req.db;
//
//    var userinput = req.body.userinput;
//    var timestamp = req.body.timestamp;
//
//    var collection = db.get('interpret_answer');
//
//    collection.insert({
//        "participant_answer": userinput,
//        "timestamp": timestamp
//    }, function (err, doc) {
//        if (err) {
//            res.send("There was a problem adding the information to the database.");
//        } else {
//            res.redirect("letter_participant");
//        }
//    });
//});
//
//
//
///* ALLE FUNKTIONER DER ER TILKNYTTET LETTER */
//
////henter 'output' og finder data i databasen, svarende til de indtastede initialer
//router.get('/letter_participant', function (req, res) {
//    var db = req.db;
//    var collection = db.get('letter');
//
//    //lige nu henter den alle documenter med disse initialer, selvom den kun skal vise 1 (den første)
//    //senere skal der tilføjes en hovedside hvor brugeren kan vælge hvilken test, på baggrund af sine initialer 
//    collection.find({
//        'initials': initials
//    }, {}, function (e, docs) {
//        var docLenght = docs.length;
//        res.render('letter_participant', {
//            "testlist": docs[docLenght - 1],
//            title: 'letter_participant'
//        });
//    });
//});
//
//
//router.post('/letter_addanswer', function (req, res) {
//    var db = req.db;
//
//    var userinput = req.body.userinput;
//    var timestamp = req.body.timestamp;
//
//    var collection = db.get('letter_answer');
//
//    collection.insert({
//        "participant_answer": userinput,
//        "timestamp": timestamp
//    }, function (err, doc) {
//        if (err) {
//            res.send("There was a problem adding the information to the database.");
//        } else {
//            res.redirect("finalpage");
//        }
//    });
//});



module.exports = router;