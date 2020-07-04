import './BeritaItem';
import LoadingGif from '../../assets/spin.gif';

class BeritaPencarian extends HTMLElement {
	constructor() {
  		super();
 	}
 
 	set berita(data) {
 		this._daftarBerita = data;
 		this.innerHTML='';
 		this.render();
 	}
 	
 	// render saat loading 
 	onLoading() {
 		this._daftarBerita = [];
 		this.innerHTML = `<span class="flex items-center justify-center mx-auto"><img class="w-32 h-32" src=${LoadingGif}></img><span>`;
 	}
 	
 	// render ketika success
 	render() {
		this.classList.add("overflow-auto");
		this.classList.add("p-4");
		this.classList.add("flex");

 		
 		this._daftarBerita.articles.forEach(berita => {
           const beritaItemElement = document.createElement("berita-item");
           beritaItemElement.berita = berita;
           this.appendChild(beritaItemElement);
 		});
 	}

 	// render ketika error
   	renderError(message) {
       this.innerHTML = `
			<h2 class="text-center text-red-700 lg:text-4xl xl:text-4xl md:text-2xl text-lg">${message}</h2>
       `
    }

}

customElements.define("berita-pencarian", BeritaPencarian);
	