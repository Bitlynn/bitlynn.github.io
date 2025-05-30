// Доступные слоты
const availableSlots = {
    "2025-02-20": ["10:00", "12:00", "14:00", "16:00"],
    "2025-02-24": ["11:00", "13:00", "15:00"],
    "2025-02-25": ["10:30", "12:30", "14:30"],
  };
  
  // Функция для обновления времени
  document.getElementById("date").addEventListener("change", function () {
    const selectedDate = this.value; // Получаем выбранную дату
    const timeSelect = document.getElementById("time"); // Выпадающий список времени
    const timeLabel = document.getElementById("timeLabel"); // Метка времени
  
    // Очистить список времени
    timeSelect.innerHTML = ""; 
  
    if (!selectedDate) {
      // Если дата не выбрана, скрыть поле времени
      timeSelect.classList.add("hidden");
      timeLabel.classList.add("hidden");
      return;
    }
  
    // Показать поле выбора времени
    timeSelect.classList.remove("hidden");
    timeLabel.classList.remove("hidden");
  
    // Заполняем время для выбранной даты
    if (availableSlots[selectedDate]) {
      availableSlots[selectedDate].forEach((time) => {
        const option = document.createElement("option");
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
      });
    } else {
      // Если нет доступного времени
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "Нет доступного времени";
      timeSelect.appendChild(option);
    }
  });