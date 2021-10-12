let customerContainer = document.getElementById('customer-container')

// This function should create a new div for a customer
// and a series of p tags inside that to display information

function createEntry(input) {
    // creates div element with id = first and last name
    let entry = document.createElement('div');
    document.getElementById('customer-container').appendChild(entry);
    entry.id = input.name.first + ' ' + input.name.last;
    // creates a <p> with class = name
    let name = document.createElement('p');
    entry.appendChild(name);
    name.classList = 'name';
    // capitalizes first letter of first and last name, puts those as string inside <p>
    let firstName = input.name.first.charAt(0).toUpperCase() + input.name.first.slice(1)
    let lastName = input.name.last.charAt(0).toUpperCase() + input.name.last.slice(1)
    console.log(firstName);
    console.log(lastName);
    name.innerText = firstName + ' ' + lastName
    // creates a <p> with class = email
    let email = document.createElement('p');
    entry.appendChild(email);
    email.classList = 'email';
    // puts email info inside <p> with email class
    email.innerText = input.email;
    // creates a <p> with class = streetAddress
    let streetAddress = document.createElement('p')
    entry.appendChild(streetAddress);
    streetAddress.classList = 'streetAddress';
    // puts street number and name into the <p> for street address
    streetAddress.innerText = input.location.street.number + ' ' + input.location.street.name
    // creates a <p> with class = cityStateZip
    let cityStateZip = document.createElement('p')
    entry.appendChild(cityStateZip);
    cityStateZip.classList = 'cityStateZip';
    // puts city, state, and postalcode info into cityStateZip <p>
    cityStateZip.innerText = `${input.location.city}, ${input.location.state} ${input.location.postcode}`;
    // NEED TO GO BACK UP AND CHANGE STATES TO ABBREVIATIONS
    
}

function runThis() {
    for (let customer of customers) {
        createEntry(customer);
    }
}

createEntry(customers[0]);
runThis();


console.log(customers[1])
let now = moment();
console.log(now)
