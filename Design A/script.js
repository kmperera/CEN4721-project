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
        className: 'Analytic Geometry and Calculus 2',
        classCode: 'MAC2312',
        prereqs: 'MAC2311/MAC3472',
        professor: 'Stephen Adams, Kwai-Lee Chui',
        time: 'MWF 3:00 PM - 3:50 PM, T 11:45 AM - 12:35 PM',
        classroom: 'NRN 1020, LIT 0023',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/22738.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=22738&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Argument and Persuasion',
        classCode: 'ENC1102',
        prereqs: 'ENC1101',
        professor: 'Airin Akter',
        time: 'MWF 3:00 PM - 3:50 PM',
        classroom: 'AND 0032',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/12577.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=12577&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Art Appreciation',
        classCode: 'ARH2000',
        prereqs: 'None',
        professor: 'Carissa Nicholson',
        time: 'F 10:40 AM - 11:30 AM',
        classroom: 'MAT 0016',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/10731.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=10731&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Basic College Algebra',
        classCode: 'MAC1105',
        prereqs: 'ALEKS Exam',
        professor: 'Hannah Anderson',
        time: 'Online',
        classroom: 'Online',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/14895.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=14895&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Biological Sciences',
        classCode: 'BSC2005',
        prereqs: 'None',
        professor: 'Nicole Gerlach',
        time: 'Online',
        classroom: 'Online',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/11463.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=11463&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Discovering the Universe',
        classCode: 'AST1002',
        prereqs: 'None',
        professor: 'Anthony Gonzalez',
        time: 'Online',
        classroom: 'Online',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/11581.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=11583&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Discovering the Universe',
        classCode: 'AST1002',
        prereqs: 'None',
        professor: 'Chia-Yu Hu',
        time: 'MWF 10:40 AM - 11:30 AM',
        classroom: 'WEIM 1064',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/11586.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=11586&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Experiencing Music',
        classCode: 'MUL2010',
        prereqs: 'None',
        professor: 'Lauren Hodges',
        time: 'W 1:55 PM - 2:45 PM',
        classroom: 'MUB 0142',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/21490.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=21490&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Expository and Argumentative Writing',
        classCode: 'ENC1101',
        prereqs: 'None',
        professor: 'Andrew Lanser',
        time: 'MWF 3:00 PM - 3:50 PM',
        classroom: 'MCCA 3194',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/12675.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=12675&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Expository and Argumentative Writing',
        classCode: 'ENC1101',
        prereqs: 'None',
        professor: 'Anuska Narayanan',
        time: 'T 8:30 AM - 10:25 AM, R 9:35 AM - 10:25 AM',
        classroom: 'WEIM 1094',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/12334.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=12334&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'General Anthropology',
        classCode: 'ANT2000',
        prereqs: 'None',
        professor: 'Jennifer Heilmann',
        time: 'T 1:55 PM - 2:45 PM, R 1:55 PM - 3:50 PM',
        classroom: 'TUR 2319',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/10429.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=10429&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Human-Computer Interaction',
        classCode: 'CEN4721',
        prereqs: 'COP3530',
        professor: 'Sharon Lynn Chu Yew Yee',
        time: 'T 10:40 AM - 11:30 AM, R 10:40 - 12:35 PM',
        classroom: 'LIT 0121, LIT 0113',
        links: '<a href=\'https://www.cise.ufl.edu/wp-content/uploads/gravity_forms/3-0208f39d852828a4bae9d9abad5262af/2023/08/cen-4721_fall2023.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=11130&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Introduction to Earth Science',
        classCode: 'ESC1000',
        prereqs: 'None',
        professor: 'James Vogl',
        time: 'Online',
        classroom: 'Online',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/12445.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=12445&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Introduction to Literature',
        classCode: 'LIT2000',
        prereqs: 'ENC1101',
        professor: 'Benjamin Hebblethwaite',
        time: 'Online',
        classroom: 'Online',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/14946.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=14946&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Introduction to Literature',
        classCode: 'LIT2000',
        prereqs: 'ENC1101',
        professor: 'Galina Rylkova',
        time: 'Online',
        classroom: 'Online',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/23759.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=23759&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Introduction to Philosophy',
        classCode: 'PHI2010',
        prereqs: 'None',
        professor: 'Amber Ross',
        time: 'TR 11:45 AM - 12:35 PM, F 10:40 AM - 11:30 AM',
        classroom: 'TUR L011, TUR 2354',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/16229.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=16229&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Introduction to Philosophy',
        classCode: 'PHI2010',
        prereqs: 'None',
        professor: 'Arina Pismenny',
        time: 'TR 12:50 PM - 1:40 PM, F 10:40 AM - 11:30 AM',
        classroom: 'RNK 0110, MAT 0105',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/16264.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=16264&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Machine Learning',
        classCode: 'CAP6610',
        prereqs: 'COT5615',
        professor: 'Kejun Huang',
        time: 'T 10:40 AM - 11:30 AM, R 10:40 AM - 12:35 PM',
        classroom: 'FLG 0270, AND 0032',
        links: '<a href=\'https://www.cise.ufl.edu/wp-content/uploads/gravity_forms/3-0208f39d852828a4bae9d9abad5262af/2023/08/cap-6610_fall2023.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=25922&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Mathematics for Liberal Arts Majors 2',
        classCode: 'MGF1107',
        prereqs: 'None',
        professor: 'Ross Ptacek',
        time: 'T 10:40 AM - 11:30 AM, R 10:40 AM - 12:35 PM',
        classroom: 'LIT 0225',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/16008.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=16008&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Natural Language Processing',
        classCode: 'CAP4641',
        prereqs: 'COP3530',
        professor: 'Bonnie Dorr',
        time: 'T 3:00 PM - 6:00 PM',
        classroom: 'MCCB G086',
        links: '<a href=\'https://www.cise.ufl.edu/wp-content/uploads/gravity_forms/3-0208f39d852828a4bae9d9abad5262af/2023/09/cap-4641_fall2023.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=25987&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Physics 1',
        classCode: 'PHY2053',
        prereqs: 'None',
        professor: 'Kathryn McGill',
        time: 'TR 11:45 AM - 12:35 PM, WF 9:35 AM - 10:25 AM',
        classroom: 'NPB 1001, NPB 1011',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/18174.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=16238&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Physics 2',
        classCode: 'PHY2054',
        prereqs: 'PHY2053',
        professor: 'Tarek Saab, Sujata Krishna',
        time: 'TR 8:30 AM - 9:20 AM, WF 5:10 PM - 6:00 PM',
        classroom: 'NPB 1001, NPB 1220',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/16278.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=16184&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Programming Language Concepts',
        classCode: 'COP4020',
        prereqs: 'COP3530',
        professor: 'Beverly Sanders',
        time: 'T 3:00 PM - 4:55 PM, R 4:05 PM - 4:55 PM',
        classroom: 'NRN 1020',
        links: '<a href=\'https://www.cise.ufl.edu/wp-content/uploads/gravity_forms/3-0208f39d852828a4bae9d9abad5262af/2023/08/cop-4020_fall2023.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=21344&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'United States Since 1877',
        classCode: 'AMH2020',
        prereqs: 'None',
        professor: 'Kevin Bird',
        time: 'MW 12:50 PM - 1:40 PM, F 10:40 AM - 11:30 AM',
        classroom: 'MCCA G186, TUR 2305',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/25686.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=25686&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'United States Since 1877',
        classCode: 'AMH2020',
        prereqs: 'None',
        professor: 'Licinio Miranda',
        time: 'T 10:40 - 11:30 AM, R 10:40 AM - 12:35 PM',
        classroom: 'FLI 0111',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/28806.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=28806&YEAR=23&TERM=8\'>Textbooks</a>'
    },
    {
        className: 'Writing in the Law',
        classCode: 'ENC3465',
        prereqs: 'ENC1101/ENC1102',
        professor: 'Creed Greer',
        time: 'MWF 10:40 AM - 11:30 AM',
        classroom: 'AND 0021',
        links: '<a href=\'https://undergrad.aa.ufl.edu/media/undergradaaufledu/gen-ed/ge-core-syllabi/core-syllabi-2023/fall-2023/12478.pdf\'>Syllabus</a> <a href=\'http://www.bsd.ufl.edu/textadoption/studentview/displayadoption1sect.aspx?SECT=12478&YEAR=23&TERM=8\'>Textbooks</a>'
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
