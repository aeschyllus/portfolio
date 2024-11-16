import { FaVolleyballBall } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { GrReactjs, GrMoney } from "react-icons/gr";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import Container from "../components/Container";
import Spacer from "../components/Spacer";
import { HISTORY } from "../constants/history";
import { PROFILE_LINKS } from "../constants/profileLinks";
import { TOOLS } from "../constants/tools";

export default function Home() {
  // TODO: Figure out why icon is smaller when put on a separate file
  //       See constants/projects.js
  const PROJECTS = [
    {
      id: 1,
      title: "Samsung Privacy",
      description: "Samsung's privacy site",
      link: "https://privacy.samsung.com/",
      icon: <MdOutlinePrivacyTip className="text-5xl" />,
      techs: [
        { id: 1, icon: <GrReactjs /> },
        { id: 2, icon: <SiRedux /> },
      ],
    },
    {
      id: 2,
      title: "Xpense API",
      description: "Expense tracker",
      link: "https://github.com/aeschyllus/expensetracker-be",
      icon: <GrMoney className="text-5xl" />,
      techs: [
        { id: 1, icon: <SiNestjs /> },
        { id: 2, icon: <SiPrisma /> },
        { id: 3, icon: <SiDocker /> },
        { id: 4, icon: <SiPostgresql /> },
      ],
    },
    {
      id: 3,
      title: "Haikyuu!!",
      description: "An anime themed web app",
      link: "https://haikyu.netlify.app/",
      icon: <FaVolleyballBall className="text-5xl" />,
      techs: [
        { id: 1, icon: <SiHtml5 /> },
        { id: 2, icon: <SiTailwindcss /> },
      ],
    },
    {
      id: 4,
      title: "Puti",
      description: "E-commerce for apparel",
      link: "https://puti.vercel.app/",
      icon: <FiShoppingBag className="text-5xl" />,
      techs: [
        { id: 1, icon: <SiNextdotjs /> },
        { id: 2, icon: <SiTailwindcss /> },
      ],
    },
  ];

  return (
    <Container>
      <Spacer />
      <Spacer />
      <section className="w-full flex items-center justify-center">
        <div>
          <p>Hi, my name is</p>
          <h1 className="font-bold text-3xl">Mark Anthony Lapada</h1>
          <p className="text-right">Frontend Developer</p>
          <div className="flex items-center justify-end space-x-4 mt-3">
            {PROFILE_LINKS.map((profileLink) => (
              <a
                key={profileLink.id}
                href={profileLink.path}
                className="text-3xl"
              >
                {profileLink.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/about</h2>
        <p>
          Hey there! I&apos;m Mark, your friendly neighborhood frontend
          developer and all-around code aficionado. Picture me with a cup of
          coffee in one hand, a keyboard under my fingertips, and a mischievous
          grin on my face.
        </p>

        <p>
          I live for the thrill of crafting stunning user interfaces that make
          websites pop and dance like nobody&apos;s watching. From pixel-perfect
          designs to seamless animations, I&apos;ve got a knack for turning code
          into art. But don&apos;t let my serious coding face fool you—I&apos;ve
          got a wicked sense of humor that I can&apos;t help but infuse into my
          work.
        </p>

        <p>
          But my skills go beyond just coding. I have a secret power: the
          ability to read clients&apos; minds and transform their vague ideas
          into breathtaking websites. It&apos;s like I have an HTML-to-English
          dictionary stored in my brain.
        </p>

        <p>
          So, if you&apos;re looking for a frontend developer who can bring your
          wildest web dreams to life while keeping you entertained with my
          quirky sense of humor, look no further. Just be prepared for a few
          (okay, maybe more than a few) puns along the way—because laughter is
          the best syntax sugar, right?
        </p>

        <p>
          I can&apos;t wait to embark on this coding adventure with you.
          Let&apos;s make the web a more beautiful and functional place, one
          line of code at a time!
        </p>
      </section>

      <section id="history" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/history</h2>
        <div className="space-y-4">
          {HISTORY.map((job) => (
            <div
              key={job.id}
              className="border-l border-neutral-500 dark:border-amber-50 p-4"
            >
              <p className="text-xl font-bold">{job.position}</p>
              <p>{job.company}</p>
              <p className="text-sm italic">{job.duration}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tools" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="border border-neutral-500 dark:border-amber-50 p-4 space-y-4 grid place-items-center"
            >
              <p className="text-4xl">{tool.icon}</p>
              <p className="text-center">{tool.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              // href={project.link}
              className="flex items-center gap-11 justify-center border border-neutral-500 dark:border-amber-50 p-4"
            >
              <a href={project.link} className="">
                {project.icon}
              </a>
              <div>
                <p className="font-bold text-xl">{project.title}</p>
                <small>{project.description}</small>

                <div className="flex items-center gap-1 mt-2">
                  {project.techs.map((tech) => (
                    <span key={tech.id} className="text-lg">
                      {tech.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Spacer />
      <section className="grid place-items-center">
        <figure className="text-sm space-y-3">
          <blockquote className="italic">
            &quot;Simplicity is the ultimate sophistication&quot;
          </blockquote>
          <figcaption className="text-right">- Leonardo da Vinci</figcaption>
          <Spacer />
        </figure>
      </section>
    </Container>
  );
}
