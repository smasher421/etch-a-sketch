// JavaScript used to create the square divs and functionality of my sketchpad





const wrapper = document.querySelector('.wrapper');



function createTable()
{
    for(let i = 0; i<256; i+=1)
    {
        const createDiv = document.createElement('div');
        wrapper.appendChild(createDiv);
    }
}

createTable();