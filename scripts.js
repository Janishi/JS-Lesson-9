let mainpostwrapper = document.getElementById('div-wrapper');
let overlay = document.getElementById('overlay');
let close = document.getElementById('close');
 

function ajax(url, callback){
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function(){
        let data = JSON.parse(request.responseText);
        callback(data);
        
        
    });

    request.send();
}

ajax("https://jsonplaceholder.typicode.com/posts", function(data){
    printdata(data);
});

function printdata (data){
    data.forEach(item => {
        createpost(item);
    });

}

function createpost(item){
    let divwrapper = document.createElement('div');
    divwrapper.classList.add('posts');
    divwrapper.setAttribute('data-id', item.id)

    let  h3tag = document.createElement('h3');
    h3tag.textContent=item.id;
    let  h2tag = document.createElement('h2');
    h2tag.textContent=item.title;

    divwrapper.appendChild(h3tag);
    divwrapper.appendChild(h2tag);
    mainpostwrapper.appendChild(divwrapper);
    

    divwrapper.addEventListener('click', function(event){
        let id = event.target.getAttribute('data-id');
        openOverlay();
        
    });

    
}

function openOverlay(id){

    overlay.classList.add('active');
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    
    ajax(url, function(data){
        console.log(data);
    });   

}

close.addEventListener('click', function(){
    overlay.classList.remove('active');
});





