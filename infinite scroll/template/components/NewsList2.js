import { globalState } from "../store/state.js";

// do something!
const NewsList = (posts) => {

  // const makeElement = (tag, {className, innerHTML}) => {
  //   const targetEl = document.querySelector(className) ?? document.createElement(tag);
  //   !targetEl.classList.contains(className) && targetEl.classList.add(className);
  //   innerHTML && !targetEl.innerHTML && (targetEl.innerHTML = innerHTML)

  //   return targetEl;
  // }

  const $posts = document.querySelector('.news-list-container') ?? document.createElement('div');
  !$posts.classList.contains('news-list-container') && $posts.classList.add('news-list-container');

  const $article = document.querySelector('.news-list') ?? document.createElement('article');
  !$article.classList.contains('news-list') && $article.classList.add('news-list');

  const $scroll = document.querySelector('.scroll-observer') ?? document.createElement('div');
  !document.querySelector('.scroll-observer') && globalState.scrollObserver.observe($scroll);
  !$scroll.classList.contains('scroll-observer') && $scroll.classList.add('scroll-observer');
  !$scroll.innerHTML && ($scroll.innerHTML = '<img src="img/ball-triangle.svg" alt="Loading..." />')

  $posts.appendChild($article);
  $posts.appendChild($scroll);

  posts.forEach(post => {
    const $post = document.createElement('section');
    $post.classList.add('news-item');
    post.urlToImage = !post.urlToImage && 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
    $post.innerHTML = `
      <div class="thumbnail">
        <a href="${post.url}" target="_blank" rel="noopener noreferrer">
          <img
            src="${post.urlToImage}"
            alt="thumbnail" />
        </a>
      </div>
      <div class="contents">
        <h2>
          <a href="https://www.ajunews.com/view/20220220180410403" target="_blank" rel="noopener noreferrer">
              ${post.title}
          </a>
        </h2>
        <p>
          이번 주(21일~25일·현지시간) 뉴욕 증시는 러시아와 우크라이나 간 지정학적 긴장과 우크라이나 간 미국
          연방준비제도(Fed·연준)의 긴축 우려에 계속해서...
        </p>
      </div>
    `
    // NewsList render
    $article.appendChild($post);
  })

  return $posts
}


export default NewsList;