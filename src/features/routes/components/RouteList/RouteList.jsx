import RouteCard from "@/features/routes/components/RouteCard/RouteCard";
import classes from "./RouteList.module.css";

function RouteList({ className, routes }) {
	return (
		<ul className={[classes.ul, className].filter(Boolean).join(" ")}>
			{routes.map((route) => (
				<li key={route.id} className={classes.li}>
					<RouteCard
						route={route}
						onEdit={() => console.log("edit")}
						onDelete={() => console.log("delete")}
					/>
				</li>
			))}
		</ul>
	);
}

export default RouteList;
