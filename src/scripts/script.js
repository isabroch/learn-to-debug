import 'modules/useApi.js';

Load();

const getUsers = () => {
  const root = "https://reqres.in/api/";
  data = await useApi("users");
  const users = data.data;

  users.forEach(user => {
    const img = user.avatar;
    const name = `${user[first_name]} ${user[last_name]}`;
    const email = user.email;
    createCard(img, name, email);
  });

  users = null;
}

const createCard = (imagePath, name, email) => {
  const template = document.querySelector('#card-template');
  const clone = template.content.cloneNode(true);

  document.querySelector('.card__image').src = imagePath;
  document.querySelector('.card__title').textContent = name;
  document.querySelector('.card__subtitle').textContent = email;
  document.querySelector('.card__button').href = `mailto:${email}`;

  const container = document.querySelector('#card-container');
  container.appendChild(clone)
}

function load() {
  document.getElementByID('title').textContent = "Hello!"
  getUsers()
};