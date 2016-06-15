/*
This is empty on purpose! Your code to build the resume will go here.

 */
var bio = {
    "name": "Howard Xue",
    "role": "Web Developer",
    "contacts": {
        "mobile": "415-816-1319",
        "email": "howard_xue@hotmail.com",
        "github": "heylittodude",
        "location": "San Leandro"
    },
    "biopic": "images/biopic.jpg",
    "welcomeMessage": "Welcome to my resume page!",
    "skills": ["HTML", "CSS", "Javascript", "JQuery", "Photoshop"],

    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole).prepend(formattedName);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts:last, #footerContacts:last").append(formattedMobile)
            .append(formattedEmail)
            .append(formattedGithub)
            .append(formattedLocation);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedBioPic).append(formattedWelcomeMsg);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill, index) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
                $("#skills").append(formattedSkill);
            });
        }
    }
};

bio.display();


var work = {
    "jobs": [{
        "employer": "Fo Guang Shan",
        "title": "Front End Web Developer",
        "location": "Kaohsiung, Taiwan",
        "dates": "October 2014 - October 2015",
        "description": "Design and implement interactive features on webpages using the latest web techniques including HTML5, CSS3 and Javascript.  Coding webpages by hand and website database maintenance.  Research and evaluate current web technologies/trends and adopt them to improve performance and functionality of future projects."
    }, {
        "employer": "Tung Hua Benevolent Association",
        "title": "Webmaster",
        "location": "San Francisco, CA",
        "dates": "November 2011 - December 2015",
        "description": "Design and setup of the website using Wordpress CMS.  Updating and daily operation monitoring.  Regular maintenance of the site."
    }, {
        "employer": "The Marsh Performing Theater",
        "title": "Office Assistant",
        "location": "San Francisco, CA",
        "dates": "July 2002 - September 2002",
        "description": "Data entry, designing and crafting posters, brochures for the theater plays.  Other miscellaneous office duties."
    }, {
        "employer": "San Bao Temple",
        "title": "Office Volunteer",
        "location": "San Francisco, CA",
        "dates": "April 2014 - Present",
        "description": "Computer/electronic equipment maintenance and repair.  Research and prepare reports on various subjects using Microsoft Office.  Create workshop used for teaching technical topics to others.  Image/photo editing using Adobe Photoshop."
    }],
    display: function() {
        work.jobs.forEach(function(job, index) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
            $(".work-entry:last").append(formattedEmployerTitle)
                .append(formattedDates)
                .append(formattedLocation)
                .append(formattedDescription);
        });
    }
};

work.display();

var projects = {
    "projects": [{
            "title": "Simple Shopping List",
            "dates": "2014",
            "description": "A simple shopping list app with sorting, select/deselect all, and remove selection functions.",
            "images": [
                "images/shoppinglist_01.jpg",
                "images/shoppingList_02.jpg"
            ]
        }, {
            "title": "Hot or Cold Game",
            "dates": "2014",
            "description": "A game where the player is asked to guess a randomly generated number and the game hints whether you are hot or cold with each guess.",
            "images": [
                "images/hotorcold_01.jpg",
                "images/hotorcold_02.jpg"
            ]
        }, {
            "title": "Quiz App",
            "dates": "2014",
            "description": "A quiz app with multiple choice questions, able to track number of questions answered correctly and tallies up the score at the end.",
            "images": [
                "images/quizapp_01.jpg",
                "images/quizapp_02.jpg"
            ]
        }, {
            "title": "Google Map API Hack",
            "dates": "2014",
            "description": "An APP utilizing Google Map API to find points of interest around a certain location. Also provides driving direction from origin location to the matched establishments.",
            "images": [
                "images/hack_01.jpg",
                "images/hack_02.jpg"
            ]
        }, {
            "title": "Interactive Navigation Map",
            "dates": "2015",
            "description": "A navigation map built with snap.svg library to help guide tourists throughout the locales in Fo Guang Shan.",
            "images": [
                // images coming in the future
            ]
        },
        // TODO: add future projects
        {
            "title": "Temp projects",
            "dates": "2016",
            "description": "Future project",
            "images": [

            ]
        },
    ],
    display: function() {
        projects.projects.forEach(function(project, index) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[index].images.length > 0) {
                projects.projects[index].images.forEach(function(image, i) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[i]);
                    $(".project-entry:last").append(formattedImage);
                });
            }
        });
    }
};

projects.display();

var education = {
    "schools": [{
        "name": "San Jose State University",
        "location": "San Jose, CA",
        "degree": "BS",
        "major": ["Electrical Engineering"],
        "dates": "August 2003 - December 2009",
        "url": "www.sjsu.edu"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developement",
        "school": "Thinkful",
        "date": "December 2013 - March 2014",
        "url": "www.thinkful.com"
    }, {
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "date": "February 2016 - May 2016",
        "url": "www.udacity.com"
    }],
    display: function() {
        education.schools.forEach(function(school, index) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[index].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major);
            $(".education-entry:last").append(formattedName + formattedDegree)
                .append(formattedDates)
                .append(formattedLocation)
                .append(formattedMajor);
        });
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourse, index) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].date);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append(formattedOnlineURL);
        });
    }
};

education.display();

$("#mapDiv").append(googleMap);