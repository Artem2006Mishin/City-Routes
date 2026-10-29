import RouteCard from "@/components/RouteCard/RouteCard";
import styles from "./RouteList.module.css";

function RouteList({ routes, className = "" }) {
	return (
		<ul className={`${styles.list} ${className}`}>
			{routes.map((route) => (
				<li key={route.id} className={styles.item}>
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
