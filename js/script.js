// Get input element
let filterInput = document.querySelector('#filterInput');

// Add Event Listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(e) {
    e.preventDefault();
    
    // Get Value of input
    let filterValue = e.target.value.toUpperCase();

    let ul = document.querySelector('#names');

    // Get lis from ul
    let li = ul.querySelectorAll('li.collection-item');

    // Loop through collection-item lis
    for(let i = 0; i < li.length; i++) {
        let a = li[i].querySelectorAll('a')[0];
        
        // If matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}