const todo = document.querySelector('#todos .todo')

//todo.style.color = 'gray';
//todo.style.textDecoration = 'line-through';
//todo.style.opacity = '50%';

//https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80

//https://youtu.be/DbUu5dr-WLk    
//The old way

const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
newImg.style.width = '300px';

document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'The Old Way! Click Mee';
newLink.href = 'https://youtu.be/DbUu5dr-WLk';

const firstP = document.querySelector('p');
firstP.appendChild(newLink);