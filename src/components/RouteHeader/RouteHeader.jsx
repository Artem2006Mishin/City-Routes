import styles from "./RouteHeader.module.css";

function RouteHeader({ className = "" }) {
	return (
		<div className={`${styles.header} ${className}`}>
			<div className={styles.content}>
				<h2 className={styles.title}>Ближайшие заезды</h2>
				<p className={styles.description}>
					Маршруты отсортированы по дате старта. Прошедшие остаются в афише.
				</p>
			</div>

			<div className={styles.actions}>фильтр</div>
		</div>
	);
}

export default RouteHeader;
