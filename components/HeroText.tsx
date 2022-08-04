import Fuse from "fuse.js";
import { ChangeEvent, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

export const HeroText = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<String[]>([]);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const closeDropdown = () => {
    setShowSearchResult(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  const courses = [
    "azure-administrator-associate-az-104",
    "azure-ai-fundamentals-900",
    "azure-cosmos-db-developer-specialty-dp-420",
    "azure-data-fundamentals-900",
    "azure-data-scientist-associate-100",
    "azure-database-administrator-associate-300",
    "azure-developer-associate-az-204",
    "azure-fundamentals-900",
    "azure-network-engineer-associate-az-700",
    "azure-security-engineer-associate-az-500",
    "azure-solutions-architect-expert",
    "azure-stack-hub-operator-associate-az-600",
    "azure-virtual-desktop-specialty-az-140",
    "cybersecurity-architect-expert",
    "data-engineering-on-microsoft-azure-dp-203",
    "designing-implementing-enterprise-scale-analytics-solutions-using-microsoft-azure-microsoft-power-bi",
    "designing-implementing-microsoft-azure-ai-solution-ai-102",
    "developer-associate-ms-600",
    "devops-engineer-expert",
    "dynamics-365-fundamentals-910",
    "dynamics-365-fundamentals-920",
    "enterprise-administrator-expert",
    "exchange-online-support-engineer-specialty-ms-220",
    "managing-microsoft-teams-ms-700",
    "microsoft-365-fundamentals-900",
    "microsoft-365-messaging-ms-203",
    "microsoft-azure-iot-developer-az-220",
    "microsoft-identity-access-administrator-sc-300",
    "microsoft-information-protection-administrator-sc-400",
    "microsoft-security-operations-analyst-sc-200",
    "modern-desktop-administrator-associate-md-100",
    "power-apps-dynamics-365-developer-associate",
    "security-administrator-associate-ms-500",
    "security-compliance-and-identity-fundamentals-900",
    "teams-support-engineer-specialty-ms-740",
    "troubleshooting-microsoft-azure-connectivity-ms-720",
    "windows-server-hybrid-administrator-associat",
  ];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilteredCourses([]);
    setSearchText(e.target.value);
    const fuse = new Fuse(courses);
    setFilteredCourses(fuse.search(searchText).map((result) => result?.item));
    console.log(filteredCourses);
    if (filteredCourses.length > 0 && filteredCourses.length < courses.length) {
      setShowSearchResult(true);
    } else {
      setShowSearchResult(false);
    }
  };

  return (
    <div className="bg-white lg:bg-transparent -mt-20 py-12 px-8 lg:flex items-center">
      <div className="lg:ml-16">
        <h1
          className="text-4xl lg:text-6xl lg:tracking-wider font-extrabold mb-3"
          style={{ color: `#2D3957` }}
        >
          Where learning is a passion
        </h1>
        <h3 className="text-xl">
          We offer globally recognised Microsoft Certified courses taught by top
          pioneer of the industry.
        </h3>
        <div className="mt-6 w-full relative">
          <input
            type="text"
            value={searchText}
            id="search"
            onChange={(e) => handleSearch(e)}
            placeholder="Search for a course"
            className="w-full rounded-md h-16 pl-16 border"
          />
          <button className="bg-orange-500 h-14 px-8 rounded-md text-orange-50 absolute top-0 right-0 mt-1 mr-1">
            Search
          </button>
          {showSearchResult && (
            <ul
              className="z-50 bg-gray-100 shadow-lg space-y-2 py-2 h-full max-h-48 overflow-y-auto"
              ref={ref}
            >
              {courses.map((course) => (
                <li key={course}>
                  <a
                    href={`/course/${course}.html`}
                    className={
                      "block py-2 px-4 hover:bg-orange-500 hover:text-orange-50"
                    }
                  >
                    {course
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
