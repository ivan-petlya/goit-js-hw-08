import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('submit', onSubmitBtn);
form.addEventListener('input', throttle(onTextInput, 1000));
initPage();

function onSubmitBtn(evt) {
  evt.preventDefault();
  console.info(`Email: ${form.email.value} message: ${form.message.value}`);
  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
}

function onTextInput(evt) {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function initPage() {
  const savedText = localStorage.getItem(LOCAL_KEY);
  if (savedText) {
    form.email.value = JSON.parse(savedText).email;
    form.message.value = JSON.parse(savedText).message;
  }
}
