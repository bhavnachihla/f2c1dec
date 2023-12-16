const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach(item=>item.profession=="Developer"?console.log(item):null);
  }
  
  // 2. Using a recursive function, add a new data object to the array until the user says 'no' via a prompt.
  function recursiveAddData() {
    //Write your code here, just console.log
  }
  // 2. Add Data
  function addData() {
    let name = prompt("enter your name");
    let age = prompt("enter your age");
    let profession = prompt("enter your profession");
    data.push({
        name,
        age,
        profession,
    });
    console.log("updated data",data);
  }
  
  // 3. Remove the youngest and oldest person from the array.
  function removeYoungestAndOldest() {
    //Write your code here, just console.log
  }
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter((item) => item.profession !=="admin");
    console.log("updated data",data);
  }
  
  // 4. Merge two arrays (use a dummy array for demonstration) such that the resulting array has no duplicate professions.
  function mergeAndFilterProfessions() {
    //Write your code here, just console.log
  }
  // 4. Concatenate Array
  function concatenateArray() {
    let data2 = [
        { name: "haresh", age: 24, profession: "develpoer"},
        {name: "raghav",age:22 , profession: "admin"},
    ];
    let combinedArray=data.concat(data2);
    console.log("concatenated array:",combinedArray);
  }
  
  // 5. Find the person with the highest salary and reduce their salary by 10% as tax.
  function applyTax() {
    //Write your code here, just console.log
  }
  // 5. Average Age
  function averageAge() {
    let sum=0;
    data.forEach(item=> sum+=parseInt(item.age));
    console.log(sum/data.length);
  }
  
  // 6. Check if every person in the array is a developer.
  function isEveryoneDeveloper() {
    //Write your code here, just console.log
  }
  // 6. Age Check
  function checkAgeAbove25() {}
  
  // 7. Swap the professions of the first and last person in the array.
  function swapProfessions() {
    //Write your code here, just console.log
  }
  // 7. Unique Professions
  function uniqueProfessions() {}
  
  // 8. Using the `map` method, add a new property to each person called 'experience' with a default value of 1 year.
  function addExperienceProperty() {
    //Write your code here, just console.log
  }
  // 8. Sort by Age
  function sortByAge() {
    data.short((a,b)=>a.age-b.age);
    console.log(data);
  }
  
  // 9. Group persons by profession and count them. E.g., {developer: 2, admin: 1}.
  function groupByProfession() {
    //Write your code here, just console.log
  }
  // 9. Update Profession
  function updateJohnsProfession() {}
  
  // 10. Find the person who has a name with the longest length and capitalize their profession.
  function capitalizeLongestNamedPersonProfession() {
    //Write your code here, just console.log
  }
  
  // 11. Create a function that shuffles the array in a random order.
  function shuffleArray() {
    //Write your code here, just console.log
  }
  
  // 12. Create a function that rotates the array to the right by n steps, where n is provided as an argument.
  function rotateArray(n) {
    //Write your code here, just console.log
  }
  
  // 13. Create a function that finds the person with the closest age to a given number.
  function findClosestAge(age) {
    //Write your code here, just console.log
  }
  
  // 14. Create a function that checks if there's any repeated name in the array.
  function hasRepeatedNames() {
    //Write your code here, just console.log
  }
  // 10. Profession Count
  function getTotalProfessions() {}