import { useState, ReactNode, useEffect } from "react";
import Logo from "../../../public/images/logo2.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Chart21, PresentionChart, ArrowRight2 } from "iconsax-reactjs";
import {
  LuArrowLeftToLine,
  LuArrowRightFromLine,
  LuLayoutDashboard,
} from "react-icons/lu";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TiUserOutline } from "react-icons/ti";
import { BsBoxSeam } from "react-icons/bs";
import { RxCamera } from "react-icons/rx";
import { IoChatbubblesSharp, IoReceiptOutline } from "react-icons/io5";
import { TbSettings } from "react-icons/tb";
import { ImStopwatch } from "react-icons/im";
import Navbar from "./navbar";
import { Container } from "@mui/material";

interface SidebarLayoutProps {
  children: ReactNode;
}

interface MenuItem {
  label: string;
  icon?: any;
  path?: string;
  children?: MenuItem[];
  hasDivider?: boolean;
  isSubMenu?: boolean | false;
}

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: LuLayoutDashboard,
    path: "Dashboard",
    children: [],
  },
  {
    label: "Users",
    path: "Users",
    icon: TiUserOutline,
    isSubMenu: true,
    children: [
      {
        label: "Custom Report",
        icon: PresentionChart,
        path: "/divisional_head/custom_report",
      },
      {
        label: "What-If Analysis",
        icon: Chart21,
        path: "/divisional_head/analysis",
      },
    ],
  },
  {
    label: "All Listings",
    path: "All Listings",
    icon: BsBoxSeam,
    isSubMenu: true,
    children: [
      {
        label: "Delivery Jobs",
        path: "/divisional_head/budget",
      },
      {
        label: "Delivery Offers",
        path: "/divisional_head/performance/performance_tracker",
      },
      {
        label: "Marketplace",
        path: "/divisional_head/performance/performance_tracker",
      },
    ],
  },
  {
    label: "Flex Reward",
    path: "Flex Reward",
    icon: RxCamera,
    children: [],
  },
  {
    label: "Disputes ",
    path: "Disputes ",
    icon: IoChatbubblesSharp,
    children: [],
  },
  {
    label: "Transactions",
    path: "Transactions",
    icon: IoReceiptOutline,
    isSubMenu: true,
    children: [],
  },
  {
    label: "User Support Ticket",
    path: "User Support Ticket",
    icon: IoChatbubblesSharp,
    children: [],
  },
  {
    label: "Settings",
    path: "Settings",
    icon: TbSettings,
    children: [],
    isSubMenu: true,
  },
  {
    label: "Blog & Broadcast",
    path: "Blog & Broadcast",
    icon: ImStopwatch,
    children: [],
  },
  {
    label: "Templates",
    path: "Templates",
    icon: ImStopwatch,
    children: [],
  },
  {
    label: "Audit Logs",
    path: "Audit Logs",
    icon: ImStopwatch,
    children: [],
  },
];

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    // Reset expanded sections when collapsing
    if (!isCollapsed) {
      setExpandedSections([]);
    }
  };

  const shouldShowFullContent = !isCollapsed || isHovered;

  const handleSectionHover = (sectionLabel: string | null) => {
    setHoveredSection(sectionLabel);

    // Auto-expand section on hover when collapsed
    if (sectionLabel && isCollapsed) {
      setExpandedSections([sectionLabel]);
    }
  };

  const handleSidebarMouseEnter = () => {
    setIsHovered(true);
  };

  const handleSidebarMouseLeave = () => {
    setIsHovered(false);
    setHoveredSection(null);
    // Clear expanded sections when leaving sidebar in collapsed mode
    if (isCollapsed) {
      setExpandedSections([]);
    }
  };

  const renderMenuItem = (item: MenuItem, depth: number = 0) => {
    const isExpanded =
      expandedSections.includes(item.label) ||
      (isCollapsed && hoveredSection === item.label);
    const isActive = item.path === item.label;
    const IconComponent = item.icon as React.ElementType;

    // For collapsed state, show all child items directly (no section headers)
    if (!shouldShowFullContent) {
      return (
        <div key={item.label} className={`space-y-1 bg-amber-200`}>
          {/* {menuItems.map((child) => child.icon)} */}
        </div>
      );
    }

    return (
      <div
        key={item.label}
        className={`w-full text-[14px] `}
        onMouseEnter={() => item.children && handleSectionHover(item.label)}
        onMouseLeave={() => item.children && handleSectionHover(null)}
      >
        <div
          className={`flex text-[#FFFFFF33] bg-[#1E3A8A] items-center p-3 cursor-pointer group relative
            ${
              expandedSections.includes(item.label)
                ? "bg-[#FFFFFF33] text-white rounded-b-none"
                : ""
            }
            ${depth > 0 && shouldShowFullContent ? "pl-1" : ""} 
            ${!shouldShowFullContent ? "justify-center" : ""}
            rounded-md mx-2 transition-colors duration-200`}
          onClick={() => {
            if (item.children && shouldShowFullContent) {
              toggleSection(item.label);
            } else if (item.path) {
              router.push(item.path);
            }
          }}
          title={!shouldShowFullContent ? item.label : ""}
        >
          {item.icon && (
            <div
              className={`mr-2 shrink-0 
              `}
            >
              <IconComponent
                size={20}
                variant="Bulk"
                color={`${
                  expandedSections.includes(item.label) ? "#FFFFFF" : "#BDBDBD"
                }`}
                className={`
                  ${
                    expandedSections.includes(item.label)
                      ? "text-white"
                      : "text-[#BDBDBD] group-hover:text-white"
                  }`}
              />
            </div>
          )}

          {shouldShowFullContent && (
            <>
              <span
                className={`text-[14px] whitespace-nowrap ${
                  expandedSections.includes(item.label)
                    ? "text-white"
                    : "text-[#BDBDBD]"
                }`}
              >
                {item.label}
              </span>
              {item.isSubMenu && (
                <MdOutlineKeyboardArrowDown
                  size={20}
                  className={`ml-auto transform transition-all duration-200
                    ${isExpanded ? "rotate-180" : ""}
                    ${isActive ? "text-white" : " group-hover:text-white"}`}
                />
              )}
            </>
          )}
        </div>

        {item.children && isExpanded && shouldShowFullContent && (
          <div className="flex flex-col mx-2 bg-[#1E3A8A] ">
            {item.children.map((child) => renderSubMenuItem(child))}
          </div>
        )}
      </div>
    );
  };

  const renderSubMenuItem = (item: MenuItem) => {
    return (
      <div
        key={item.label}
        className={`flex mx-3 my-1.5 items-center justify-center px-2 py-2 cursor-pointer
          text-[#BDBDBD] text-[14px] text-start hover:bg-[#FFFFFF33] hover:text-white rounded-md  transition-colors duration-200`}
        onClick={() => {
          if (item.path) {
            router.push(item.path);
          }
        }}
      >
        {/* {item.icon && (
          <item.icon
            size={16}
            variant="Bulk"
            className="mr-2 text-gray-700 group-hover:text-gray-900"
          />
        )} */}
        {item.label}
      </div>
    );
  };

  const sidebarWidth = shouldShowFullContent ? "250px" : "64px";
  const mainMarginLeft = shouldShowFullContent ? "250px" : "64px";

  return (
    <div className="flex min-h-screen relative ">
      {/* Hide sidebar completely on mobile since menu is now in navbar */}
      <div
        className={`fixed h-screen transition-all duration-300 z-30 flex flex-col`}
        style={{
          width: sidebarWidth,
        }}
        onMouseEnter={handleSidebarMouseEnter}
        onMouseLeave={handleSidebarMouseLeave}
      >
        {/* Logo Section */}
        <div
          className={`p-4 h-16 bg-white border-b border-gray-200 flex items-center ${
            shouldShowFullContent ? "justify-between" : "justify-center"
          }`}
        >
          {shouldShowFullContent ? (
            <Image src={Logo} alt="Logo" />
          ) : (
            <CiMenuFries />
          )}

          {shouldShowFullContent && (
            <button
              className="p-1 rounded-md bg-[#F7F8F9]  hover:bg-gray-100 group transition-all duration-200"
              onClick={toggleCollapse}
            >
              {isCollapsed ? (
                <LuArrowRightFromLine size={20} />
              ) : (
                <LuArrowLeftToLine size={20} />
              )}
            </button>
          )}
        </div>

        <div className="flex-1 bg-[#1E3A8A] overflow-auto">
          {shouldShowFullContent ? (
            <div className=" p-3 flex-1 overflow-auto ">
              <div className="bg-[#142F7C] p-3 rounded-2xl mt-9 flex-col space-y-2">
                {menuItems.map((item) => renderMenuItem(item))}
              </div>
            </div>
          ) : (
            <div className=" p-2 flex-1 flex flex-col space-y-2 items-center">
              {menuItems.map(
                (item) =>
                  item.icon && (
                    <div
                      key={item.label}
                      className="my-4 rounded-md hover:bg-[#142F7C] cursor-pointer transition-colors duration-200"
                      title={item.label}
                      onClick={() => {
                        if (item.path) {
                          router.push(item.path);
                        }
                      }}
                    >
                      <item.icon
                        size={20}
                        variant="Bulk"
                        className="text-[#BDBDBD] hover:text-white"
                      />
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          marginLeft: isMobile ? 0 : mainMarginLeft,
          width: isMobile ? "100%" : `calc(100% - ${mainMarginLeft}px)`,
        }}
        className={`flex-1 transition-all duration-300 min-h-screen w-[90%] bg-[#F7F7F7] relative overflow-hidden`}
      >
        <Navbar sidebarWidth={parseInt(mainMarginLeft)} />

        <div className="w-[90%] mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default SidebarLayout;
