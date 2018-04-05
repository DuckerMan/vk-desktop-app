module.exports = (src, sid, callback) => {
  let modal = document.createElement('div');
  modal.classList.add('captcha_modal');
  document.body.appendChild(modal);
  
  modal.innerHTML = `
    <div class="captcha">
      <div class="captcha_img"><img></div>
      <div class="captcha_info">Не видно? Нажмите на картинку</div>
      <div class="captcha_key"><input type="text" placeholder="Введите капчу"></div>
      <div class="captcha_btn"><input type="button" value='Продолжить'></div>
    </div>
  `;
  
  modal.style.display = 'flex';
  let btn = document.querySelector('.captcha_btn input'),
      input = document.querySelector('.captcha_key input'),
      img = document.querySelector('.captcha_img img');
  
  img.src = src;
  img.addEventListener('click', () => img.src += ~img.src.indexOf("rnd=") ? "1" : "&rnd=1");
  btn.addEventListener('click', () => {
    document.body.removeChild(modal);
    callback(input.value, sid);
  });
  
  input.addEventListener('keydown', e => { if(e.keyCode == 13) btn.click() });
}