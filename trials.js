// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([
	['home', '510-867-5309'],
	['mobile', '415-555-1212'],
	['business', '415-123-4567']
	]);


function accountInfo(name, number, business) {
	console.log(`Account Holder Name: ${name}`);
	console.log(`Account Holder Number: ${number}`);
	console.log(`Business Name: ${business}`);
}

accountInfo(accountHolder, accountNumber, businessName);

// Add some phone numbers to our map

function showAddresses(addresses) {
	for (let address of addresses){
		console.log(`Address: ${address}`);
	}
}

function showPhoneNums(numbers) {
	for (let num of numbers){
		console.log(num[0] + `:` + num[1]);
	}


}

showPhoneNums(phoneNumbers)
// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 


// Add function to print all addresses, including a header


// Add function to print phone types and numbers


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
let transactions = new Map([])

// Add function to add transactions
function addTransaction(date, amount) {
	transactions.set(date, amount);
	
}

addTransaction('May-2', -500)
addTransaction('May-13', 1200)
addTransaction('May-15', -100)
addTransaction('May-21', -359)
addTransaction('May-29', +2200)
console.log(transactions)

// Use the function to add transactions


// Add function to show balance status

function showBalaceStatus(balance) {
	if (balance < 0){
		console.log('YOU ARE OVERDRAWN');
	}else if (balance > 0 && balance < 20){
		console.log('You are close to zero balance');
	}else {
		console.log('Thank you for your business.');
	}
}


showBalaceStatus(2200)
showBalaceStatus(5)
showBalaceStatus(-30)


function showTransactions(cartograph, begBalance = 26000) {
	console.log(begBalance);
	for (let anyTransaction of transactions){
		
	}
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




