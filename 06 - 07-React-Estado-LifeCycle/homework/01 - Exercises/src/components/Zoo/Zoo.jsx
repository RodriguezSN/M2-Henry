import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
	/* Escribe acá tu código */
	const [zoo, setZoo] = React.useState({
		zooName: "",
		animals: [],
		species: [],
		allAnimals: []
	});
	const handleInputChange = (event) => {
		setZoo({ ...zoo, zooName: event.target.value });
	};
	React.useEffect(() => {
		fetch("http://localhost:3001/zoo")
			.then((res) => res.json())
			.then((data) =>
				setZoo({
					...zoo,
					animals: data.animals,
					species: data.species,
					allAnimals: data.animals
				})
			)
			.catch((error) => console.log(error));
	}, []);

	const handleSpecies = (evento) => {
		const { value } = evento.target;
		setZoo({
			...zoo,
			animals: zoo.allAnimals.filter((animal) => {
				return animal.specie === value;
			})
		});
	};
	const handleAllSpecies = () => {
		setZoo({ ...zoo, animals: zoo.allAnimals });
	};
	return (
		<div>
			<label>Zoo Name:</label>
			<input
				type="text"
				value={zoo.zooName}
				onChange={handleInputChange}
			></input>
			<h1>{zoo.zooName}</h1>
			<Species
				species={zoo.species}
				handleSpecies={handleSpecies}
				handleAllSpecies={handleAllSpecies}
			/>
			<Animals animals={zoo.animals} />
		</div>
	);
}
