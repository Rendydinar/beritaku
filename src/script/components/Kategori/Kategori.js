import './kategori-item.js';

class Kategori extends HTMLElement {
	constructor() {
  		super();
  		// data EnpPoint Api Untuk Kategori Berita
  		this._categoriList = [
  			{ title: 'business', url: 'https://newsapi.org/v2/top-headlines/?country=id&category=business&apiKey=e2786195264d4f26abf5ad4b2b4733d8' },
  			{ title: 'technology', url: 'https://newsapi.org/v2/top-headlines/?country=id&category=technology&apiKey=e2786195264d4f26abf5ad4b2b4733d8' },
  			{ title: 'sports', url: 'https://newsapi.org/v2/top-headlines/?country=id&category=sports&apiKey=e2786195264d4f26abf5ad4b2b4733d8' },
  			{ title: 'science', url: 'https://newsapi.org/v2/top-headlines/?country=id&category=science&apiKey=e2786195264d4f26abf5ad4b2b4733d8' },
  			{ title: 'health', url: 'https://newsapi.org/v2/top-headlines/?country=id&category=health&apiKey=e2786195264d4f26abf5ad4b2b4733d8' },
  			{ title: 'entertainment', url: 'https://newsapi.org/v2/top-headlines/?country=id&category=entertainment&apiKey=e2786195264d4f26abf5ad4b2b4733d8' },
  		]
 	}
 
 	connectedCallback(){
	   	this.render();
 	}
 
 	render() {
		this.classList.add('my-6');
		this.classList.add('w-full');
		this.classList.add('bg-gray-800');
		this.classList.add('xl:p-24');
		this.classList.add('lg:p-24');
		this.classList.add('md:p-16');
		this.classList.add('sm:p-8');
		this.classList.add('p-8');
		this.classList.add('text-white');
		this.classList.add('flex');
		this.classList.add('flex-wrap');
		this.setAttribute("id", "kategori");

	    let h1 = document.createElement('h1');
		h1.classList.add('xl:text-3xl');
		h1.classList.add('lg:text-3xl');
		h1.classList.add('md:text-3xl');
		h1.classList.add('text-2xl');
	    h1.classList.add('p-4');
	    h1.classList.add('text-center');
	    h1.textContent = 'Kategori Berita';

	    let cetegoriWrap = document.createElement('div');
		cetegoriWrap.classList.add('flex');
		cetegoriWrap.classList.add('flex-wrap');

	    this.appendChild(h1);

		this._categoriList.forEach(categori => {
			const categoriItemElement = document.createElement('categori-item');
			categoriItemElement.categori = categori;
			cetegoriWrap.appendChild(categoriItemElement);
		});

		this.appendChild(cetegoriWrap);
 	}
}

customElements.define("kategori-app", Kategori);
	