// <li class="listItem">
//<input class="check" type="checkbox" name="" id="check">Todo Item 1<i id="delete"
// class="fa-solid fa-trash"></i></li>
function newElement() {
  //create an "Li" element to insert into the list
  //   const li = document.createElement('li');

  //   //create a icon tag i and add it after the task and before ending the li tag
  //   const i = document.createElement('i');
  //   i.className = 'fa-solid fa-trash';
  //   i.id = 'delete';

  //get the value from the text and add it to li
  const inputValue = document.getElementById('myInput').value.trim();
  if (inputValue === '') {
    alert('Enter something here...');
    return;
  }

  //create an "Li" element to insert into the list
  const li = document.createElement('li');
  li.style.cursor = 'pointer';

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'checkB';
  checkBox.id = 'check'; // Consider using unique IDs

  li.appendChild(checkBox); // Append checkbox to li

  //create a icon tag i and add it after the task and before ending the li tag
  const i = document.createElement('i');
  i.className = 'fa-solid fa-trash';
  i.id = 'delete';
  i.onclick = function () {
    ul.removeChild(li);
  };

  li.appendChild(document.createTextNode(inputValue)); // Append text content

  document.getElementById('myInput').value = '';

  //add the icon tag after the inputValue i.e the tag
  li.appendChild(i);
  //add the new task in li variable into ul with class "myUL"
  const ul = document.querySelector('.myUL');
  ul.appendChild(li); // Append the newly created li to the ul

  // Clear the input field after adding a task
  document.getElementById('myInput').value = '';
}
