class FooterApp extends HTMLElement {
	constructor() {
  		super();
 	}
 
 	connectedCallback(){
   		this.render();
 	}
 
	render() {
	    this.innerHTML = `
			<footer class="w-full bg-gray-200 p-8 text-white mt-12">
			    	<p class="text-center text-black" >&copy; Copyright ${new Date().getFullYear()} - BeritaKu.com</p>
			</footer>
		`;		
 	}
}

customElements.define("footer-app", FooterApp);
	
