// do something!
const get = (target) => {
  return document.querySelector(target);
}
const getAll = (target) => {
  return document.querySelectorAll(target);
}

const moveMonth = (date,today) => {
  renderCalendar(date,today);
  calendarNav(date);
}

const calendarNav = (date) => {
  const $currentMonth = get('.nav_month');
  const $currentYear = get('.nav_year');

  $currentMonth.innerHTML = date.toLocaleString("en-US", {month : "long"});
  $currentYear.innerHTML = new Date(date).getFullYear();
}

const removePick = () => {
  const $day = getAll('.date');
  $day.forEach(v => v.classList.remove('chk_day'))
}

const openCalendar = () => {
  const $calendar = get('.calendar');
  $calendar.classList.add('on');
}

const closeCalendar = () => {
  const $calendar = get('.calendar');
  $calendar.classList.remove('on');
}

const renderCalendar = (date,today) => {
  const $dateBox = get('.calendar_body');
  const newDate = new Date(date.getTime());
  const currentYear = newDate.getFullYear();
  const currentMonth = newDate.getMonth() + 1;
  const firstDay = new Date(newDate.setDate(1)).getDay();
  const lastDate= new Date(currentYear, currentMonth, 0).getDate();

  const prevMonth = currentMonth - 1;
  const prevMonthLastDay = new Date(currentYear,prevMonth,0).getDate();

  const $datePicker = get('.datepicker');
  const dateStorage = $datePicker.value;

  let calendarOpen = false;

  let html = '';

  //달력에 이전 달 날짜 DOM 추가
  for(let i = 0; i<firstDay; i++){
    html += `<div class="prev_month_date"></div>`
  }
  //달력에 이번 달 날짜 DOM 추가
  for(let i = 1; i<=lastDate; i++){
    if(today.getMonth() == currentMonth - 1 && i == today.getDate()) {
      html += `<div class="date today">${i}</div>`
    } else {
      html += `<div class="date">${i}</div>`
    }
  }

  //달력에 다음 달 날짜 DOM 추가
  const limitDay = firstDay + lastDate;
  const nextDay = Math.ceil(limitDay/7)*7;
  for(let i = 1; i <= nextDay - limitDay; i++){
    html += `<div class='next_month_date'>${i}</div>`
  }


  $dateBox.innerHTML = html

  // 이전 달 날짜 DOM에 숫자 추가
  const $prevMonthDay = getAll('.prev_month_date');
  $prevMonthDay.forEach((v,index)=> v.innerHTML = prevMonthLastDay - ($prevMonthDay.length - 1 ) + index)

  //일요일 체크
  const $day = getAll('.date');
  $day.forEach(v => {
    const sunday = new Date(currentYear,currentMonth - 1,v.innerHTML)
    if(sunday.getDay() === 0){
      v.classList.add('sunday');
    }
  })

  //input에 값이 있다면 그 값에 체크 클래스 추가
  if(dateStorage) {
    $day.forEach(v => {
      const clickDate = new Date(currentYear,currentMonth - 1,v.innerHTML);
      if(clickDate.toLocaleDateString() === dateStorage) {
        v.classList.add('chk_day')
      }
    })
  }

  // 날짜 클릭 함수 실행
  $day.forEach(day => {
    day.addEventListener('click', () => {
      removePick();
      day.classList.add('chk_day');
      $datePicker.value = new Date(currentYear,currentMonth - 1,day.innerHTML).toLocaleDateString();
      console.log($datePicker.value)
      closeCalendar();
      calendarOpen = false;
    })
  })

  //달력 열기
  $datePicker.addEventListener('click', () => {
    openCalendar();
    calendarOpen = true
  })


  window.addEventListener('click', (e) => {
    const $calendar = get('.calendar')
    const $datePicker = get('.datepicker')

    if(calendarOpen == true){
      if(e.target.closest('.calendar') == null && e.target !== $datePicker){
        $calendar.classList.remove('on')
        calendarOpen = false;
      }
    }
  })

}

export const calendar = (date) => {
  const today = new Date();

  //달력 DOM 생성
  renderCalendar(date,today);

  //달력 헤더에 연,월 입력
  calendarNav(date);

  // 이전 달, 다음 달 이벤트
  const $prevBtn = get('.prev_btn');
  const $nextBtn = get('.next_btn');
  
  $prevBtn.addEventListener('click', () => {
    const prevMonth = new Date(date.setMonth(date.getMonth() - 1))
    moveMonth(prevMonth,today)
  })

  $nextBtn.addEventListener('click', () => {
    const prevMonth = new Date(date.setMonth(date.getMonth() + 1))
    moveMonth(prevMonth,today)
  })
}
