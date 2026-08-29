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
  SiSqlite,
} from "react-icons/si";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaGolang } from "react-icons/fa6";

export const PROJECTS = [
  {
    id: 1,
    title: "Puti",
    description: "E-commerce for apparel",
    link: "https://puti.vercel.app/",
    icon: <FiShoppingBag />,
    techs: [
      { id: 1, icon: <SiNextdotjs /> },
      { id: 2, icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 2,
    title: "Haikyuu!!",
    description: "An anime themed web app",
    link: "https://haikyu.netlify.app/",
    icon: <FaVolleyballBall />,
    techs: [
      { id: 1, icon: <SiHtml5 /> },
      { id: 2, icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 3,
    title: "Nori (API)",
    description: "Personal finance API",
    link: "https://github.com/aeschyllus/nori",
    icon: <GrMoney />,
    techs: [
      { id: 1, icon: <FaGolang /> },
      { id: 2, icon: <SiSqlite /> },
    ],
  },
  {
    id: 4,
    title: "Samsung Privacy",
    description:
      "Samsung’s privacy platform for managing user privacy preferences, data permissions, and privacy-related services.",
    link: "https://privacy.samsung.com/",
    icon: <MdOutlinePrivacyTip />,
    techs: [
      { id: 1, icon: <GrReactjs /> },
      { id: 2, icon: <SiRedux /> },
    ],
  },
  {
    id: 5,
    title: "Oman Air",
    description:
      "Oman Air’s official airline platform for flight booking, trip management, check-in, and travel services.",
    link: "https://wwww.omanair.com/",
    icon: <GiCommercialAirplane />,
    techs: [
      { id: 1, icon: <GrReactjs /> },
      { id: 2, icon: <SiRedux /> },
    ],
  },
];
