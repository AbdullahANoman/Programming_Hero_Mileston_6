class Instructor{
    name;
    designation = "Web Instructor"
    team = "Programming Hero Team"
    location;
    constructor(name,location){
        this.name = name;
        this.location =location;
    }
    startSupportSession(time){
        console.log(`Start Support Session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please Create Quiz Module ${module}`)
    }
}

const noman = new Instructor("Noman","Dhaka");
noman.startSupportSession('9.00');
console.log(noman.name)