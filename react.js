function Car(props){
	return(
		<div className="card">// className for jsx sintax
			<div className="card-img">
				<img src={props.car.img} alt={props.car.name}> 
			</div>
			<h3>{props.car.name}</h3>
			<p>{props.car.price} $</p>
		</div>
	)
}
const app = (
	<div className="app">
		<div className="list">
		<Car car={{name: 'BMW', price: 2000, img:'man.jpg'}}	
		</div>
	</div>
	)
ReactDOM.render(app, document.getElementById('root'))