import { appendChildrenList } from "./dom.js";
import { makeDOM } from "./dom.js";

const AnalogClock = $container => {
  // do something!
  const hourArrow = makeDOM('div',{
    className : 'hand hour',
  });
  const minuteArrow = makeDOM('div',{
    className : 'hand minute',
  });
  const secondArrow = makeDOM('div',{
    className : 'hand second',
  });

  appendChildrenList($container,[hourArrow,minuteArrow,secondArrow])

  for(let i =1;i<=12;i++){
    const arrowDOM = makeDOM('div',{
        className : `time time${i}`,
        innerHTML : '|',
    })

    $container.appendChild(arrowDOM);
  }

  const getTimer = () => {
    const hour = $container.getElementsByClassName('hour')[0];
    const minute = $container.getElementsByClassName('minute')[0];
    const second = $container.getElementsByClassName('second')[0];

    const date = new Date();

    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    hour.style.setProperty('--deg',h*(360/12) + m*(360/12/60))
    minute.style.setProperty('--deg',m*(360/60))
    second.style.setProperty('--deg',s*(360/60))
  }

  setInterval(getTimer,100)

};




export default AnalogClock;
