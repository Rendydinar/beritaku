class BeritaItem extends HTMLElement {
	constructor() {
	  	super();
	}

 	set berita(berita) {
 		this._berita = berita;
 		this.render();
 	}

 	render() {
	    this.innerHTML = `
			<div class="mx-2 max-w-xs rounded overflow-hidden shadow-lg">
			  <img class="max-w-screen-sm h-32" src=${this._berita.urlToImage}>
			  <div class="px-6 py-4">
			    <div class="font-bold xl:text-xl lg::text-xl md:text-lg text-lg mb-2">${this._berita.title}</div>
			    <p class="text-gray-700 xl:text-base lg:text-base md:text-base text-sm">
			      ${this._berita.description.slice(0,50)}....
			    </p>
			  </div>
			  <div class="m-3">
		 		<a href=${this._berita.url} target="_blank" rel="noopener" class="xl:text-lg lg:text-lg md:text-lg text-md bg-pink-500 hover:bg-pink-700 text-white font-bold py-1 px-2 border border-pink-700 rounded">Baca</a>
			  </div>

			</div>
		`;	
 	}

}

customElements.define("berita-item", BeritaItem);
