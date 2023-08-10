function saveToLocalStorage(event) {
    event.preventDefault();
    

    let amount = event.target.amount.value;
    let description = event.target.desc.value;
    let category = event.target.category.value;


    let userExpense = {
      amount ,
      description,
      category
    }

    // let userExpense_serialized = JSON.stringify(userExpense);

    localStorage.setItem(amount, JSON.stringify(userExpense));

    printuserExpense(userExpense);
}

function printuserExpense(userExpense){
    const parentElement = document.getElementById('userExpense');
    const childElement = document.createElement('li');
    

    childElement.innerHTML = `Amount:${userExpense.amount} <br> Description: ${userExpense.description} <br> Category: ${userExpense.category} <br>`;

  

    

  const deleteButton = document.createElement('input');
  deleteButton.id = 'delete';
    deleteButton.type = 'button';
    deleteButton.value = 'Delete';
  deleteButton.style.fontWeight = 'bold';
  deleteButton.style.backgroundColor = 'red';
    deleteButton.onclick = () => {
        localStorage.removeItem(userExpense.amount)
        parentElement.removeChild(childElement)
    };

  const editButton = document.createElement('input');
  editButton.id = 'edit';
  editButton.type = 'button';
  editButton.value = 'Edit';
  editButton.style.fontWeight = 'bold';
  editButton.style.backgroundColor = 'green';
  editButton.onclick = () => {
    document.getElementById('amount').value = userExpense.amount;
    document.getElementById('desc').value = userExpense.description;
    document.getElementById('category').value = userExpense.category;
  };

    
    parentElement.appendChild(childElement);
    childElement.appendChild(deleteButton);
    childElement.appendChild(editButton);
    
}

