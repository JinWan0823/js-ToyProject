// do something!
const makeStar = (i) => {
    const star = document.createElement('i');
    star.className = `bx bxs-star ${i}`;
    return star;
}

export const StarRating = (item) => {
    const starWarp = document.createElement('div');
    starWarp.className = 'star-rating-container';
    const starCount = item.dataset.maxRating;

    for(let i = 0; i < starCount; i++){
        starWarp.appendChild(makeStar(i));
    }
    item.appendChild(starWarp)

    item.addEventListener('mouseover',(e)=>{
        let currentNode = e.target;
        let prevNode = currentNode.previousElementSibling;
        if(e.target.classList.contains('selected')) return;
        currentNode.classList.add('hovered');
        while(prevNode){
            if(prevNode !== null){
                prevNode.classList.add('hovered');
            }
            prevNode = prevNode.previousElementSibling;
        }
    })

    item.addEventListener('mouseout',(e)=>{
        e.target.classList.remove('hovered');
    })

    const child = starWarp.querySelectorAll('.bx');

    starWarp.addEventListener('mouseout',()=>{
        Array.from(child).forEach(v=>v.classList.remove('hovered'))
    })

    const getIndex = (ele) => {
        let idx = 0;
        while((ele = ele.previousSibling) !== null) {
            idx++;
        }
        return idx+1;
    }

    item.addEventListener('click', (e) => {
        Array.from(child).forEach(v => v.classList.remove('selected'))

        let currentNode = e.target;
        let prevNode = currentNode.previousElementSibling;
        currentNode.classList.add('selected');
        while(prevNode){
            if(prevNode !== null){
                prevNode.classList.add('selected');
            }
            prevNode = prevNode.previousElementSibling;
        }

        const newEvent = new CustomEvent('rating-change',{
            detail : getIndex(e.target)
        })

        item.dispatchEvent(newEvent);
    })

}