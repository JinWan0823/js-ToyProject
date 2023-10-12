
// do something!
const NewsList = (posts) => {
  const $posts = document.createElement('div');
  $posts.classList.add('news-list-container');
  
  console.log(posts)

  posts.forEach(post => {
    const $post = document.createElement('article');
    $post.classList.add('news-list');
    $post.innerHTML = `
      <section class="news-item">
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
      </section>
    `
    // NewsList render
    $posts.appendChild($post);
  })

  return $posts
}


export default NewsList;