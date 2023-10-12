import {globalState} from '../store/state.js'
// do something!
const Nav = () => {
  const nav = document.createElement('nav');
  const listWrap = document.createElement('ul');

  const categoryText = ["전체보기", "비즈니스", "엔터테이먼트","건강","과학","스포츠","기술"]
  const categoryId = ["all","business","entertainment","health","science","sports","technology"]
  
  categoryId.forEach((v,idx) => {
    const li = document.createElement('li');
    li.textContent = `${categoryText[idx]}`;
    li.setAttribute('id',v);
    li.classList.add('category-item');
    if(idx === 0) {
      li.classList.add('active');
    }
    // Nav mutate
    li.addEventListener('click', (e) => {
      globalState.category = v;
      document.querySelectorAll('.category-item').forEach((v)=>{
        v.classList.remove('active');
      })
      e.target.classList.add('active');
    })
    listWrap.appendChild(li);
  })




  nav.classList.add('category-list')
  nav.appendChild(listWrap);
  
  return nav

}

export default Nav;