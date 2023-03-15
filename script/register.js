let petId = 0;

function Pet(owner, name, age, gender, type, breed, service, phone) {
  this.owner = owner;
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.type = type;
  this.breed = breed;
  this.service = service;
  this.phone = phone;
  this.id = petId++;
}

let petSalon = {
  name: "The Fashion Salon",
  address: {
    city: "San Diego",
    street: "123 Main Street",
    zip: 90210,
  },
  hours: {
    open: "9:00 A.M.",
    close: "7:00 P.M.",
  },
  pets: [],
};

function init() {
  let pet1 = new Pet(
    "Shaggy",
    "Scooby-Doo",
    "2",
    "Male",
    "Dog",
    "German Shepherd",
    "Full Body Wash",
    "555-555-5555"
  );
  let pet2 = new Pet(
    "Will",
    "Nita",
    "14",
    "Female",
    "Dog",
    "Lab",
    "Nail trimming",
    "111-111-1111"
  );
  let pet3 = new Pet(
    "Billy",
    "Titan",
    "6",
    "Female",
    "Cat",
    "Bengal",
    "Vaccines",
    "222-222-2222"
  );
  petSalon.pets.push(pet1, pet2, pet3);
  updateInfo();
  displayPetTable();
}
window.onload = init;

let owner = document.getElementById("ownerName");
let pet = document.getElementById("petName");
let age = document.getElementById("petAge");
let gender = document.getElementsByName("petGender");
let type = document.getElementsByName("petType");
let breed = document.getElementById("petBreed");
let service = document.getElementById("petService");
let phone = document.getElementById("ownerPhone");

function isValid(aPet) {
  let valid = true;
  // if (aPet.owner === "") {
  //   valid = false;
  // }
  if (aPet.name === "") {
    valid = false;
  }
  // if (aPet.age === "") {
  //   valid = false;
  // }
  // if (aPet.type === "") {
  //   valid = false;
  // }
  // if (aPet.service === "") {
  //   valid = false;
  // }
  // if (aPet.phone === "") {
  //   valid = false;
  // }
  return valid;
}

function register() {
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) gender.value = gender[i].value;
  }
  for (let i = 0; i < type.length; i++) {
    if (type[i].checked) type.value = type[i].value;
  }
  let newPet = new Pet(
    owner.value,
    pet.value,
    age.value,
    gender.value,
    type.value,
    breed.value,
    service.value,
    phone.value
  );
  if (isValid(newPet) === true) {
    petSalon.pets.push(newPet);
    console.log(petSalon.pets);
    updateInfo();
    displayPetTable();
    clearForm();
  }
}

function updateInfo() {
  document.getElementById("numberOfPets").innerHTML = petSalon.pets.length;
}

function clearForm() {
  document.getElementById("petRegistration").reset();
}
function deletePet(id) {
  let petIndex;
  for (let i = 0; i < petSalon.pets.length; i++) {
    let pet = petSalon.pets[i];
    if (pet.id == id) {
      petIndex = i;
    }
  }
  petSalon.pets.splice(petIndex, 1);
  document.getElementById(id).remove();
  updateInfo();
}
