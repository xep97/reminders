import { useState } from "react";

export default function ReminderForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !datetime) return;

    onAdd({
      id: crypto.randomUUID(),
      title,
      description,
      datetime,
      notified: false
    });

    setTitle("");
    setDescription("");
    setDatetime("");
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Add Reminder</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="datetime-local"
        value={datetime}
        onChange={(e) => setDatetime(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}
