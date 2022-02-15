async function getData() {
    let response = await fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json');
    let data = await response.json();
    return data;
}

let button = document.createElement("button");
document.getElementsByTagName("body")[0].appendChild(button);
button.textContent = "Click me";

button.addEventListener("click",async function(){
    let data = await getData();
    let arr = [];
    data.forEach(element => {
        arr.push(element)
    });
    
    let averageGradeHigherThan3 = arr.filter(student => student.averageGrade > 3);
    console.log(averageGradeHigherThan3);

    let femaleAverage5 = arr.filter(student => student.gender === "Female").filter(student => student.averageGrade === 5);
    console.log(femaleAverage5)

    let maleStudentsFromSkopje = arr.filter(student => student.gender === 'Male').filter(student => student.city === 'Skopje').filter(student => student.age > 18).map(student => `${student.firstName} ${student.lastName}`);
    console.log(maleStudentsFromSkopje)

    let averageGradeOfFemales = arr.filter(student => student.gender === 'Female').filter(student => student.age > 18).map(student => student.averageGrade);
    console.log(averageGradeOfFemales);

    let allMaleStudentsStartingWithB = arr.filter(student => student.gender === 'Male').filter(student => student.averageGrade > 2).filter(student => student.firstName.startsWith("B"))
        
    console.log(allMaleStudentsStartingWithB);
});