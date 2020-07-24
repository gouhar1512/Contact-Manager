import React, { useContext, useRef, useEffect } from "react";
import { ContactContext } from "../../context/contact/ContactState";
const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  const { filteredContacts, filterContacts, clearFilter } = contactContext;
  useEffect(() => {
    if (filteredContacts == null) {
      text.current.value = "";
    }
  });
  const onChange = (e) => {
    if (
      text.current.value !== "" &&
      text.current.value.split("").indexOf("\\") === -1 &&
      text.current.value.split("").indexOf("+") === -1 &&
      text.current.value.split("").indexOf("?") === -1
    ) {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search Contacts"
        ref={text}
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
