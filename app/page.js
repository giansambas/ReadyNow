export default function HomePage() {
  return (
    <div className="center">
      <h1>Welcome to ReadyNow</h1>
      <p className="section">
        ReadyNow helps users prepare for disasters by providing guidance,
        checklists, and evacuation information.
      </p>

      <a href="/disaster">
        <button>Get Started</button>
      </a>
    </div>
  );
}