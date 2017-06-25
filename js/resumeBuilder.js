var replaceData = function(data, formatter, dataPlaceholder) {
  dataPlaceholder = dataPlaceholder || '%data%';
  return formatter.replace(dataPlaceholder, data);
};


var bio = {
    'name': 'Shenghong Wang',
    'age': '23',
    'role': 'Master Student',
    'contacts': {
        'mobile': "<a href='tel:8583363397'>+1-858-336-3397</a>",
        'email': "<a href='mailto:shw248@ucsd.edu'>shw248@ucsd.edu</a>",
        'github': "<a href='https://github.com/shenghong1123'>shenghong1123</a>",
        'location': "<a href='#'>La Jolla, CA</a>"
    },
    'welcomeMessage': "If it ain't fun, don't do it",
    'skills': ["Java", "C++", "Python", "Html", "CSS", "JavaScript", "Git"],
    'display': function() {
        var name = HTMLheaderName.replace("%data%", this.name);
        var role = HTMLheaderRole.replace("%data%", this.role);
        $("#header").prepend(role);
        $("#header").prepend(name);

        for (var i in this.contacts) {
            var contact = this.contacts[i];
            var formattedContact = HTMLcontactGeneric.replace('%contact%', i).replace('%data%', contact);
            $('#topContacts').append(formattedContact);
        }
        $('#topContacts').children().clone().appendTo('#footerContacts');

        $("#header").append(HTMLbioPic.replace("%data%", 'images/US-Visa.jpg'));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        for (var i in bio.skills) {
            var skill = bio.skills[i];
            $('#skills').append(HTMLskills.replace("%data%", skill));
        }
    }
};

var education = {
    'schools': [
        {'name': 'University of California, San Diego',
         'location': 'La Jolla, USA',
         'degree': 'Bachelor of Science',
         'majors': 'Electrical & Computer Engineering',
         'dates': '9.2016 - 3.2018',
         'url': 'https://ucsd.edu/'
        },
        {'name': 'Tianjin University',
         'location': 'Tianjin, CN',
         'degree': 'Bachelor of Engineering',
         'majors': 'Materials Science and Engineering',
         'dates': '9.2012 - 6.2016',
         'url': 'http://www.tju.edu.cn/english/'
        }
    ],
    'display': function() {
        for (var i in this.schools) {
            $('#education').append(replaceData(i, HTMLschoolStart));
            var id = '#school-entry-' + i;
            var school = this.schools[i];
           $(id).append((HTMLschoolName.replace("%data%", school.name)
             + HTMLschoolDegree.replace("%data%", school.degree))
             .replace('#', school.url))
             .append(replaceData(school.dates, HTMLschoolDates))
             .append(replaceData(school.location, HTMLschoolLocation))
             .append(replaceData(school.majors, HTMLschoolMajor));
        }
    }
};

var projects = {
    'projects': [
      {
        'title': 'XQuery Processor',
        'dates': '1.2017 - 3.2017',
        'description': 'TODO',
        'images': [
          'http://placekitten.com/g/300/300'
        ]
      },
      {
        'title': 'Mini Google Map',
        'dates': '6.2017 - 9.2017',
        'description': 'TODO',
        'images': [
          "images/google-map.jpg"
        ]
      },
      {
        'title': 'XQuery Processor',
        'dates': '1.2017 - 3.2017',
        'description': 'TODO',
        'images': [
          'images/US-Visa.jpg'
        ]
      }
    ],
    'display': function() {
        for (var i in this.projects) {
            $('#projects').append(HTMLprojectStart.replace('%data%', i));
            var id = '#project-entry-' + i;
            var project = this.projects[i];
            $(id).append(HTMLprojectTitle.replace('%data%', project.title))
              .append(HTMLprojectDates.replace('%data%', project.dates))
              .append(HTMLprojectDescription.replace('%data%', project.description));
            for (var j in project.images) {
                $(id).append(HTMLprojectImage.replace("%data%", project.images[i]));
            }
        }
    }
};

education.display();
bio.display();
projects.display();











