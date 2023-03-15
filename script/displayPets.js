function displayPetTable() {
  const TBODY = document.getElementById("pet-table");
  let tr = "";
  for (let i = 0; i < petSalon.pets.length; i++) {
    let pet = petSalon.pets[i];
    tr += `
    <tr id="${pet.id}">
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.type}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td>${pet.owner}</br></br>
        ${pet.phone}</td>
        <td><button onclick="deletePet(${pet.id});">🗑️</button></td>
    </tr>`;
  }
  TBODY.innerHTML = tr;
}
