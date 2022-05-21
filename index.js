// // js library which provides effective method for doing something in fronted and gives essential features like Dom manipulation AJAX interactions and so an.....

// $("button").click(function() {
//         // $("p").hide();
//         $(".learn").toggle();

//     })
//     // $("button").click(function() {
//     // $(".top").toggle();
//     // })

// //API Appication Programming Interface

// //It connect two applications to pass data from the one to another

// // AJAX() -It helps us to query the API'S it allows us to server calls and display the data without relaation the page.
// // It allows us to comunicate with remote web servers in an asynchronous way with help of Ajax Calls  we can request data from web servers dynamically. It helps us to to create CRUD application

// $("button").click(function() {
//     $.ajax({
//         url: "http://jsonplaceholder.typicode.com/todos/1",
//         type: "GET",
//         success: function(response) {
//             console.log("response");
//             document.getElementById("learn").innerText = response.titel;
//         }
//     })
// })



////.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.'.

//Callback Hell  - They are just a name or convention for using JavaScript Function It instead of returing result immediately like other function takes to produce the result. These are more of like an I/O aperation.

//Callback hell - fors of arrow shaped,p


const getEmployeeID = () => {
    setTimeout(() => {
        console.log("Fetching the Employee details");
        let id = [1, 2, 3, 4, 5];
        console.log(id);

        setTimeout(() => {
            let employeeDetails = {
                name: "Arjun Kanungo",
                age: 34,
            }
            console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);

            setTimeout(() => {
                employeeDetails.gender = "Male",
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);

                setTimeout(() => {
                    employeeDetails.salary = 21000;
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                }, 2000);
            }, 2000);
        }, 2000)
    }, 2000);
}
getEmployeeID();


// const getEmployeeID = () => {
//     setTimeout(() => {
//         console.log("Fetching the employee details");
//         let id = [1, 2, 3, 4, 5];
//         console.log(id);

//         setTimeout(() => {
//             let employeeDetails = {
//                 name: "Arjun Kanungo",
//                 age: 34,
//             }
//             console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);
//         },2000);
//     },2000);
// }