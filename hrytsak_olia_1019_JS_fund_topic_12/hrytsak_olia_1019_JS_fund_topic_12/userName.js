// Отримання імені користувача
const saveButton = document.querySelector('.saveButton');
saveButton.addEventListener('click', function() {
  const userNameInput = document.querySelector('.userNameInput');
  const userName = userNameInput.value;

// Відправка запиту до сервера з параметром userName
fetch(`http://localhost:8081/save?userName=${userName}`, {
  method: 'POST'
})
  .then((response) => {
    if (response.ok) {
      console.log('Data saved successfully');
    } else {
      console.error('An error occurred while saving data');
    }
  })
  .catch((error) => {
    console.error('An error occurred while sending the request:', error);
  });
});