import styles from "./ContactItem.module.css";

function ContactItem({
  data: { id, name, lastname, email, phone },
  deleteHandeler,
}) {
  return (
    <li className={styles.item}>
      <p>
        {name} {lastname}
      </p>
      <p>
        <span>##</span>
        {email}
      </p>
      <p>
        <span>%%</span>
        {phone}
      </p>
      <button onClick={() => deleteHandeler(id)}>Del</button>
    </li>
  );
}

export default ContactItem;
