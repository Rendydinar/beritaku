class HeaderApp extends HTMLElement {
	constructor() {
  		super();
 	}
 
 	connectedCallback(){
   		this.render();
 	}

 	openNav() {
		if(document.getElementById("nav-content").classList.value.includes('hidden')) {
			document.getElementById("nav-content").classList.remove("hidden");
			document.getElementById("nav-content").classList.value.includes('block') 
		} else {
			document.getElementById("nav-content").classList.remove("block")
			document.getElementById("nav-content").classList.toggle("hidden")
		}
	}

 
	render() {
    this.innerHTML = `
			<nav class="flex items-center justify-between flex-wrap bg-pink-500 p-6">
				<div class="flex items-center flex-shrink-0 text-white mr-6">
			    	<span class="font-semibold xl:text-3xl lg:text-3xl md:text-3xl text-xl tracking-tight">BeritaKu</span>
			  	</div>
			  	<div class="block lg:hidden">
			    	<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-pink-200 border-pink-400 hover:text-white hover:border-white">
			      		<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			    	</button>
			  	</div>
			  	<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
			    	<div class="text-sm lg:flex-grow">
			      		<a href="#berita-populer-indonesia" class="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-4">Berita Populer Indonesia</a>
			      		<a href="#berita-populer-global" class="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-4">Berita Populer Global</a>
			      		<a href="#about" class="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white">Tentang</a>
				    </div>
				</div>
			</nav>
		`;		

	    this.querySelector("#nav-toggle").addEventListener("click", this.openNav); 

 	}
}


customElements.define("header-app", HeaderApp);
