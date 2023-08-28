const menuBurguer = document.querySelectorAll('span, .user-perfil, #logo-pata');

const activeMenu = () => {
  menuBurguer.forEach(element => {
    element.classList.toggle('display-none');
  });
  document.querySelector('.menu-burguer').classList.toggle('active-menu');
}
console.log(menuBurguer);