class CategoriItem extends HTMLElement {
	constructor() {
	  	super();
	}

 	set categori(categori) {
 		this._categori = categori;
 		this.render();
 	}

 	render() {
		this.classList.add('mr-2');
		this.classList.add('mb-1');

	    this.innerHTML = `
	    	<button data-url=${this._categori.url} class="categori mb-2 bg-gray-200 rounded-full px-2 py-1 xl:text-sm lg:text-sm md:text-sm text-xs font-semibold text-gray-700">${this._categori.title}</button>
		`;	

 	}
 
}

customElements.define("categori-item", CategoriItem);
