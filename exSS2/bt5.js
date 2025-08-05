let phoneBook = [];

const addContact = (name, phone, email) => {
    phoneBook.push({ name, phone, email });
};

const displayContact = () => {
    phoneBook.forEach(contact => {
        console.log(`ten: ${contact.name}, Sdt: ${contact.phone}, Email: ${contact.email}`);
    });
};

addContact("quang", "123456789", "abc@gmail.com");
addContact("quang1", "987654321", "edf@gmail.com");

displayContact();