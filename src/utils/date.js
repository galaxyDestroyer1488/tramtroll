export function day() {
  const date = new Date();

  // Отримуємо день, місяць і рік
  let day = date.getDate();
  let month = date.getMonth() + 1; // Місяці нумеруються з 0, тому додаємо 1
  const year = date.getFullYear();

  // Додаємо нуль попереду, якщо день або місяць менше 10
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return `${day}.${month}.${year}`;
}
// ---------------------------------------------------------------------------------
export function time() {
  const date = new Date();

  // Отримуємо годину, хвилину і секунду
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Додаємо нуль попереду, якщо значення менше 10
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return `${hours}:${minutes}:${seconds}`;
}

//---------------------------------------------------

export function timer(updateCallback) {
  let timer = 59 * 60 + 57;

  const interval = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    // Форматуємо хвилини і секунди з додаванням нуля попереду, якщо менше 10
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Викликаємо колбек для оновлення відображення таймера
    updateCallback(`${formattedMinutes}:${formattedSeconds}`);

    // Зупиняємо таймер, коли він досягне нуля
    if (--timer < 0) {
      clearInterval(interval);
    }
  }, 1000);
}
