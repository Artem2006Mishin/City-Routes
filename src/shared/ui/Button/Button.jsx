import classes from "./Button.module.css";

export const BUTTON_VARIANTS = {
	PRIMARY: "primary",
	DELETE: "delete",
	CLEAR: "clear",
	EDIT: "edit",
};

function Button({ children, variant = BUTTON_VARIANTS.PRIMARY, ...props }) {
	return (
		<button
			className={[classes.base, classes[variant]].filter(Boolean).join(" ")}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
