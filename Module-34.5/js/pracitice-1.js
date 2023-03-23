const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
        {
            name: {
                common: "John",
                fullName: ["John", "Doe"]
            },
            age: 32,
            isMale: false,
            address: {
                street: "13/A St Joseph",
                house: 10,
            },
        },
        {
            name: {
                common: "Humayoun",
                fullName: ["Humayoun", "Kabir"]
            },
            age: 33,
            isMale: false,
            address: {
                street: "13/A St Lucia",
                house: 11,
            },
        },
    ]
};

const container = document.getElementById('container');
container.innerHTML = `
<div> ${person.message} </div>
        <div class="d-flex justify-content-center gap-5 mt-5">
            <div class="border  p-5">
                <p> Person Name : ${person.result[0].name.common}</p>
                <p> Age : ${person.result[0].age} </p>
                <p>Street : ${person.result[0].address.street} House No : ${person.result[0].address.house}
            </div>
            <div class="border  p-5">
                <p> Person Name : ${person.result[1].name.common}</p>
                <p> Age : ${person.result[1].age} </p>
                <p>Street : ${person.result[1].address.street} House No : ${person.result[1].address.house}
            </div>
        </div>
        
`