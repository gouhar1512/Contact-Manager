import React, { useState, useContext, useEffect } from "react";
import { ContactContext } from "../../context/contact/ContactState";
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const {
    currentContact,
    addContact,
    clearCurrent,
    updateContact,
  } = contactContext;

  useEffect(() => {
    if (currentContact) {
      setContact(currentContact);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [currentContact]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (currentContact == null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <h2 className="text-primary">
        {currentContact ? "Update Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        id="personal"
        checked={type === "personal"}
        onChange={onChange}
      />
      <label htmlFor="personal">Personal</label>{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        id="professional"
        checked={type === "professional"}
        onChange={onChange}
      />
      <label htmlFor="professional"> Professional</label>
      <div>
        <input
          type="submit"
          value={currentContact ? "Update Contact" : "Add Contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      <div>
        {currentContact ? (
          <div>
            <input
              type="submit"
              value="Cancel"
              className="btn btn-light btn-block"
              onClick={clearAll}
            />
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
