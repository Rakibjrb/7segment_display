const bcd1_right_segment = document.querySelectorAll(".bcd1_right_segment"),
  mod6_1_segment = document.querySelectorAll(".mod6_1_segment"),
  bcd2_right_segment = document.querySelectorAll(".bcd2_right_segment"),
  mod6_2_segment = document.querySelectorAll(".mod6_2_segment"),
  bcd3_right_segment = document.querySelectorAll(".bcd3_right_segment"),
  mod2_segment = document.querySelectorAll(".mod2_segment"),
  dots = document.querySelectorAll(".dot"),
  infos = document.querySelectorAll(".info");

//class add function
const classListAdd = (element, addClass) => {
  element.classList.add(addClass);
};

//class remove function
const classListRemove = (element, removeClass) => {
  element.classList.remove(removeClass);
};

//bcd segment handler on counter condition which is count to 9 then reset to 0
const bcd_segment_handler = (counter = 0, bcd_name) => {
  switch (counter) {
    case 0:
      bcd_name.forEach((element, index) => {
        if (index === 6) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 1:
      bcd_name.forEach((element, index) => {
        if (index == 1 || index == 2) {
          classListRemove(element, "segment_hide");
        } else {
          classListAdd(element, "segment_hide");
        }
      });
      break;
    case 2:
      bcd_name.forEach((element, index) => {
        if (index == 2 || index == 5) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 3:
      bcd_name.forEach((element, index) => {
        if (index == 4 || index == 5) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 4:
      bcd_name.forEach((element, index) => {
        if (index == 0 || index == 3 || index == 4) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 5:
      bcd_name.forEach((element, index) => {
        if (index == 1 || index == 4) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 6:
      bcd_name.forEach((element, index) => {
        if (index == 1) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 7:
      bcd_name.forEach((element, index) => {
        if (index == 3 || index == 4 || index == 5 || index == 6) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 8:
      bcd_name.forEach((element) => {
        classListRemove(element, "segment_hide");
      });
      break;
    case 9:
      bcd_name.forEach((element, index) => {
        if (index == 4) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
  }
};

//mod6 segment handler on counter condition which is count to 5 then reset to 0
const mod6_segment_handler = (counter = 0, mod6_name) => {
  switch (counter) {
    case 0:
      mod6_name.forEach((element, index) => {
        if (index === 6) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 1:
      mod6_name.forEach((element, index) => {
        if (index == 1 || index == 2) {
          classListRemove(element, "segment_hide");
        } else {
          classListAdd(element, "segment_hide");
        }
      });
      break;
    case 2:
      mod6_name.forEach((element, index) => {
        if (index == 2 || index == 5) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 3:
      mod6_name.forEach((element, index) => {
        if (index == 4 || index == 5) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 4:
      mod6_name.forEach((element, index) => {
        if (index == 0 || index == 3 || index == 4) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 5:
      mod6_name.forEach((element, index) => {
        if (index == 1 || index == 4) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
  }
};

//mod2 counter handler
const mod2_segment_handler = (counter = 0, mod2_name) => {
  switch (counter) {
    case 0:
      mod2_name.forEach((element, index) => {
        if (index === 6) {
          classListAdd(element, "segment_hide");
        } else {
          classListRemove(element, "segment_hide");
        }
      });
      break;
    case 1:
      mod2_name.forEach((element, index) => {
        if (index == 1 || index == 2) {
          classListRemove(element, "segment_hide");
        } else {
          classListAdd(element, "segment_hide");
        }
      });
      break;
  }
};

//main counder handler and logic
const bcd1_counter = (
  bcd1 = 0,
  mod6 = 0,
  bcd2 = 0,
  mod6_2 = 0,
  bcd3 = 0,
  mod2 = 0
) => {
  let counter_bcd = bcd1;
  let counter_mod6 = mod6;
  let counter_bcd2 = bcd2;
  let counter_mod6_2 = mod6_2;
  let counter_bcd3 = bcd3;
  let counter_mod2 = mod2;

  setInterval(() => {
    //count main second
    counter_bcd = counter_bcd + 1;

    //first check for second mod6
    if (counter_bcd === 10) {
      counter_bcd = 0;
      //count increase for mod6
      counter_mod6 = counter_mod6 + 1;

      //check miniute bcd for count 0 to 9
      if (counter_mod6 === 6) {
        counter_mod6 = 0;
        //this for count miniute when mod6_1 finished the count to 5
        counter_bcd2 = counter_bcd2 + 1;

        if (counter_bcd2 === 10) {
          counter_bcd2 = 0;
          counter_mod6_2 = counter_mod6_2 + 1;

          if (counter_mod6_2 === 6) {
            counter_mod6_2 = 0;

            //mod 2 counter logic
            if (counter_mod2 === 1) {
              counter_bcd3 = counter_bcd3 + 1;

              if (counter_bcd3 === 3) {
                counter_bcd = 0;
                counter_mod6 = 0;
                counter_bcd2 = 0;
                counter_mod6_2 = 0;
                counter_bcd3 = 1;
                counter_mod2 = 0;
                mod2_segment_handler(0, mod2_segment);
              }
            } else {
              counter_bcd3 = counter_bcd3 + 1;
            }

            if (counter_bcd3 === 10) {
              counter_bcd3 = 0;
              counter_mod2 = counter_mod2 + 1;

              mod2_segment_handler(counter_mod2, mod2_segment);
            }

            bcd_segment_handler(counter_bcd3, bcd3_right_segment);
          }
          mod6_segment_handler(counter_mod6_2, mod6_2_segment);
        }

        //remove class from segment className on every second
        bcd_segment_handler(counter_bcd2, bcd2_right_segment);
      }
      mod6_segment_handler(counter_mod6, mod6_1_segment);
    }

    //remove class from segment className on every second
    bcd_segment_handler(counter_bcd, bcd1_right_segment);
  }, 1000);

  setInterval(() => {
    dots.forEach((dot) => {
      classListAdd(dot, "segment_hide");
      classListRemove(dot, "green_dot");
    });
  }, 500);

  setInterval(() => {
    dots.forEach((dot) => {
      classListRemove(dot, "segment_hide");
      classListAdd(dot, "green_dot");
    });
  }, 1000);
};

//real time and date synchronizer function
const sync_real_time = () => {
  //show date
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day} - ${month} - ${year}`;
  }

  const date = formatDate(new Date());
  infos[0].textContent = date;

  //real time synchronizer settings
  const real_hours =
    new Date().getHours() <= 9
      ? `0${new Date().getHours()}`
      : new Date().getHours();

  const real_miniutes =
    new Date().getMinutes() < 10
      ? `0${new Date().getMinutes()}`
      : new Date().getMinutes();

  const real_seconds =
    new Date().getSeconds() < 10
      ? `0${new Date().getSeconds()}`
      : new Date().getSeconds();

  const hour_time_calc = () => {
    let exact_hour = "01";

    switch (real_hours) {
      case 13:
        exact_hour = "01";
        break;
      case 14:
        exact_hour = "02";
        break;
      case 15:
        exact_hour = "03";
        break;
      case 16:
        exact_hour = "04";
        break;
      case 17:
        exact_hour = "05";
        break;
      case 18:
        exact_hour = "06";
        break;
      case 19:
        exact_hour = "07";
        break;
      case 20:
        exact_hour = "08";
        break;
      case 21:
        exact_hour = "09";
        break;
      case 22:
        exact_hour = "10";
        break;
      case 23:
        exact_hour = "11";
        break;
      case 24:
        exact_hour = "12";
        break;

      default:
        exact_hour = real_hours;
        break;
    }
    return exact_hour;
  };

  const real_time = `${hour_time_calc()}:${real_miniutes}:${real_seconds}`;

  let second = real_time.split(":");
  second = second[2].split("");

  let miniutes = real_time.split(":");
  miniutes = miniutes[1].split("");

  let hours = real_time.split(":");
  hours = hours[0].split("");

  //second count part
  bcd1_counter(
    Number(second[1]),
    Number(second[0]),
    Number(miniutes[1]),
    Number(miniutes[0]),
    Number(hours[1]),
    Number(hours[0])
  );
  mod6_segment_handler(Number(second[0]), mod6_1_segment);

  //miniute count part
  bcd_segment_handler(Number(miniutes[1]), bcd2_right_segment);
  mod6_segment_handler(Number(miniutes[0]), mod6_2_segment);

  //hour count part
  bcd_segment_handler(Number(hours[1]), bcd3_right_segment);
  mod2_segment_handler(Number(hours[0]), mod2_segment);
};

sync_real_time();
