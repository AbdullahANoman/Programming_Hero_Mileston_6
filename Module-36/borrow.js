const kodomALi = {
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
const badamAli = {
    name : 'Kacha Badam',
    age : 45 ,
    money : 8000
}

const result = kodomALi.treat.call(badamAli, 500)
console.log(result)

const result2 = kodomALi.treat.bind(badamAli);
const result3 = result2(1000)
console.log(result3)