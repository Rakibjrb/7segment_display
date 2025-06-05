// element selctors
const dots = document.querySelectorAll(".dot"),
  date_display = document.querySelector(".info"),
  sec_right_segments = document.querySelectorAll(".second .right .segment");

//class add function
const class_list_add = (element_name, class_name) => {
  element_name.classList.add(class_name);
};

//class remove function
const class_list_remove = (element_name, class_name) => {
  element_name.classList.remove(class_name);
};

// date formatter function
function set_date() {
  const now = new Date();
  const date = now.getDate() <= 9 ? `0${now.getDate()}` : now.getDate(),
    month = now.getMonth() <= 9 ? `0${now.getMonth()}` : now.getMonth(),
    year = now.getFullYear(),
    date_format = `${date}/${month}/${year}`;
  date_display.textContent = date_format;
}

// get real time
function get_real_time() {
  const now = new Date();
  const sec = now.getSeconds() <= 9 ? `0${now.getSeconds()}` : now.getSeconds(),
    min = now.getMinutes() <= 9 ? `0${now.getMinutes()}` : now.getMinutes();
  const hour = () => {
    switch (now.getHours()) {
      case 13:
        return 1;
      case 14:
        return 2;
      case 15:
        return 3;
      case 16:
        return 4;
      case 17:
        return 5;
      case 18:
        return 6;
      case 19:
        return 7;
      case 20:
        return 8;
      case 21:
        return 9;
      case 22:
        return 10;
      case 23:
        return 11;
      case 24:
        return 12;
    }
  };
  return `${hour() <= 9 ? `0${hour()}` : hour()}${min}${sec}`;
}

// main timer function
function main_timer(time) {
  console.log(time);
}

set_date();

// main time handler function
setInterval(() => {
  main_timer(get_real_time().split(""));
}, 1000);
