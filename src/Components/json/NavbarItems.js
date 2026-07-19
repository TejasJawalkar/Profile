import {
  faBars,
  faBarsStaggered,
  faBriefcase,
  faHome,
  faInfo,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons/faTools";

export const navItems = [
  {
    path: "/",
    label: "Home",
    icon: faHome,
  },
  {
    path: "/About",
    label: "About",
    icon: faInfo,
  },
  {
    path: "/Services",
    label: "Services",
    icon: faTools,
  },
  {
    path: "/Experience",
    label: "Experience",
    icon: faBriefcase,
  },
  {
    path: "/Contact",
    label: "Contact",
    icon: faPhone,
  },
];
