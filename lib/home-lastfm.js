axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=99e7eb5d2a6f84a897fc788c1a72bcaa&format=json')
  .then(topArtist =>{
    let topChart = topArtist.data.artists.artist
    let tmp = []
    for(let i=0 ; i <12 ;i++){
      tmp.push(topChart[i])            
      let image = topChart[i].image[4]['#text']      
      axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${topChart[i].name}&api_key=99e7eb5d2a6f84a897fc788c1a72bcaa&format=json`)
      .then(response =>{        
        $('#music').append(`<div class="cellphone-container">    
            <div class="movie">       
              <div class="menu"><i class="material-icons"></i></div>
              <img  class="movie-img" src="${image}"></img>
              <div class="text-movie-cont">
                <div class="mr-grid">
                  <div class="col1">
                    <h1 class="text-light">${topChart[i].name}</h1>
                    <ul class="movie-gen">
                      <li> GENRE : ${response.data.artist.tags.tag[0].name},${response.data.artist.tags.tag[1].name},${response.data.artist.tags.tag[2].name}</li>
                    </ul>
                  </div>
                </div>
                <div class="mr-grid summary-row">
                  <div class="col2">
                    <h5 class="text-light">SUMMARY</h5>
                  </div>
                  <div class="col2">
                     <ul class="movie-likes">
                      <li><i class="material-icons">&#xE813;</i>listeners : ${response.data.artist.stats.listeners}</li>
                      <li><i class="material-icons">&#xE813;</i>playcount : ${response.data.artist.stats.playcount}</li>
                    </ul>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="col1">
                    <p class="movie-description">${response.data.artist.bio.summary}</p>
                  </div>
                </div>
                <div class="mr-grid actors-row">
                  <div class="col1">
                    <p class="movie-actors">Similar Artist : ${response.data.artist.similar.artist[0].name} , ${response.data.artist.similar.artist[1].name} , ${response.data.artist.similar.artist[2].name}</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>`)        
      })     
    }            
  })
  .catch(err =>{
    console.log(err);    
  })
 