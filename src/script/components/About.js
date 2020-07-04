class AboutApp extends HTMLElement {
	constructor() {
	  	super();
 	}
 
 	connectedCallback(){
   		this.render();
 	}
 
 	render() {
	    this.innerHTML = `
			<article class="mt-8 w-full h-64 bg-gray-800 p-8 text-white" id="about">
				<div class="text-center">
					<h1 class="xl:text-4xl lg:text-4xl md:text-4xl text-3xl">Tentang<h1>
					<h5 class="xl:text-lg lg:text-lg md:text-lg text-sm">BeritaKu adalah website yang menyediakan beragam berita dengan skala nasional dan internasional<h5>
				</div>
			</article>
		`;		
 	}
}

customElements.define("about-app", AboutApp);
	
