const students = {
    name : 'Abdullah Al Noman',
    age : 23,
    money: 10000,
    program : 'CSE',
    subject : ['DSA','ALgorithm'],
    exam : function(){
        return this.name + 'Is My Name'
    },
    improveExam: function(subjects){
        return this.exam()+ `is my favouerate ${subjects}`;
    },
    treat : function(money){
        return this.money = this.money - money
    },
    dola : function(money){
        return this.money = this.money - money
    }
    
}

const result = students.exam();
// console.log(result)

const result1 = students.improveExam('Math');
// console.log(result1);

const result2 = students.treat(100);
console.log(result2)
const result3 = students.dola(1200);
console.log(result3)