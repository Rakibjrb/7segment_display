// element selctors
const dots = document.querySelectorAll(".green_dot"),
  date_display = document.querySelector(".info"),
  sec_right_segments = document.querySelectorAll(".second .right .segment"),
  sec_left_segments = document.querySelectorAll(".second .left .segment"),
  min_right_segments = document.querySelectorAll(".minute .right .segment"),
  min_left_segments = document.querySelectorAll(".minute .left .segment"),
  hour_right_segments = document.querySelectorAll(".hour .right .segment"),
  hour_left_segments = document.querySelectorAll(".hour .left .segment");

//class add function
function class_list_add(element_name, class_name) {
  element_name.classList.add(class_name);
}

//class remove function
function class_list_remove(element_name, class_name) {
  element_name.classList.remove(class_name);
}

// date formatter function
function set_date() {
  const now = new Date();
  const date = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const date_format = `${date}/${month}/${year}`;

  if (typeof date_display !== "undefined" && date_display !== null) {
    date_display.textContent = date_format;
  } else {
    console.warn("date_display element is not defined.");
  }
}

// get real time
function get_real_time() {
  const now = new Date();
  const sec = String(now.getSeconds()).padStart(2, "0"),
    min = String(now.getMinutes()).padStart(2, "0");
  const hour = () => {
    const hour = new Date().getHours();
    return hour % 12 === 0 ? 12 : hour % 12;
  };
  return `${hour() <= 9 ? `0${hour()}` : hour()}${min}${sec}`;
}

// segment handler function
function segment_handler(segments, counter_value) {
  segments.forEach((segment) => class_list_remove(segment, "segment_hide"));
  switch (Number(counter_value)) {
    case 0:
      class_list_add(segments[6], "segment_hide");
      break;
    case 1:
      class_list_add(segments[0], "segment_hide");
      class_list_add(segments[3], "segment_hide");
      class_list_add(segments[4], "segment_hide");
      class_list_add(segments[5], "segment_hide");
      class_list_add(segments[6], "segment_hide");
      break;
    case 2:
      class_list_add(segments[2], "segment_hide");
      class_list_add(segments[5], "segment_hide");
      break;
    case 3:
      class_list_add(segments[4], "segment_hide");
      class_list_add(segments[5], "segment_hide");
      break;
    case 4:
      class_list_add(segments[0], "segment_hide");
      class_list_add(segments[3], "segment_hide");
      class_list_add(segments[4], "segment_hide");
      break;
    case 5:
      class_list_add(segments[1], "segment_hide");
      class_list_add(segments[4], "segment_hide");
      break;
    case 6:
      class_list_add(segments[1], "segment_hide");
      break;
    case 7:
      class_list_add(segments[3], "segment_hide");
      class_list_add(segments[4], "segment_hide");
      class_list_add(segments[5], "segment_hide");
      class_list_add(segments[6], "segment_hide");
      break;
    case 9:
      class_list_add(segments[4], "segment_hide");
      break;
  }
}

// set time function
function main_timer(time) {
  // second right segment handle
  segment_handler(sec_right_segments, time[5]);
  // second left segment handle
  segment_handler(sec_left_segments, time[4]);
  // minute right segment handle
  segment_handler(min_right_segments, time[3]);
  // minute left segment handle
  segment_handler(min_left_segments, time[2]);
  // hour right segment handle
  segment_handler(hour_right_segments, time[1]);
  // hour left segment handle
  segment_handler(hour_left_segments, time[0]);
}

set_date();

// main time handler function
setInterval(() => {
  main_timer(get_real_time().split(""));

  dots.forEach((dot) => {
    class_list_add(dot, "green_dot");
  });

  setTimeout(() => {
    dots.forEach((dot) => {
      class_list_remove(dot, "green_dot");
    });
  }, 500);
}, 1000);
