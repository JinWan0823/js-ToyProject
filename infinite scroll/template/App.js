import axios from './node_modules/axios/dist/esm/axios.min.js';
import { Nav, NewsList } from "./components/index.js";
import {globalState} from './store/state.js'

// do something!
const API_KEY = '31c4f04e236e44818bb607e7bee1bd0b';

async function getNews({category = globalState.category, page = 1, pageSize = 5} = {}) {
  const response = await axios({
    method:'get',
    url:`https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
  })
  
  root.appendChild(NewsList(response.data.articles))
}

getNews()

globalState.scrollObserver = new IntersectionObserver(([scrollEntry]) => {
  if(scrollEntry.target !== document.querySelector('.scroll-observer')) return;
  globalState.page++;
}, {threshold: 1})


globalState.observe((key) => {
  if(key === 'category') {
    const newsListWrap = document.querySelector('.news-list-container');
    newsListWrap.remove();
    globalState.page = 1;
    getNews({category: globalState.category, page: 1}); // TODO: page 하드코딩 제거
  } else if(key === 'page') {
    getNews({page: globalState.page})
  }
  
})


const root = document.querySelector('#root');
root.appendChild(Nav())



