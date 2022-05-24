const property=['name', 'description', 'developer', 'released_date'];
let index=0;

const getCharacterFromApi = () =>{
    return fetch('https://zelda.fanapis.com/api/games', {
        method :'get'
        })
        .then(response => {
            return response.json();
        })
        .then(zeldas => {
            return zeldas;
        })
        .catch(error => {
            console.log('Error al recuperar personaje', error)
        });
}

const drawParagraph =(container) =>{
    for(let i =0; i < 4; i++){
        const p = document.createElement('p');
        p.classList.add(property[i]);
        container.appendChild(p);
    }
}

const writeCard = (list,i,pos) =>{ 
    let newIndex;
    let total;
    let title='';
    const p = document.querySelectorAll('p'); 
    if(pos === 1){
        newIndex=0;
        total=3;
    } else{
        newIndex=4;
        total=7
    } 
    for(y = newIndex ; y <= total ; y++){
        p[y].innerText = list.data[i][p[y].className];
    }
}


const drawCards = (list, i,pos) =>{
    const div = document.createElement('div');
    const main = document.querySelector('main');
    main.appendChild(div);
    div.classList.add('container' + pos);
    drawParagraph(div);
    writeCard(list,i,pos);
}


const init = async() =>{
    let pos=1;
    const games = await getCharacterFromApi();
    drawCards(games,index,pos);
    drawCards(games,index+1,pos+1);
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next 2 games';
    const main = document.querySelector('main');
    main.appendChild(nextButton);
    nextButton.addEventListener('click', event =>{
        pos=1;
        index++;
        writeCard(games,index,pos);
        if (index === 19){ //controlar que no se escape el index y supere el numero de entradas de la API
            index = 0;
            writeCard(games,index,pos+1);
        }else{
            index ++;
            writeCard(games,index,pos+1);
        }     
    });  
};

init();

