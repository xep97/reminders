import ReminderForm from "./components/ReminderForm";
import ReminderList from "./components/ReminderList";
import useReminders from "./hooks/useReminders";

export default function App() {
  const { reminders, addReminder, deleteReminder } = useReminders();

  return (
    <div className="app">
      <h1>Reminders</h1>

      <ReminderForm onAdd={addReminder} />
      <ReminderList reminders={reminders} onDelete={deleteReminder} />
    </div>
  );
}
