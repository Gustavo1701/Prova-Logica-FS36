const key = '475875b115db2ba16f056bb545041155'

const tbody = document.getElementById('tbody')
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
    }
};

function getApi() {

    fetch('https://api.themoviedb.org/3/movie/popular', options)
        .then(response => response.json())
        .then(data => 
            {
                console.log(data.results)
                const filmes = data.results
                filmes.forEach(filme => {
                    tbody.innerHTML += `<tr class="align-middle">
                 
                <td class="col-1"><img src="https://image.tmdb.org/t/p/w200/${filme.poster_path}" alt="${filme.title}"></td>
                <td class="col-1">${filme.title}</td>
                <td class="col-4">${filme.overview}</td>
                <td class="col-1">${filme.original_language}</td>
                <td class="col-1">${filme.release_date}</td>
                </tr>
                `
                });

                

            })
            
        .catch(err => console.error(err));

}

getApi()