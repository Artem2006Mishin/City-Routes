import { useState } from "react";
import classes from "./RoutesPage.module.css";
import RouteList from "@/features/routes/components/RouteList/RouteList";
import RouteForm from "@/features/routes/components/RouteForm/RouteForm";

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
		<section className={classes.page}>
			<div className={`${classes.header}`}>
				<div className={classes.content}>
					<h2 className={classes.title}>Ближайшие заезды</h2>
					<p className={classes.description}>
						Маршруты отсортированы по дате старта. Прошедшие остаются в афише.
					</p>
				</div>

				<div className={classes.actions}>фильтр</div>
			</div>

			<RouteList routes={routes} className={classes.list} />
			<RouteForm onSubmit={onSubmit} className={classes.form} />
		</section>
	);
}

export default RoutesPage;
