import "./globals.css";

export const metadata = {
  title: "ReadyNow",
  description: "AI Disaster Readiness Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header style={styles.header}>
          <h2>ReadyNow</h2>
          <nav>
            <a href="/" style={styles.link}>Home</a>
            <a href="/about" style={styles.link}>About</a>
          </nav>
        </header>

        <main style={styles.main}>
          {children}
        </main>

        <footer style={styles.footer}>
          <p>ReadyNow © 2026</p>
        </footer>
      </body>
    </html>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    borderBottom: "1px solid #ccc",
  },
  link: {
    marginLeft: "16px",
    textDecoration: "none",
    color: "#333",
  },
  main: {
    padding: "40px",
  },
  footer: {
    padding: "16px",
    borderTop: "1px solid #ccc",
    textAlign: "center",
    marginTop: "40px",
  },
};