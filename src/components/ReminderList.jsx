export default function ReminderList({ reminders, onDelete }) {
  return (
    <div className="card">
      <h2>Upcoming Reminders</h2>

      {reminders.length === 0 && <p>No reminders yet</p>}

      <ul>
        {reminders
          .sort(
            (a, b) =>
              new Date(a.datetime) - new Date(b.datetime)
          )
          .map((r) => (
            <li key={r.id}>
              <div>
                <strong>{r.title}</strong>
                <div>{new Date(r.datetime).toLocaleString()}</div>
                {r.notified && <span className="sent">✓ Sent</span>}
              </div>
              <button onClick={() => onDelete(r.id)}>✕</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
