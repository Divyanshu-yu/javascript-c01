let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
    { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
    { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 }
];
const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
];

// 1. Print all developers from the array whose salary is above the average salary of the array.
function PrintHighEarningDevelopers() {
    //Write your code here , just console.log
      // Calculate the average salary
      const totalSalary = people.reduce((acc, person) => acc + person.salary, 0);
      const averageSalary = totalSalary / people.length;
  
      // Filter and print developers with a salary above the average
      const developersAboveAverage = people.filter(person => person.profession === 'developer' && person.salary > averageSalary);
  
      if (developersAboveAverage.length > 0) {
          const developerNames = developersAboveAverage.map(developer => developer.name).join(', ');
          displayResult(`Developers with Salary above Average: ${developerNames}`);
      } else {
          displayResult(`No developers found with Salary above Average.`);
      }
}
// 1. Print Developers
function printDeveloper() {
    for (let person of people) {
        if (person.profession === 'developer') {
          console.log(person.name);
        }
      }
 }

// 2. Using a recursive function, add a new data object to the array until the user says 'no' via a prompt.
function recursiveAddData() {
    //Write your code here, just console.log
    const name = prompt('Enter name:');
    const age = parseInt(prompt('Enter age:'));
    const profession = prompt('Enter profession:');

    people.push({ name, age, profession });

    const continueAdding = prompt('Do you want to add another data object? (yes/no)').toLowerCase();

    if (continueAdding === 'yes') {
        addDataRecursively(); // Call the function again for another round
    } else {
        displayResult('Data entry completed.');
    }
}
// 2. Add Data
function addData() { 
    const id = people.length + 1;
    const name = prompt('Enter name:');
    const age = parseInt(prompt('Enter age:'));
    const profession = prompt('Enter profession:');
  
  people.push({ id, name, age, profession });
}

// 3. Remove the youngest and oldest person from the array.
function removeYoungestAndOldest() {
    //Write your code here, just console.log
    if (people.length < 2) {
        displayResult("There are not enough people in the array to remove youngest and oldest.");
        return;
    }

    // Find the youngest and oldest ages
    let youngestAge = people[0].age;
    let oldestAge = people[0].age;

    for (let i = 1; i < people.length; i++) {
        if (people[i].age < youngestAge) {
            youngestAge = people[i].age;
        }
        if (people[i].age > oldestAge) {
            oldestAge = people[i].age;
        }
    }

    // Remove the youngest and oldest persons from the array
    people = people.filter(person => person.age !== youngestAge && person.age !== oldestAge);

    displayResult(`Removed the youngest (age ${youngestAge}) and oldest (age ${oldestAge}) persons.`);
}
// 3. Remove Admins
function removeAdmin() { 
    people = people.filter(person => person.profession !== 'admin');
}

// 4. Merge two arrays (use a dummy array for demonstration) such that the resulting array has no duplicate professions.
function mergeAndFilterProfessions() {
    //Write your code here, just console.log
    const dummyArray = [
        { name: 'Sam', age: 29, profession: 'developer' },
        { name: 'Linda', age: 31, profession: 'admin' }
    ];

    // Merge the two arrays
    const mergedArray = people.concat(dummyArray);

    // Remove duplicate professions
    const uniqueProfessions = new Set();
    const resultArray = [];

    mergedArray.forEach(person => {
        if (!uniqueProfessions.has(person.profession)) {
            uniqueProfessions.add(person.profession);
            resultArray.push(person);
        }
    });

    people = resultArray;

    displayResult('Arrays merged and duplicate professions removed.');

}
// 4. Concatenate Array
function concatenateArray() {
    const dummyArray = [
        { id: 6, name: 'Sam', age: 29, profession: 'developer' },
        { id: 7, name: 'Linda', age: 31, profession: 'admin' }
      ];
    
      const combinedArray = people.concat(dummyArray);
      console.log(combinedArray);
 }

// 5. Find the person with the highest salary and reduce their salary by 10% as tax.
function applyTax() {
    //Write your code here, just console.log
    if (people.length === 0) {
        displayResult("The array is empty.");
        return;
    }

    // Find the person with the highest salary
    let highestSalaryPerson = people[0];
    for (let i = 1; i < people.length; i++) {
        if (people[i].salary > highestSalaryPerson.salary) {
            highestSalaryPerson = people[i];
        }
    }

    // Apply tax (10%) to the highest salary person
    const originalSalary = highestSalaryPerson.salary;
    highestSalaryPerson.salary -= (0.1 * originalSalary); // Reduce by 10%

    displayResult(`Tax (10%) applied to ${highestSalaryPerson.name}'s salary. Original salary: $${originalSalary}, New salary: $${highestSalaryPerson.salary.toFixed(2)}`);
}
// 5. Average Age
function averageAge() {
    const totalAge = people.reduce((acc, person) => acc + person.age, 0);
    const average = totalAge / people.length;
    console.log(`Average Age: ${average.toFixed(2)}`);
 }

// 6. Check if every person in the array is a developer.
function isEveryoneDeveloper() {
    //Write your code here, just console.log
    const isEveryPersonDeveloper = people.every(person => person.profession === 'developer');

    if (isEveryPersonDeveloper) {
        displayResult("Every person in the array is a developer.");
    } else {
        displayResult("Not every person in the array is a developer.");
    }
}
// 6. Age Check
function checkAgeAbove25() {
    const isAbove25 = people.some(person => person.age > 25);
    console.log(`Is there anyone above 25? ${isAbove25}`);
 }

