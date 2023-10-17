const div = document.createElement('div');
div.className = "conatiner";

div.style.marginLeft = '30%';
div.style.marginTop = '100px';

const requirement = ['email', 'name', 'password'];

requirement.forEach( (item) =>{
    const h3 = document.createElement('h3');
    div.appendChild(h3);

    h3.textContent = `${item}`;
    h3.style.color = 'red';
    h3.style.marginLeft = '12rem';

    const Username = document.createElement('input');
    Username.type = `${item}`;
    Username.placeholder = `Enter Your ${item}`;
    Username.style.padding = "10px";
    Username.style.width = '50%';
    Username.setAttribute('id', `${item}`);
    Username.setAttribute('name', `${item}`);
    div.appendChild(Username);
})
const submitButton = document.createElement('button');
submitButton.type = "button";
submitButton.className = "button";
submitButton.style.padding = '15px';
submitButton.style.paddingLeft = '60px';
submitButton.style.paddingRight = '60px';
submitButton.style.backgroundColor = 'green';
submitButton.textContent = "Submit";
submitButton.style.color = 'White';
submitButton.style.display = 'flex';
submitButton.style.marginLeft = '18%';
submitButton.style.marginTop = '20px';
submitButton.style.borderRadius = '10px'
div.appendChild(submitButton);
document.body.appendChild(div);