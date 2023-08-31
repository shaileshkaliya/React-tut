import { useState } from "react";
import "./AddContact.css";

let AddContact = ({addToList}) => {
  let data = { name: "", number: "" };

  let list = [];
  const [contactList, setContactList] = useState(list);

  const [contact, setContact] = useState(data);

  let handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name == "" || contact.number == "") {
      alert("All fields are mandatory");
    } else {
        addToList(contact);
    //   setContactList([...contactList, { ...contact }]);
      setContact(data);
    }
  };
  return (
    <div className="form-div">
      <form action="post">
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <input
          type="number"
          name="number"
          value={contact.number}
          onChange={handleChange}
          placeholder="Enter Number"
        />
        <input type="submit" value="Add Contact" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default AddContact;
