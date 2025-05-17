(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();

  const deleteBtn = document.querySelector('.delete-info');
  const addBtn = document.querySelector('.plus-info');
  const editBtn = document.querySelector('.redag-info');
  
  function setLocalStorage(userData) {
    localStorage.setItem("userInfo", JSON.stringify(userData));
  }
  
  function getFromLocalStorage() {
    const data = localStorage.getItem("userInfo");
    return data ? JSON.parse(data) : null;
  }
  
  function deleteAllFromLocalStorage() {
    localStorage.removeItem("userInfo");
  }
  deleteBtn.addEventListener('click', () => {
    deleteAllFromLocalStorage();
  });
  
  addBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('phone').value;
    const phone = document.getElementById('email').value;
    const email = document.getElementById('comment').value;
    const user = { name, surname, phone, email };
    setLocalStorage(user);
  });
  
  editBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('phone').value;
    const phone = document.getElementById('email').value;
    const email = document.getElementById('comment').value;
    const user = { name, surname, phone, email };
    setLocalStorage(user);
  });
  const form = document.querySelector('.submit');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const surname = document.getElementById('phone').value;
  const phone = document.getElementById('email').value;
  const email = document.getElementById('comment').value;
  const user = { name, surname, phone, email };
  setLocalStorage(user);
  event.target.elemets.username.value = '';
  event.target.elemets.surname.value = '';
  event.target.elemets.telephone.value = '';
  event.target.elemets.email.value = '';
});