export default function Card(props) {
	return (
		<div>
			<button onClick={props.onClose}>X</button>
			<h2>{props.name}</h2>
			<h4>ID: {props.id}</h4>
			<h4>status: {props.status}</h4>
			<h4>species: {props.species}</h4>
			<h4>gender: {props.gender}</h4>
			<h4>origin: {props.origin}</h4>
			<img src={props.image} alt={props.name} />
		</div>
	);
}
