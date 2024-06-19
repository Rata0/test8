const getUsers = () => {
  return [
    { id: '1', name: 'Александр', avatarUrl: 'images/icon-man.png' },
    { id: '2', name: 'Анна', avatarUrl: 'images/icon-woman.png' },
    { id: '3', name: 'Анастасия', avatarUrl: 'images/icon-woman.png' },
    { id: '4', name: 'Иван', avatarUrl: 'images/icon-man.png' },
    { id: '5', name: 'Мария', avatarUrl: 'images/icon-woman.png' },
    { id: '6', name: 'Максим', avatarUrl: 'images/icon-man.png' },
    { id: '7', name: 'Олег', avatarUrl: 'images/icon-man.png' },
    { id: '8', name: 'Ольга', avatarUrl: 'images/icon-woman.png' },
    { id: '9', name: 'Евгений', avatarUrl: 'images/icon-man.png' },
    { id: '10', name: 'Екатерина', avatarUrl: 'images/icon-woman.png' },
  ];
};

const userListElement = document.getElementById('userList');
const searchInput = document.getElementById('searchInput');

const renderUserList = (users) => {
  userListElement.innerHTML = '';
  users.forEach((user) => {
    const userItem = document.createElement('div');
    userItem.classList.add('user-item');

    const avatar = document.createElement('img');
    avatar.src = user.avatarUrl;
    avatar.alt = user.name;

    const name = document.createElement('span');
    name.textContent = user.name;

    userItem.appendChild(avatar);
    userItem.appendChild(name);
    userListElement.appendChild(userItem);
  });
};

const handleSearch = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredUsers = users.filter((user) => user.name.toLowerCase().startsWith(searchTerm));
  renderUserList(filteredUsers);
};

const init = async () => {
  users = getUsers();
  renderUserList(users);

  searchInput.addEventListener('input', handleSearch);
};

init();
