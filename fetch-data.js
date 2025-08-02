// Define the async function
async function fetchUserData() {
  // API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Select the container element
  const dataContainer = document.getElementById('api-data');

  try {
    // Fetch user data
    const response = await fetch(apiUrl);

    // Convert to JSON
    const users = await response.json();

    // Clear loading message
    dataContainer.innerHTML = '';

    // Create a list
    const userList = document.createElement('ul');

    // Loop through each user and create a list item
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    // Append the list to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Clear container and show error message
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Fetch error:', error);
  }
}

// Run fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
