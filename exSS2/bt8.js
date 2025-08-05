const displayUserInfo = ({ user }) => {

  let { name, age, location, contact, job } = user;
  let { city: locationCity, country: locationCountry } = location;

  let contactEmail = "unknown";
  let contactPhone = "unknown";

  if (contact) {
    ({ email: contactEmail, phone: contactPhone } = contact);
  }

  let jobTitle = "unknown";
  let jobCompany = "unknown";

  if (job) {

    ({ title: jobTitle, company: jobCompany } = job);
  }

  return `${name} is ${age} years old, lives in ${locationCity}, ${locationCountry}, works as ${jobTitle} at ${jobCompany}, and can be contacted via ${contactPhone} or ${contactEmail}.`;
};

console.log(

  displayUserInfo({
    user : {
      name: "QUANG",
      age: 10,
      location: { city: "HA NOI", country: "Vietnam" },
    },
  })
  
);