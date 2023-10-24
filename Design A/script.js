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
        className: 'Programming Fundamentals 1',
        classCode: 'COP3502',
        prereqs: 'MAC2311',
        professor: 'Amanpreet Kapoor and Sanethia Thomas',
        time: 'TR 10:40 AM - 11:30 AM, W 12:50 PM - 2:45 PM',
        classroom: 'CAR 0100, CSE E309',
        links: 'Syllabus: link, Textbook: link'
    },
    {
        className: 'Programming Fundamentals 1',
        classCode: 'COP3502',
        prereqs: 'MAC2311',
        professor: 'Daniel Delgado',
        time: 'TR 10:40 AM - 11:30 AM, T 5:10 PM - 7:05 PM',
        classroom: 'ROG 0129, CSE E312',
        links: 'Syllabus: link, Textbook: link'
    },
    {
        className: 'Introduction to Literature',
        classCode: 'LIT2000',
        prereqs: 'ENC1101',
        professor: 'Benjamin Hebblethwaite',
        time: 'Online',
        classroom: 'Online',
        links: 'Syllabus: link, Textbook: link'
    },
    {
        className: 'Introduction to Literature',
        classCode: 'LIT2000',
        prereqs: 'ENC1101',
        professor: 'Galina Rylkova',
        time: 'Online',
        classroom: 'Online',
        links: 'Syllabus: link, Textbook: link'
    }
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
