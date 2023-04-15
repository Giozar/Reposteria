const plantilla = `
<div class="card">
<div class="card-circle"></div>
<div class="card-image">
	<img src="/src/assets/img/catalog/chocolate.png" alt="Pastel" />
</div>
<div class="card-title">
	<h3>Chocolate Cake</h3>
</div>
<div class="card-details">
	<div class="card-size el">
		<div class="size-title">Tamaño:</div>
		<div class="size small">C</div>
		<div class="size medium">M</div>
		<div class="size big">G</div>
	</div>

	<div class="card-color el">
		<div class="color-title">Color:</div>
		<div class="color rosa"></div>
		<div class="color amarillo"></div>
		<div class="color cafe"></div>
		<div class="color blanco"></div>
	</div>

	<div class="card-toppings el">
		<div class="toppings-title">Carteles:</div>

		<div class="topping-options">
			<div class="topping-option">
				<input type="radio" id="baby-shower" name="topping" value="baby-shower" />
				<label for="baby-shower">Baby</label>
			</div>
			<div class="topping-option">
				<input type="radio" id="cumpleanos" name="topping" value="cumpleanos" />
				<label for="cumpleanos">Cumpleaños</label>
			</div>
			<div class="topping-option">
				<input type="radio" id="boda" name="topping" value="boda" />
				<label for="boda">Boda</label>
			</div>
			<div class="topping-option">
				<input type="radio" id="quinceanera" name="topping" value="quinceanera" />
				<label for="quinceanera">Quinceañera</label>
			</div>
		</div>
	</div>

	<div class="card-buy el">
		<button class="comprar-btn">
			Comprar ahora
		</button>
	</div>
</div>
</div>
        `;
const productos = [
	{
		nombre: 'vainilla',
	}
]

const createCard = () => {
	const contenedorCatalogo = document.querySelector('.catalog-container'); 
	contenedorCatalogo.innerHTML = plantilla;
}

export {
	createCard
}

