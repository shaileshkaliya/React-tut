import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactCard from './components/ContactCard';

function App() {

  let list = [{name:"Shailesh",number:976}];
  const [contactList, setContactList] = useState(list);

  let addToList = (contact) => {
    setContactList([...contactList, { ...contact }]);
    console.log(contactList)
  }


  return (
    <div className="container">
      <div className="header">
        <Header> </Header>
      </div>
      <AddContact addToList = {addToList} ></AddContact>
      <div>
        <ContactCard contactList = {contactList}>
        </ContactCard>
      </div>
    </div>
  );
}

export default App;
