// let token = localStorage.getItem('token')
// axios.get('http://localhost:3000/user', {
//         headers: {
//             authorization: `Bearer ${token}`
//         }
//     })
//     .then((response) => {
//         console.log(response.data.user);
//         let mm = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember']
//         let date = new Date()
//         let mnt = date.getMinutes()
//         let hour = date.getHours()
//         let day = date.getDate()
//         let month = mm[date.getMonth()]
//         let year = date.getFullYear()
//         if (response.data.user.gender == 'male') {
//             console.log('nnn');

//             $('#profile').append(`
//     <a class="fir-imageover" rel="noopener" target="_blank" href="https://twitter.com/_davideast">
//         <img class="fir-author-image fir-clickcircle" src="https://source.unsplash.com/100x100/?man" alt="David East - Author">
//         <div class="fir-imageover-color"></div>       
//       </a>
    
//       <figcaption >
//         <div class="fig-author-figure-title text-light"><strong>${response.data.user.name}</strong></div>        
//         <div class="fig-author-figure-title text-light"><strong>${response.data.user.gender}</strong></div> 
//         <div class="fig-author-figure-title text-light"><strong>${hour}:${mnt}</strong></div> 
//         <div class="fig-author-figure-title text-light"><strong>${day} ${month} ${year}</strong></div>
//       </figcaption>
//     `)
//         } else if (response.data.user.gender == 'female') {
//             $('#profile').append(`
//     <a class="fir-imageover" rel="noopener" target="_blank" href="https://twitter.com/_davideast">
//         <img class="fir-author-image fir-clickcircle" src="https://source.unsplash.com/100x100/?woman" alt="David East - Author">
//         <div class="fir-imageover-color"></div>       
//       </a>
    
//       <figcaption>
//         <div class="fig-author-figure-title">${response.data.user.name}</div>        
//         <div class="fig-author-figure-title">${response.data.user.gender}</div> 
//         <div class="fig-author-figure-title">${hour}:${mnt}</div> 
//         <div class="fig-author-figure-title">${day} ${month} ${year}</div>
//       </figcaption>
//     `)
//         }

//     })
//     .catch(err => {
//         console.log(err);
//         window.location.href = 'index.html'
//     })

$('body').css("background-image", "url('https://source.unsplash.com/1000x1000/?dark");