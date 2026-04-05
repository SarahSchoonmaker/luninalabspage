import Image from "next/image";
import styles from "./Homepage.module.css";

export default function Homepage() {
  const apps = [
    {
      name: "Game One",
      description: "A fun and engaging game for curious minds.",
      href: "#",
      status: "Coming soon",
    },
    {
      name: "Game Two",
      description: "Playful learning and entertainment for all ages.",
      href: "#",
      status: "Coming soon",
    },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.navbar}>
        <div className={styles.navInner}>
          <a href="#home" className={styles.brand}>
            <Image
              src="/logo-transparent.png"
              alt="Lumina Labs logo"
              width={250}
              height={250}
              className={styles.logo}
            />
            <span className={styles.brandText}>Learn. Play. Grow.</span>
          </a>

          <nav className={styles.navLinks}>
            <a href="#home">Home</a>
            <a href="#games">Games</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#games" className={styles.navButton}>
            View Apps
          </a>
        </div>
      </header>

      <main>
        <section id="home" className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              Educational Games for Kids + Adults
            </div>
            <h1>
              Games that entertain, educate, and feel worth coming back to.
            </h1>
            <p>
              Lumina Labs builds polished mobile games that blend fun,
              challenge, and learning into experiences people actually want to
              play.
            </p>

            <div className={styles.heroButtons}>
              <a href="#games" className={styles.primaryButton}>
                Explore Our Apps
              </a>
              <a href="#about" className={styles.secondaryButton}>
                Learn More
              </a>
            </div>
          </div>

          <div className={styles.heroCard}>
            <p className={styles.cardLabel}>Featured Studio</p>
            <h2>Lumina Labs</h2>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span>Focus</span>
                <strong>Educational Games</strong>
              </div>
              <div className={styles.statCard}>
                <span>Audience</span>
                <strong>Kids + Adults</strong>
              </div>
              <div className={styles.statCard}>
                <span>Platform</span>
                <strong>Apple App Store</strong>
              </div>
              <div className={styles.statCard}>
                <span>Mission</span>
                <strong>Play. Learn. Grow.</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="games" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>Our Apps</p>
              <h2>Download our games on the App Store</h2>
            </div>
            <p className={styles.sectionText}>
              Add your live App Store links below. Until launch, you can keep
              these cards as coming soon.
            </p>
          </div>

          <div className={styles.appGrid}>
            {apps.map((app) => (
              <div key={app.name} className={styles.appCard}>
                <div className={styles.appTop}>
                  <div className={styles.appIcon}>
                    {app.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <span className={styles.status}>{app.status}</span>
                </div>

                <h3>{app.name}</h3>
                <p>{app.description}</p>

                <div className={styles.appButtons}>
                  <a href={app.href} className={styles.primaryButton}>
                    View on App Store
                  </a>
                  <a href="#about" className={styles.secondaryButton}>
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className={styles.aboutSection}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>About</p>
              <h2>Built for meaningful play</h2>
            </div>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <h3>Entertaining</h3>
              <p>
                We design games that feel polished, fun, and easy to pick up.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <h3>Educational</h3>
              <p>
                Our games encourage learning, focus, strategy, and curiosity.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <h3>Accessible</h3>
              <p>We build experiences for both kids and adults to enjoy.</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className={styles.footer}>
        <div>
          <h3>Lumina Labs</h3>
          <p>Play. Learn. Grow.</p>
        </div>
        <a href="mailto:support@llabgames.com" className={styles.footerLink}>
          llabgames.com
        </a>
      </footer>
    </div>
  );
}
