// creates a div inside body to hold all customer cards
let container = document.createElement('div');
document.body.appendChild(container)
container.id = 'customer-container';


// This function should create a new div for a customer
// and a series of tags inside that to display information
function createEntry(input) {
    // creates div element with id = first and last name
    let entry = document.createElement('div');
    document.getElementById('customer-container').appendChild(entry);
    entry.id = input.name.first + ' ' + input.name.last;
    entry.classList = "customer-card";
    // creates an <img> with class = thumbnail
    let thumbnail = document.createElement('img');
    entry.appendChild(thumbnail)
    thumbnail.classList = 'thumbnail';
    // attaches thumbnail link to <img>
    thumbnail.src = input.picture.medium;
    // creates a <p> with class = name
    let fullname = document.createElement('p');
    entry.appendChild(fullname);
    fullname.classList = 'name';
    // capitalizes first letter of first and last name, puts those as string inside <p>
    let firstName = input.name.first.charAt(0).toUpperCase() + input.name.first.slice(1)
    let lastName = input.name.last.charAt(0).toUpperCase() + input.name.last.slice(1)
    fullname.innerText = firstName + ' ' + lastName
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
    // Creates a variable for state abbrevation, then finds the state abbreviation
    let stateAbbrev = '';
    for (let item of usStates) {
        if (item.name === input.location.state.toUpperCase()) {
            stateAbbrev = item.abbreviation;
        }
    }
    // puts city, state, and postalcode info into cityStateZip <p>
    cityStateZip.innerText = `${input.location.city}, ${stateAbbrev} ${input.location.postcode}`;
    // creates a <p> with class = DOB
    let birthdate = document.createElement('p')
    entry.appendChild(birthdate);
    birthdate.classList = 'DOB';
    // puts birthdate into <p> using moment for formatting
    birthdate.innerText = "DOB: " + moment(input.dob.date).format("MMM DD, YYYY");
    // creates a <p> with class = memberSince
    let memberSince = document.createElement('p')
    entry.appendChild(memberSince);
    memberSince.classList = 'memberSince';
    // puts membership registration date in <p> using moment
    memberSince.innerText = "Customer since: " + moment(input.registered.date).format("MMM DD, YYYY");
}

function runThis() {
    for (let customer of customers) {
        createEntry(customer);
    }
}

runThis();
