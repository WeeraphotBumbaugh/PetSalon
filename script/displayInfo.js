function displayFooterInfo() {
  document.getElementById(
    "information"
  ).innerHTML = `<p>Welcome to ${petSalon.name}.</p>
   <p>We are located at: ${petSalon.address.city}, ${petSalon.address.street}, ${petSalon.address.zip}</p>
   <p>We are open from: ${petSalon.hours.open}, ${petSalon.hours.close}</p>`;
  displayPetInfo();
}
