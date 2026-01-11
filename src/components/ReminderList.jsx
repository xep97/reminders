export default function ReminderList({ reminders, onDelete }) {
  return (
    <div className="card">
      <h2>Your Reminders</h2>

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
                <p>{r.description}</p>
                <div>{new Date(r.datetime).toLocaleString()}</div>
                {r.notified && <span className="sent">✓ Complete</span>}
              </div>
              <button onClick={() => onDelete(r.id)}>Remove</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
