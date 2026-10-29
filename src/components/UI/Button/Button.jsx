import classes from "./Button.module.css";

export const BUTTON_VARIANTS = {
	PRIMARY: "primary",
	DELETE: "delete",
	CLEAR: "clear",
	EDIT: "edit",
};

export const Button = ({
	children,
	variant = BUTTON_VARIANTS.PRIMARY,
	...props
}) => {
	const buttonClasses = [classes.base, classes[variant]]
		.filter(Boolean)
		.join(" ");

	return (
		<button className={buttonClasses} {...props}>
			{children}
		</button>
	);
};
