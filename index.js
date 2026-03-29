// 1. Values, Data Types, and Operations:
/* 
Psuedocode:
1. Declare a string for the passenger's name.
2. Declare a string for the Qatar priviledge club member number.
3. Declare a number for baggage allowance based on membership tier.
4. Declare a string for the Qatar Airways local office by country.
5. Declare a boolean to check if the passenger qualifies for benefits.
*/

// Code:
let passengerName = "Sherie Chandler"; // Passenger's first and last name.
let privilegeClubNumber = "516043599"; // Qatar privilege club member number.
let baggageAllowance = 40;  // Baggage allowance in kg based on membership tier.
let localOfficeNumber = "+1-866-829-1267"; // Emergency contact number by country.
let privilegeClubMember = true; // True if passenger qualifies for privilege club benefits.
console.log("The passenger's name is: " + passengerName);
console.log("Qatar's Privilege Club membership number:" + " " + privilegeClubNumber);
console.log("The baggage allowance for this membership tier is:" + " " + baggageAllowance + " " + "kg");
console.log("Qatar Airways main customer service number in the United States is: " + localOfficeNumber);
console.log("This passenger is a Privilege Club member:" + " " + privilegeClubMember);

// 2. String Characters Together
/* Psuedocode:
1. Combine passenger name and membership tier.
2. Get the first three letters on the passenger's last name.
3. Check the length of the passenger's privilege club number.
*/
// Code
let membershipTier = "Platinum";
console.log(passengerName + " is a " + membershipTier + " member"); // Combined strings.

// Get the first 3 letters of last name:
let lastName = "Chandler";
let firstThreeLetters = lastName.slice(0,3);
console.log("The first three letters of the passenger's last name is:" + " " + firstThreeLetters);

// Find length of membership number:
let membershipLength = privilegeClubNumber.length;
console.log(passengerName  + "'s Privilege Club number has" + " " + membershipLength + " " + "characters.");

// 3. Control Structures & Logic
/*
PsuedoCode:
1. Check the passenger's Qatar Airways membership tier.
2. If Gold or Platinum, unlock full OneWorld partner benefits.
3. If Silver, allow extra baggage but not lounge access.
4. If Burgundy, no partner benefits are applied.
5. Check that the live chat message is not empty before submitting.
*/

// Code

// Check passenger membership tier and apply benefits
if (membershipTier === "Platinum" || membershipTier === "Gold") {
    console.log("Full OneWorld Alliance benefits applied: Lounge access and full baggage allowance.");
} else if (membershipTier === "Silver") {
    console.log("Partial benefits applied: Extra baggage allowed, no lounge access.");
} else {
console.log("No OneWorld Alliance partner benefits applied for Burgundy tier. ");
}

// Check that the live chat message is not empty before submitting:
let chatMessage = "";
if (chatMessage) {
    console.log("Message sent: " + chatMessage);
} else {
    console.log ("Error \u2639 : Please enter a message before clicking send.");
}

// 4. Building Arrays:
/* 
Psuedocode:
1. Create an array of Qatar Airways local office numbers by country.
2. Create an array of OneWorld Alliance partner airlines.
3. Add a new country office number and a new partner airline using bracket notation.
4. Pull a specific item from each array by index.
*/

// Create array literals:
let emergencyContacts = ["+1-866-829-1267", "+44-330-912-7415", "+974-4023-0000"];
let partnerAirlines = ["American Airlines", "British Airways", "Qantas"];

// Add a new country and airline to existing arrays using [] notation.
emergencyContacts[3] = "+974-4023-0000"; // Qatar Airways Doha HQ
partnerAirlines[3] = "Turkish Airlines";

// Look up local office number and partner airline:
console.log("US Contact: " + emergencyContacts[0]);
console.log("Partner Airline: " + partnerAirlines[1]);
let currentCountry = "USA";
console.log("You are currently in the " + currentCountry + ".");
console.log("For immediate assistance, contact: " + emergencyContacts[0]);
console.log("Qatar Airways is operating limited flights due to current disruptions.");
console.log("Your journey may be supported by a OneWorld Alliance partner such as: " + partnerAirlines[1]);
console.log("Your Privilege Club benefits will remain active! \u263A ");

// 5. Using Arrays
/*
Psuedocode:
1. Group traveling family members together into one multi dimensional array.
2. Store each passenger's name, member tier, and seat assignment in their own subarray.
3. Use two sets of brackets to find a specific family member’s information in the group.
4. Show their seat assignment and confirm their benefits still apply on the redirected flight. 
*/
// Code
let familyGroup = [
["Sherie Chandler", "Platinum", "12A"],
["Armon Chandler", "Platinum", "12B"],
["Amir Chandler", "Platinum", "12C"],
];

// Pull up each passenger's info:
let passenger = familyGroup[0];
console.log("Passenger: " + passenger[0]);
console.log("Membership Tier: " + passenger[1]);
console.log("Seat Assignment: " + passenger[2]);

// Look up another family member directly using two sets of brackets:
console.log("Seat for Armon Chandler: " + familyGroup[1][2]);
// Confirm the whole family's benefits carry over to partner alliance:
console.log("Your family seating and benefits will carry over to your redirected flight. \u263A");

// 6. Creating & Using Objects:
/*
Pseudocode:
1. Create an object to store a passenger's mobile display preferences. 
2. Add properties for device type, font size, language, floating keyboard, and chat input visibility.
3. Access each property to apply the correct settings in the mobile app.
4. Display the passenger's current preferences so they can confirm or update them.
*/

// Code
let displaySettings = {
    deviceType: "Android",
    fontSize: "Medium",
    language: "English",
    floatingKeyboard: true,
    chatInputVisible: true
};

// Access each setting so the app can apply the correct display preferences for the user:
console.log("Device type: " + displaySettings.deviceType);
console.log("Your font size is set to: " + displaySettings.fontSize);
console.log("Your preferred language is: " + displaySettings.language);
console.log("Floating keyboard: " + (displaySettings.floatingKeyboard ? "On" : "Off"));
console.log("Your live chat input box will stay visible while you type: " + displaySettings.chatInputVisible);

// Confirm settings are working:
console.log("Your display preferences have been saved. You can update them anytime in settings.");
console.log("Have a great flight, " + passengerName + "!");