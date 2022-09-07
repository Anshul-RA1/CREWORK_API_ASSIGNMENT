const result = document.getElementById('result');
const filter = document.getElementById('filter');

// empty array
const listItems = [];

// filter data by searching user
filter.addEventListener('input', (e) => filterData(e.target.value));

getData()

async function getData(){
  const res = await fetch('https://randomuser.me/api?results=100');


  const {results} = await res.json();

  // test the data by consol 
  // console.log(results);
  
  // clear results

  result.innerHTML = '';

  results.forEach(user => {
    console.log(user);

    const li = document.createElement('li');


    listItems.push(li);

    li.innerHTML = `
          <img src="${user.picture.large}" alt="${user.name.first}">

          <div class="user-info">
            <h4>${user.name.first} ${user.name.lst}</h4>
            <p>${user.location.city}, ${user.location.country}</p>  
          </div>
    `

    result.appendChild(li);
    
  });
}


function filterData(searchTerm){
  // console.log(searchTerm);

  listItems.forEach(item =>{
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
      item.classList.remove('hide');
    }else{
      item.classList.add('hide')
    }
  })
}