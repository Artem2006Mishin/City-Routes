import styles from "./Button.module.css";

function Button({ children, type = "button", className = "", icon: Icon }) {
	return (
		<button className={`${styles.button} ${styles[className]}`} type={type}>
			<Icon />
			{children}
		</button>
	);
}

export default Button;
