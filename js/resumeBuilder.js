/*
This is empty on purpose! Your code to build the resume will go here.
 */
//var name = "Niki Noll";
//var role = "Front End Developer";
//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);


var bio = {
    "name": "Niki Noll",
    "role": "Designer & Developer",
    "contacts": {
        "phone": "(805) 403-0380",
        "email": "nicole.therese.ng@gmail.com",
        "address": "437 7th Avenue, San Francisco"
    },
    "picture": "images/me.JPG",
    "message": "I am a designer + developer living in San Francisco",
    "skills": [
        "HTML", "CSS", "JavaScript", "jQuery"
    ]
    
}

var education = {
    "schools": [
        {
            "name": "Westmont College",
            "city": "Santa Barbara",
            "degree": "BFA",
            "major": "Studio Art"
        },
        {
            "name": "Academy of Art University",
            "city": "San Francisco",
            "degree": "MFA",
            "major": "Graphic Design"
        }
    ]
    
}

var work = {
    "jobs": [
        {
            "employer": "The Salvation Army",
            "title": "Marketing & Social Media Manager",
            "location": "San Francisco",
            "dates": "September 2013-January 2014",
            "description": "Responsible for content creation and management of all divisional web presences. Oversaw divisional social media accounts including more than 20 local community center Facebook pages. Worked closely with marketing vendors to review and approve email marketing content and creative. Responsible for all design projects related to marketing or development. Executed migration and redesign of divisional website to new CMS."
            
        },
        {
            "employer": "The Salvation Army",
            "title": "Design & Digital Marketing Manager",
            "location": "San Francisco",
            "dates": "January 2014-Present",
            "description": "Responsible for strategic direction, design, and usability of regional and local web properties ensuring a beautiful and professional web experience for more than 30 local offices. Manages the testing and optimization of each property for optimal conversion. Works closely with direct response vendors to develop, review, and approve email content and creative. Responsible for aligning local objectives with regional and national objectives to increase revenue by 25% year over year."
        }
    ]
}

var project = {
            "title": "Website Redesign",
            "dates": "September 2014",
            "description": "Redesigned entire Golden State divisional website.",
            "images": ["images/tsa_ork.png", "images/tsa_members.png", "images/TSALocations.png", "imgages/TSA2.png", "images/TSAHome1.png"]
        
}


if(bio.skills .length > 0) {
    $("#header").append(HTMLskillsStart);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}


for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    
    $(".work-entry:last").append(formattedEmployerTitle);
}