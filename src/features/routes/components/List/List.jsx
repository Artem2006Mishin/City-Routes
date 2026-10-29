import Card from "@/features/routes/components/Card/Card";
import classes from "./List.module.css";

function List({ className, routes }) {
	return (
		<ul className={[classes.ul, className].filter(Boolean).join(" ")}>
			{routes.map((route) => (
				<li key={route.id} className={classes.li}>
					<Card
						route={route}
						onEdit={() => console.log("edit")}
						onDelete={() => console.log("delete")}
					/>
				</li>
			))}
		</ul>
	);
}

export default List;
