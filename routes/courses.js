const express = require('express');
const router = express.Router();


// main course page
router.get('/', function(req, res, next) {
    res.send("main course page"); // to be replaced
});


// GET-router for course pages
router.get('/:courseindex/page/:pageindex', function(req, res, next) {

    // require values from URL
    let course_index = req.params.courseindex;
    let page_index = req.params.pageindex;

    // use values to point at corresponding Handlebar file
    let page_path = 'courses/course-'+ course_index + '/page-' + page_index;

    // respond with found Handlebar file
    res.render(page_path, {course_index: course_index});

});

module.exports = router;
