const STORAGE_KEY = "reminder_calendar";

export const loadReminders = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveReminders = (reminders) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
};
