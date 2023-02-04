import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="https://test.tutorbin.in/images/layout/logo_icon.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {[
          {
            h1: "Homework",
            h2: "Assignment Help",
            icon: "icon_1",
            type: "assignment",
          },
          {
            h1: "Live",
            h2: "Session",
            icon: "icon_2",
            type: "live session",
          },
          {
            h1: "Lab",
            h2: "Work",
            icon: "icon_3",
            type: "lab work",
          },
          {
            h1: "The art of essay",
            h2: "Writting",
            icon: "icon_4",
            type: "essay",
          },
          {
            h1: "Video",
            h2: "Solution",
            icon: "icon_5",
            type: "video solution",
          },
          {
            h1: "Project",
            h2: "Work",
            icon: "icon_6",
            type: "project",
          },
          {
            h1: "Speech",
            h2: "Writing",
            icon: "icon_7",
            type: "speech writing",
          },
          {
            h1: "Presentation",
            h2: "Writing",
            icon: "icon_8",
            type: "presentation",
          },
        ].map((service) => (
          <a
            key={service.type}
            href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {service.h1} <span>-&gt;</span>
            </h2>
            <p
              className={inter.className}
            >{`${service.h1} ${service.h2} ${service.icon} ${service.type}`}</p>
          </a>
        ))}
      </div>

      <div className={styles.description}>
        <p>Get started by order our service</p>
        <div>
          <a
            href="https://tutorbin.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="https://test.tutorbin.in/images/layout/logo_icon.svg"
              alt="Tutorbin Logo"
              className={styles.tutorbinLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
