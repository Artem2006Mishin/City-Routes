import { ROUTE_DIFFICULTY } from "@/constants/route";

import styles from "./RouteCard.module.css";

import StarIcon from "@/icons/star.svg?react";
import RouteIcon from "@/icons/route.svg?react";

import LocationIcon from "@/icons/location.svg?react";
import EditIcon from "@/icons/edit.svg?react";
import TrashIcon from "@/icons/trash.svg?react";

function formatDate(iso) {
	const date = new Date(iso);

	return {
		day: date.getDate(),
		month: date
			.toLocaleDateString("ru-RU", { month: "short" })
			.replace(".", "")
			.toUpperCase(),
	};
}

function RouteCard({ route, onEdit, onDelete }) {
	const { day, month } = formatDate(route.date);
	const { label, Icon: DifficultyIcon } = ROUTE_DIFFICULTY[route.difficulty];

	return (
		<article className={styles.card}>
			<header className={styles.header}>
				<div className={styles.date}>
					<div className={styles.day}>{day}</div>
					<div className={styles.month}>{month}</div>
				</div>

				{route.isUpcoming && (
					<div className={styles.upcomingBadge}>
						<StarIcon className={styles.upcomingIcon} />
						<div className={styles.upcomingLabel}>БЛИЖАЙШИЙ</div>
					</div>
				)}
			</header>

			<div className={styles.content}>
				<h3 className={styles.title}>{route.title}</h3>
				<p className={styles.description}>{route.description}</p>
			</div>

			<div className={styles.metadata}>
				<div className={styles.distance}>
					<RouteIcon className={styles.distanceIcon} />
					<div className={styles.distanceLabel}>{route.distance} км</div>
				</div>

				<div className={styles.difficultyBadge}>
					<DifficultyIcon
						className={styles.difficultyIcon}
						aria-hidden="true"
					/>
					<div className={styles.difficultyLabel}>{label}</div>
				</div>
			</div>

			<div className={styles.startLocation}>
				<LocationIcon className={styles.startIcon} />
				<div className={styles.locationLabel}>{route.startLocation}</div>
			</div>

			<div className={styles.actions}>
				<button className={styles.editButton} type="button" onClick={onEdit}>
					<EditIcon className={styles.editIcon} />
					<span>Редактировать</span>
				</button>
				<button
					className={styles.deleteButton}
					type="button"
					onClick={onDelete}
				>
					<TrashIcon className={styles.deleteIcon} />
				</button>
			</div>
		</article>
	);
}

export default RouteCard;
