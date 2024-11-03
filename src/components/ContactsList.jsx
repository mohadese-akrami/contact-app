import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

function ContactsList({ contacts , deleteHandeler }) {
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacs}>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} data={contact}
            deleteHandeler = {deleteHandeler}/>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contacts Yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
