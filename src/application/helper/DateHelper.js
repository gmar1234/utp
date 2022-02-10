export const DateNow = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dayList = [
    "Domingo,",
    "Lunes,",
    "Martes,",
    "Miercoles,",
    "Jueves,",
    "Viernes,",
    "Sabado,",
  ];

  const monthList = [
    "Enerp",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junip",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dateString =
    dayList[date.getDay()] +
    " " +
    day +
    " de " +
    monthList[month - 1] +
    " del " +
    year;
  return dateString;
};

export const TimeNow = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const initials = hour < 12 ? "AM" : "PM";
  const timeString = hour + ":" + min + ":" + sec + " " + initials;

  return timeString;
};