// 7. Swap the professions of the first and last person in the array.
function swapProfessions() {
    //Write your code here, just console.log
    if (people.length < 2) {
        displayResult("There are not enough people in the array to swap professions.");
        return;
    }

    // Swap the professions of the first and last person
    const firstPersonProfession = people[0].profession;
    const lastPersonProfession = people[people.length - 1].profession;

    people[0].profession = lastPersonProfession;
    people[people.length - 1].profession = firstPersonProfession;

    displayResult(`Professions of the first and last person swapped.`);
}
// 7. Unique Professions
function uniqueProfessions() {
    const professionsSet = new Set(people.map(person => person.profession));
    const professionsArray = Array.from(professionsSet);
    console.log(professionsArray);
 }

// 8. Using the `map` method, add a new property to each person called 'experience' with a default value of 1 year.
function addExperienceProperty() {
    //Write your code here, just console.log
}
// 8. Sort by Age
function sortByAge() {
    people.sort((a, b) => a.age - b.age);
  console.log(people);
 }

// 9. Group persons by profession and count them. E.g., {developer: 2, admin: 1}.
function groupByProfession() {
    //Write your code here, just console.log
    if (people.length === 0) {
        displayResult("The array is empty.");
        return;
    }

    // Create an object to store the counts of each profession
    const professionCounts = {};

    // Iterate through the array and count persons by profession
    people.forEach(person => {
        const { profession } = person;
        if (professionCounts[profession]) {
            professionCounts[profession]++;
        } else {
            professionCounts[profession] = 1;
        }
    });

    // Display the profession counts
    displayResult(`Profession Counts: ${JSON.stringify(professionCounts)}`);
}
// 9. Update Profession
function updateJohnsProfession() { 
    const john = people.find(person => person.name === 'John');
  if (john) {
    john.profession = 'manager';
  }
}

// 10. Find the person who has a name with the longest length and capitalize their profession.
function capitalizeLongestNamedPersonProfession() {
    //Write your code here, just console.log
    if (people.length === 0) {
        displayResult("The array is empty.");
        return;
    }

    // Find the person with the longest name
    let personWithLongestName = people[0];
    for (let i = 1; i < people.length; i++) {
        if (people[i].name.length > personWithLongestName.name.length) {
            personWithLongestName = people[i];
        }
    }

    // Capitalize their profession
    personWithLongestName.profession = personWithLongestName.profession.toUpperCase();

    displayResult(`Person with Longest Name: ${personWithLongestName.name}, Capitalized Profession: ${personWithLongestName.profession}`);
}

// 11. Create a function that shuffles the array in a random order.
function shuffleArray() {
    //Write your code here, just console.log
    for (let i = people.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i

        // Swap elements at i and j
        const temp = people[i];
        people[i] = people[j];
        people[j] = temp;
    }

    displayResult('Array shuffled in random order.');
}

// 12. Create a function that rotates the array to the right by n steps, where n is provided as an argument.
function rotateArray(n) {
    //Write your code here, just console.log
    if (people.length <= 1 || n % people.length === 0) {
        displayResult('No rotation needed or array is empty.');
        return;
    }

    const steps = n % people.length; // Normalize the number of steps
    const rotatedArray = [...people.slice(-steps), ...people.slice(0, -steps)];

    people = rotatedArray;

    displayResult(`Array rotated to the right by ${steps} steps.`);
}

// 13. Create a function that finds the person with the closest age to a given number.
function findClosestAge(age) {
    //Write your code here, just console.log
    if (people.length === 0) {
        displayResult("The array is empty.");
        return;
    }

    // Initialize variables to track the closest person and the minimum age difference
    let closestPerson = people[0];
    let minAgeDifference = Math.abs(targetAge - people[0].age);

    // Iterate through the array to find the closest person
    for (let i = 1; i < people.length; i++) {
        const ageDifference = Math.abs(targetAge - people[i].age);

        if (ageDifference < minAgeDifference) {
            minAgeDifference = ageDifference;
            closestPerson = people[i];
        }
    }

    displayResult(`Person with Closest Age to ${targetAge} is ${closestPerson.name} (Age: ${closestPerson.age}).`);
}

// 14. Create a function that checks if there's any repeated name in the array.
function hasRepeatedNames() {
    //Write your code here, just console.log
    if (people.length === 0) {
        displayResult("The array is empty.");
        return false;
    }

    const seenNames = {}; // Create an object to store seen names

    for (const person of people) {
        if (seenNames[person.name]) {
            displayResult(`Repeated Name Found: ${person.name}`);
            return true; // Found a repeated name, return true
        }
        seenNames[person.name] = true; // Mark the name as seen
    }

    displayResult("No repeated names found.");
    return false; // No repeated names found
}
// 10. Profession Count
function getTotalProfessions() { 
    const developerCount = people.filter(person => person.profession === 'developer').length;
    const adminCount = people.filter(person => person.profession === 'admin').length;
    console.log(`Total Developers: ${developerCount}, Total Admins: ${adminCount}`);
  
}

printDevelopers();
addData();
removeAdmin();
concatenateArray();
averageAge();
checkAgeAbove25();
uniqueProfessions();
sortByAge();
updateJohnsProfession();
getTotalProfessions();


