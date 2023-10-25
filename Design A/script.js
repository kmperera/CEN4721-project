const message = 'Welcome!' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)

const message2 = 'Gator Course Searcher'

document.querySelector('#header2').innerHTML = message2

//need to add more data
var array = [
    {
        className: 'Human-Computer Interaction',
        classCode: 'CEN4721',
        prereqs: 'COP3530',
        professor: 'Sharon Lynn Chu Yew Yee',
        time: 'T 10:40 AM - 11:30 AM, R 10:40 - 12:35 PM',
        classroom: 'LIT 0121, LIT 0113',
        links: '<a href=\'https://www.cise.ufl.edu/wp-content/uploads/gravity_forms/3-0208f39d852828a4bae9d9abad5262af/2023/08/cen-4721_fall2023.pdf\'>Syllabus</a>, <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=11130&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Introduction to Literature',
        classCode: 'LIT2000',
        prereqs: 'ENC1101',
        professor: 'Benjamin Hebblethwaite',
        time: 'Online',
        classroom: 'Online',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/14946.pdf\'>Syllabus</a>, <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=14946&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Introduction to Literature',
        classCode: 'LIT2000',
        prereqs: 'ENC1101',
        professor: 'Galina Rylkova',
        time: 'Online',
        classroom: 'Online',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/23759.pdf\'>Syllabus</a>, <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=23759&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Natural Language Processing',
        classCode: 'CAP4641',
        prereqs: 'COP3530',
        professor: 'Bonnie Dorr',
        time: 'T 3:00 PM - 6:00 PM',
        classroom: 'MCCB G086',
        links: '<a href=\'https://www.cise.ufl.edu/wp-content/uploads/gravity_forms/3-0208f39d852828a4bae9d9abad5262af/2023/09/cap-4641_fall2023.pdf\'>Syllabus</a>, <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=25987&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Programming Fundamentals 1',
        classCode: 'COP3502',
        prereqs: 'MAC2311',
        professor: 'Amanpreet Kapoor and Sanethia Thomas',
        time: 'TR 10:40 AM - 11:30 AM, W 12:50 PM - 2:45 PM',
        classroom: 'CAR 0100, CSE E309',
        links: '<a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=11942&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Programming Fundamentals 1',
        classCode: 'COP3502',
        prereqs: 'MAC2311',
        professor: 'Daniel Delgado',
        time: 'TR 10:40 AM - 11:30 AM, T 5:10 PM - 7:05 PM',
        classroom: 'ROG 0129, CSE E312',
        links: '<a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=29775&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Programming Language Concepts',
        classCode: 'COP4020',
        prereqs: 'COP3530',
        professor: 'Beverly Sanders',
        time: 'T 3:00 PM - 4:55 PM, R 4:05 PM - 4:55 PM',
        classroom: 'NRN 1020',
        links: '<a href=\'https://www.cise.ufl.edu/wp-content/uploads/gravity_forms/3-0208f39d852828a4bae9d9abad5262af/2023/08/cop-4020_fall2023.pdf\'>Syllabus</a>, <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=21344&YEAR=23&TERM=8\'>Textbooks</a>,'
    },
]

//function to create a table
function showtable(curarray){

    document.getElementById("fullTable").innerHTML = '<tr><th>Class Name</th><th>Class Code</th><th>Prerequisites</th><th>Professor</th><th>Time</th><th>Classroom</th><th>Links</th></tr';
    
    if(curarray == ""){
        document.getElementById("error").innerHTML = '<span class="text-danger">Not Found!</span>'
    }else {
        document.getElementById("error").innerHTML = "";

        for(var i =0; i < curarray.length; i++){
            document.getElementById("fullTable").innerHTML += '<tr><td>' + curarray[i].className + '</td><td>' + curarray[i].classCode + '</td><td>' + curarray[i].prereqs + '</td><td>' + curarray[i].professor + '</td><td>' + curarray[i].time + '</td><td>' + curarray[i].classroom + '</td><td>' + curarray[i].links + '</td></tr>';
            
        }
    }
}

showtable(array);

//function to search for a class
var newArray = [];

document.getElementById("search").addEventListener("keyup", function(){
    var search = this.value.toLowerCase(); // Corrected this line
    
    //doesn't include time and links to be searchable
    newArray = array.filter(function(val){
        return val.className.toLowerCase().includes(search) || 
               val.classCode.toLowerCase().includes(search) || 
               val.professor.toLowerCase().includes(search) || 
               val.classroom.toLowerCase().includes(search) ||
               val.prereqs.toLowerCase().includes(search);
    });

    showtable(newArray);
});
