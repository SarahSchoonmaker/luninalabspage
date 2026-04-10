import Image from "next/image";
import styles from "./Homepage.module.css";

export default function Homepage() {
  const apps = [
    {
      name: "KindredPal",
      description:
        "A community-centered platform available on web and iOS that helps people build meaningful connections through shared life experiences, support groups, direct messaging, and meetups.",
      href: "https://apps.apple.com/us/app/kindredpal/id6759475029",
      website: "https://www.kindredpal.com",
      status: "Live on the App Store",
      cta: "Download KindredPal",
      learnMore: "#kindredpal",
    },
    {
      name: "Pal Feelings",
      description:
        "A social-emotional learning game for ages 4–8 that builds emotional awareness, memory, and focus through playful interaction.",
      href: "#pal-feelings",
      status: "Coming soon",
      cta: "Learn About Pal Feelings",
      learnMore: "#pal-feelings",
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
            <span className={styles.brandText}>
              Build Connections. Learn. Grow.
            </span>
          </a>

          <nav className={styles.navLinks}>
            <a href="#home">Home</a>
            <a href="#apps">Apps</a>
            <a href="#mission">Mission</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#apps" className={styles.navButton}>
            Explore Apps
          </a>
        </div>
      </header>

      <main>
        <section id="home" className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              Interactive apps for connection, learning, and wellbeing
            </div>

            <h1>Build Connections. Learn. Grow.</h1>

            <p>
              Lumina Labs builds apps that help people connect, learn, and grow
              through interactive design. Our products focus on meaningful
              relationships, emotional development, and wellbeing for kids and
              adults.
            </p>

            <div className={styles.heroButtons}>
              <a
                href="https://apps.apple.com/us/app/kindredpal/id6759475029"
                className={styles.primaryButton}
                target="_blank"
                rel="noreferrer"
              >
                Download KindredPal
              </a>
              <a href="#mission" className={styles.secondaryButton}>
                Learn More
              </a>
            </div>
          </div>

          <div className={styles.heroCard}>
            <p className={styles.cardLabel}>Our Mission</p>
            <h2>Lumina Labs</h2>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span>Focus</span>
                <strong>Connection &amp; Wellbeing</strong>
              </div>
              <div className={styles.statCard}>
                <span>Approach</span>
                <strong>Interactive Design</strong>
              </div>
              <div className={styles.statCard}>
                <span>Products</span>
                <strong>Apps for Kids &amp; Adults</strong>
              </div>
              <div className={styles.statCard}>
                <span>Guiding Idea</span>
                <strong>Build. Learn. Grow.</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className={styles.missionSection}>
          <div className={styles.missionHeader}>
            <div>
              <p className={styles.sectionLabel}>Mission</p>
              <h2>Technology that supports connection, learning, and growth</h2>
            </div>

            <p className={styles.missionIntro}>
              We believe technology should help people build stronger
              relationships, learn emotional and social skills, and improve
              wellbeing through experiences that are engaging and easy to use.
            </p>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <h3>Connection</h3>
              <p>
                We design products that help people find community, shared
                experience, and meaningful relationships.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <h3>Learning</h3>
              <p>
                Our apps encourage emotional development, reflection, and skill
                building through interaction.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <h3>Wellbeing</h3>
              <p>
                We create experiences that support healthier habits, stronger
                communities, and personal growth.
              </p>
            </div>
          </div>
        </section>

        <section id="apps" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>Our Apps</p>
              <h2>Products designed for connection, learning, and growth</h2>
            </div>
            <p className={styles.sectionText}>
              Lumina Labs is building a family of apps that support community,
              emotional learning, and wellbeing through thoughtful interactive
              experiences.
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
                  <a
                    href={app.href}
                    className={styles.primaryButton}
                    target={app.href.startsWith("http") ? "_blank" : undefined}
                    rel={app.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {app.cta}
                  </a>

                  {app.website ? (
                    <a
                      href={app.website}
                      className={styles.secondaryButton}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Website
                    </a>
                  ) : (
                    <a href={app.learnMore} className={styles.secondaryButton}>
                      Learn More
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="kindredpal" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>Featured App</p>
              <h2>KindredPal</h2>
            </div>
            <p className={styles.sectionText}>
              KindredPal helps people find meaningful connection through shared
              experiences, support groups, direct messaging, and meetups.
            </p>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <h3>What it is</h3>
              <p>
                KindredPal is a community-centered peer support platform that
                helps people find their people through shared values, life
                stages, and lived experiences.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <h3>How it helps</h3>
              <p>
                Users can discover support groups, build real connections, join
                conversations, and create meetups both locally and online.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <h3>Why it matters</h3>
              <p>
                KindredPal is designed to reduce isolation and make it easier
                for people to learn from others who genuinely understand what
                they are going through.
              </p>
            </div>
          </div>

          <div className={styles.sectionActions}>
            <a
              href="https://apps.apple.com/us/app/kindredpal/id6759475029"
              className={styles.primaryButton}
              target="_blank"
              rel="noreferrer"
            >
              View on the App Store
            </a>
            <a
              href="https://www.kindredpal.com"
              className={styles.secondaryButton}
              target="_blank"
              rel="noreferrer"
            >
              Visit KindredPal Website
            </a>
          </div>
        </section>

        <section id="pal-feelings" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionLabel}>Coming Soon</p>
              <h2>Pal Feelings</h2>
            </div>
            <p className={styles.sectionText}>
              A social-emotional learning game for ages 4–8.
            </p>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <h3>What it is</h3>
              <p>
                Pal Feelings is a memory-based learning game for kids that
                teaches emotional recognition through playful interaction.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <h3>How it helps</h3>
              <p>
                Children watch and repeat emotion sequences, helping build
                memory, focus, empathy, and social-emotional learning skills.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <h3>Who it is for</h3>
              <p>
                Designed for ages 4–8, with simple gameplay and parent-friendly
                features that make emotional learning feel fun and accessible.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className={styles.footer}>
        <div>
          <h3>Lumina Labs</h3>
          <p>Apps that help people connect, learn, and grow.</p>
        </div>
        <a href="mailto:support@llabgames.com" className={styles.footerLink}>
          support@llabgames.com
        </a>
      </footer>
    </div>
  );
}
