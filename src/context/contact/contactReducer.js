import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  let updatedContacts = [...state.contacts];
  switch (action.type) {
    case ADD_CONTACT:
      updatedContacts.push(action.payload);
      return {
        ...state,
        contacts: updatedContacts,
      };
    case DELETE_CONTACT:
      updatedContacts = updatedContacts.filter(
        (contact) => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: updatedContacts,
      };
    case SET_CURRENT:
      return {
        ...state,
        currentContact: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        currentContact: null,
      };

    case UPDATE_CONTACT:
      updatedContacts = updatedContacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return {
        ...state,
        contacts: updatedContacts,
      };

    case FILTER_CONTACTS:
      return {
        ...state,
        filteredContacts: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filteredContacts: null,
      };
    default:
      return state;
  }
};
