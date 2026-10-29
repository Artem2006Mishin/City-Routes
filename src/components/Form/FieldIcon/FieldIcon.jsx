import styles from "./FieldIcon.module.css";

function FieldIcon({ icon: Icon, onClick }) {
	// иконки нет
	if (!Icon) return null;

	// без обработчика событий
	if (!onClick)
		return (
			<div className={styles.wrapper}>
				<Icon className={styles.icon} />
			</div>
		);

	return (
		<button className={styles.button} type="button" onClick={onClick}>
			<Icon className={styles.icon} />
		</button>
	);
}

export default FieldIcon;
