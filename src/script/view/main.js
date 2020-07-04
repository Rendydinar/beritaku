import '../components/Header.js';
import '../components/BeritaPencarian.js';
import '../components/SearchBar.js';
import '../components/Jumbotron.js';
import '../components/BeritaPopulerIndonesia.js';
import '../components/BeritaPopulerGlobal.js';
import '../components/Kategori/Kategori.js';
import '../components/About.js';
import '../components/Footer.js';
import DataSource from '../data/data-source.js';

// fungsi untuk membuat element h1
const makeH1 = (title) => {
  let h1 = document.createElement('h1');
  h1.classList.add('xl:text-3xl');
  h1.classList.add('lg:text-3xl');
  h1.classList.add('md:text-3xl');
  h1.classList.add('text-2xl');
  h1.classList.add('p-4');
  h1.textContent = title;

  return h1;
}

// fungsi untuk menambahkan element, dengan acuan element setelahnya
const insertAfter = (referenceNode, newNode) => {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const main = () => {
  const searchElement = document.querySelector("search-app");
  const categoriItem = document.querySelectorAll('categori-item');
  const beritaPencarian = document.querySelector('berita-pencarian');
  const beritaPopulerIndonesia = document.querySelector('berita-populer-indonesia');
  const beritaPopuler = document.querySelector('berita-populer-global');

  // menambahkan title berita terbaru dan populer
  insertAfter(document.querySelector('jumbotron-app'), makeH1('Berita Populer Indonesia'));
  insertAfter(document.querySelector('berita-pencarian'), makeH1('Berita Populer Global'));

  const onCategoriItemClicked = async (e) => {
   try {    
      beritaPencarian.onLoading();
      console.log(e.target.dataset.url);
      const resultsBeritaByCategori = await DataSource.searchByCategori(e.target.dataset.url);
      beritaPencarian.berita = resultsBeritaByCategori;
    } catch(errMsg) {
      beritaPencarian.renderError(errMsg);
    }
  }

  const showBeritaPopulerIndonesia = async () => {
    try {
      const resultsBeritaPopulerIndonesia = await DataSource.searchByBeritaPopulerIndonesia();
      beritaPopulerIndonesia.berita = resultsBeritaPopulerIndonesia;
    } catch(errMsg) {
      beritaPopulerIndonesia.renderError(errMsg);
    }
  }

  const showBeritaPopulerGlobal = async () => {
    try {
      const resultsBeritaPopulerGlobal = await DataSource.searchByBeritaPopulerGlobal();
      beritaPopuler.berita = resultsBeritaPopulerGlobal;
    } catch(errMsg) {
      beritaPopuler.renderError(errMsg);
    }
  }

  const onButtonSearchClicked = async () => {
    try {
      beritaPencarian.onLoading();
      const resultsBeritaPencarian = await DataSource.searchByKey(searchElement.value);
      beritaPencarian.berita = resultsBeritaPencarian;
    } catch(errMsg) {
      beritaPencarian.renderError(errMsg);
    }
  }
  
  // Looping untuk memberikan event click pada element categori-item
  categoriItem.forEach(item => item.addEventListener('click', onCategoriItemClicked))

  // menambahkan event on click pada element search-app  

  searchElement.clickEvent = onButtonSearchClicked; 
  // Render Berita Populer Global Dan Berita Populer Indonesia 
  showBeritaPopulerIndonesia();
  showBeritaPopulerGlobal();  
};
 
export default main;
