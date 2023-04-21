const plantilla = `
<div class="card">
<div class="card-circle">
	<p class="price"> $00.00</p>
</div>
<div class="card-image">
	<img src="src/assets/img/catalog/chocolate.png" alt="Pastel" />
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

	<div class="card-topics el">
		<div class="topics-title">Carteles:</div>

		<div class="topic-options">
			<div class="topic-option">
				<input type="radio" id="baby-shower" name="topic" value="baby-shower" />
				<label for="baby-shower">Baby</label>
			</div>
			<div class="topic-option">
				<input type="radio" id="cumpleanos" name="topic" value="cumpleanos" />
				<label for="cumpleanos">Cumpleaños</label>
			</div>
			<div class="topic-option">
				<input type="radio" id="boda" name="topic" value="boda" />
				<label for="boda">Boda</label>
			</div>
			<div class="topic-option">
				<input type="radio" id="quinceanera" name="topic" value="quinceanera" />
				<label for="quinceanera">Quinceañera</label>
			</div>
		</div>
	</div>

	<!--	<div class="card-description">
		<p class="card-description-title">Descripción</p>
		<p class="card-description-txt">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
			dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
			ex ea commodo consequat.
		</p>
	</div>	-->

	<div class="card-buy el">
		<button class="comprar-btn">
			Comprar ahora
		</button>
	</div>
</div>
</div>`;
const productos = [
	{
		nombre: 'vainilla',
	}
]

const createCard = () => {
	const contenedorCatalogo = document.querySelector('.catalog-container'); 
	contenedorCatalogo.innerHTML += plantilla;
}

export {
	createCard
}

