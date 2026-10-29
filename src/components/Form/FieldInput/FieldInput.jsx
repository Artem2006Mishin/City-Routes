import styles from "./FieldInput.module.css";

function FieldInput(props) {
	return <input className={styles.input} {...props} />;
}

export default FieldInput;
