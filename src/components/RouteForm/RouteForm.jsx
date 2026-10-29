import { useState, useRef } from "react";

import styles from "./RouteForm.module.css";

import FormField from "@/components/Form/FormField/FormField";
import FieldIcon from "@/components/Form/FieldIcon/FieldIcon";
import FieldInput from "@/components/Form/FieldInput/FieldInput";
import Button from "@/components/UI/Button/Button";

import AddIcon from "@/icons/add.svg?react";
import RouteIcon from "@/icons/route.svg?react";
import DateIcon from "@/icons/date.svg?react";
import HashtagIcon from "@/icons/hashtag.svg?react";

// import EasyIcon from "@/icons/easy.svg?react";
// import MediumIcon from "@/icons/medium.svg?react";
// import HardIcon from "@/icons/hard.svg?react";

const INITIAL_VALUES = { title: "", date: "", distance: 0 };

function RouteForm({ onSubmit, className = "" }) {
	const [values, setValues] = useState(INITIAL_VALUES);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit(values);
		setValues(INITIAL_VALUES);
	};

	const dateInputRef = useRef(null);

	return (
		<form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
			<h2 className={styles.title}>Добавить маршрут</h2>

			<FormField label="Название маршрута" hint="Минимум 3 символа">
				<FieldInput
					name="title"
					type="text"
					value={values.title}
					onChange={handleChange}
					placeholder="Например, Рассвет вдоль Яузы"
				/>
				<FieldIcon icon={RouteIcon} />
			</FormField>

			<div className={styles.wrapper}>
				<FormField
					label="Дата старта"
					hint="Формат: день · месяц · год"
					onClick={() => dateInputRef.current?.showPicker()}
				>
					<FieldInput
						ref={dateInputRef}
						name="date"
						type="date"
						value={values.date}
						onChange={handleChange}
					/>
					<FieldIcon icon={DateIcon} />
				</FormField>

				<FormField label="Дистанция" hint="Положительное число">
					<FieldInput
						name="distance"
						type="number"
						value={values.distance}
						onChange={handleChange}
					/>
					<FieldIcon icon={HashtagIcon} />
				</FormField>
			</div>

			<div className={styles.wrapper}>
				<Button type={"submit"} className={"addButton"} icon={AddIcon}>
					Добавить
				</Button>
			</div>
		</form>
	);

	// return (
	// 	<form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
	//
	// 		<fieldset className={styles.difficultyField}>
	// 			<span className={styles.fieldLabel}>Сложность</span>
	// 			<div className={styles.difficultyOptions}>
	// 				<label className={styles.difficultyOption}>
	// 					<input type="radio" name="difficulty" value="easy" />
	// 					<span className={styles.difficultyChoice}>
	// 						<EasyIcon />
	// 						Легко
	// 					</span>
	// 				</label>
	// 				<label className={styles.difficultyOption}>
	// 					<input type="radio" name="difficulty" value="middle" />
	// 					<span className={styles.difficultyChoice}>
	// 						<MediumIcon />
	// 						Средне
	// 					</span>
	// 				</label>
	// 				<label className={styles.difficultyOption}>
	// 					<input type="radio" name="difficulty" value="difficult" />
	// 					<span className={styles.difficultyChoice}>
	// 						<HardIcon />
	// 						Сложно
	// 					</span>
	// 				</label>
	// 			</div>
	// 		</fieldset>

	// 		<div className={styles.field}>
	// 			<label className={styles.fieldLabel} htmlFor="route-start">
	// 				Место старта
	// 			</label>
	// 			<input
	// 				className={styles.input}
	// 				id="route-start"
	// 				name="start"
	// 				placeholder="Например, у входа в парк"
	// 			/>
	// 			<p className={styles.fieldHint}>Укажите понятный ориентир</p>
	// 		</div>

	// 		<div className={styles.field}>
	// 			<div className={styles.labelRow}>
	// 				<label className={styles.fieldLabel} htmlFor="route-description">
	// 					Описание
	// 				</label>
	// 				<span className={styles.characterCount}>0 / 240</span>
	// 			</div>
	// 			<textarea
	// 				className={styles.textarea}
	// 				id="route-description"
	// 				name="description"
	// 				placeholder="Опишите темп, покрытие и важные детали маршрута."
	// 				rows="4"
	// 			/>
	// 			<p className={styles.fieldHint}>До 240 символов</p>
	// 		</div>

	// 		<div className={styles.formActions}>
	// 			<button className={styles.clearButton} type="button">
	// 				Очистить
	// 			</button>
	// 			<button className={styles.submitButton} type="submit">
	// 				<AddIcon />
	// 				Добавить
	// 			</button>
	// 		</div>
	// 	</form>
	// );
}

export default RouteForm;
