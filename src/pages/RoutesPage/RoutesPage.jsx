import { useState } from "react";

import styles from "./RoutesPage.module.css";
import RouteHeader from "@/components/RouteHeader/RouteHeader";
import RouteList from "@/components/RouteList/RouteList";
import RouteForm from "@/components/RouteForm/RouteForm";

function RoutesPage() {
	const [routes, setRoutes] = useState([
		{
			id: 1,
			date: "2026-08-29",
			isUpcoming: true,
			title: "Рассвет вдоль Яузы",
			description: "Спокойный маршрут вдоль воды и парков. Утро без спешки.",
			distance: 24,
			difficulty: "easy",
			startLocation: "Ростокинский акведук",
		},
		{
			id: 2,
			date: "2026-09-05",
			isUpcoming: false,
			title: "Коломенское - Царицыно",
			description: "Холмистый маршрут через парки с остановкой у прудов.",
			distance: 38,
			difficulty: "medium",
			startLocation: "Парк Коломенское",
		},
		{
			id: 3,
			date: "2026-09-19",
			isUpcoming: false,
			title: "Кольцо по области",
			description: "Длинный заезд с набором высоты. Нужна подготовка.",
			distance: 85,
			difficulty: "hard",
			startLocation: "Парк Горького",
		},
	]);

	const onSubmit = (route) => {
		console.log(route);
	};

	return (
		<section className={styles.page}>
			<RouteHeader className={styles.header} />
			<RouteList routes={routes} className={styles.list} />
			<RouteForm onSubmit={onSubmit} className={styles.form} />
		</section>
	);
}

export default RoutesPage;
