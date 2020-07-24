import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ContactContext } from "../../context/contact/ContactState";

const ContactItem = (props) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { id, name, email, phone, type } = props.contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(props.contact);
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {" " + email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {" " + phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
