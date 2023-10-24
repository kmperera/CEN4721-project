const message = 'Welcome!' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)

const message2 = 'Gator Course Searcher'

document.querySelector('#header2').innerHTML = message2

//fake data for testing purposes
var array = [
    {
        className: 'Programming Fundamentals 1',
        classCode: 'COP 3502',
        prereqs: 'None',
        professor: 'Dr. Sean Szumlanski',
        time: 'MWF 1:30-2:20',
        classroom: 'HPA 114',
        links: 'Syllabus: https://www.cs.ucf.edu/~szum/courses/cop3502f19/syllabus.html, Textbook: https://www.amazon.com/Java-Software-Solutions-Foundations-Program/dp/0134462025/ref=sr_1_1?keywords=java+software+solutions&qid=1567626283&s=gateway&sr=8-1'
    },
    {
        className: 'Programming Fundamentals 2',
        classCode: 'COP 3503',
        prereqs: 'COP 3502',
        professor: 'Dr. Sean Szumlanski',
        time: 'MWF 3:30-4:20',
        classroom: 'HPA 114',
        links: 'Syllabus: https://www.cs.ucf.edu/~szum/courses/cop3503f19/syllabus.html, Textbook: https://www.amazon.com/Java-Software-Solutions-Foundations-Program/dp/0134462025/ref=sr_1_1?keywords=java+software+solutions&qid=1567626283&s=gateway&sr=8-1'
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
    
    newArray = array.filter(function(val){
        return val.className.toLowerCase().includes(search) || 
               val.classCode.toLowerCase().includes(search) || 
               val.professor.toLowerCase().includes(search) || 
               val.classroom.toLowerCase().includes(search);
    });

    showtable(newArray);
});
