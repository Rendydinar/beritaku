class DataSource {
  // Fetch Api Untuk Mengambil Berita Berdasarkan Kategori
  static searchByCategori(data) {
    return fetch(data)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if(responseJson.status === "ok" && responseJson.totalResults !== 0) {
          return Promise.resolve(responseJson);
        } else if(responseJson.status === "ok" && responseJson.totalResults === 0) {
          return Promise.reject('Berita Tidak Dapat Ditemukan');
        } else {
          return Promise.reject(responseJson.message);
        }
      })
  }

  // Fetch Api Untuk Mengambil Berita Berdasarkan Pencarian
  static searchByKey(key) {
    return fetch(`https://newsapi.org/v2/everything?q=${key}&apiKey=e2786195264d4f26abf5ad4b2b4733d8`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if(responseJson.status === "ok" && responseJson.totalResults !== 0) {
          return Promise.resolve(responseJson);
        } else if(responseJson.status === "ok" && responseJson.totalResults === 0) {
          return Promise.reject('Berita Tidak Dapat Ditemukan');
        } else {
          return Promise.reject(responseJson.message);
        }
      })
  }

  // Fetch Api Untuk Mengambil Berita Berdasarkan Berita Top Headlines Di Indonesia
  static searchByBeritaPopulerIndonesia() {
    return fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=e2786195264d4f26abf5ad4b2b4733d8')
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if(responseJson.status === "ok" && responseJson.totalResults !== 0) {
          return Promise.resolve(responseJson);
        } else if(responseJson.status === "ok" && responseJson.totalResults === 0) {
          return Promise.reject('Berita Tidak Dapat Ditemukan');
        } else {
          return Promise.reject(responseJson.message);
        }
      })
  }

  // Fetch Api Untuk Mengambil Berita Berdasarkan Berita Top Headlines Secara Global
  static searchByBeritaPopulerGlobal() {
    return fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e2786195264d4f26abf5ad4b2b4733d8')
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if(responseJson.status === "ok" && responseJson.totalResults !== 0) {
          return Promise.resolve(responseJson);
        } else if(responseJson.status === "ok" && responseJson.totalResults === 0) {
          return Promise.reject('Berita Tidak Dapat Ditemukan');
        } else {
          return Promise.reject(responseJson.message);
        }
      })
  }
}
 
export default DataSource;