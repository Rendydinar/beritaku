class JumbotronApp extends HTMLElement {
	constructor() {
	  	super();
 	}
 
 	connectedCallback(){
   		this.render();
 	}
 
	render() {
    	this.innerHTML = `
			<article class="w-full bg-gray-800 xl:p-32 lg:p-32 p-16 text-white">
				<div class="text-left">
					<h1 class="xl:text-4xl lg:text-4xl md:text-2xl text-3xl">Selamat Datang Di BeritaKu<h1>
					<h5 class="md:text-lg text-sm">Cara Dan Eksplorasi Informasi Yang Ada Di Sekitar Anda<h5>
				</div>
			</article>
		`;		
 	}
}

customElements.define("jumbotron-app", JumbotronApp);
	
