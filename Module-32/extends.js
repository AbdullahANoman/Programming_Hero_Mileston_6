class topFather{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
}



class Noman extends topFather{
    designation = "Web Instructor"
    team = "Programming Hero Team"
    constructor(name,location){
        super(name,location);
    }
    startSupportSession(time){
        console.log(`Start Support Session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please Create Quiz Module ${module}`)
    }
    provideFeedBack(){
        console.log(`${this.name} thank you for provide your feedback`);
    }
}

class tanjid extends topFather{
    designation ="App Developer"
    team = "App Hero"
}
const samid = new Noman('Abdullah Al Noman','Dhaka');
console.log(samid.name);
samid.provideFeedBack();
