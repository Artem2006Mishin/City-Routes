import styles from "./FormField.module.css";

function FormField({ children, label, hint, onClick }) {
	return (
		<div className={styles.field}>
			<label className={styles.label}>{label}</label>

			{onClick ? (
				<button className={styles.button} type="button" onClick={onClick}>
					{children}
				</button>
			) : (
				<div className={styles.wrapper}>{children}</div>
			)}

			{hint && <p className={styles.hint}>{hint}</p>}
		</div>
	);
}

export default FormField;
