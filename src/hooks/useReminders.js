import { useEffect, useState } from "react";
import { loadReminders, saveReminders } from "../utils/storage";

export default function useReminders() {
  const [reminders, setReminders] = useState(loadReminders);

  useEffect(() => {
    saveReminders(reminders);
  }, [reminders]);

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    const interval = setInterval(() => {
      const now = Date.now();

      setReminders((prev) =>
        prev.map((reminder) => {
          if (
            !reminder.notified &&
            new Date(reminder.datetime).getTime() <= now
          ) {
            new Notification(reminder.title, {
              body: reminder.description || "Reminder"
            });

            return { ...reminder, notified: true };
          }
          return reminder;
        })
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const addReminder = (reminder) => {
    setReminders((prev) => [...prev, reminder]);
  };

  const deleteReminder = (id) => {
    setReminders((prev) => prev.filter((r) => r.id !== id));
  };

  return { reminders, addReminder, deleteReminder };
}
