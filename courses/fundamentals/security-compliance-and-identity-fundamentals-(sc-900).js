export default {
  title: "Security, Compliance, and Identity Fundamentals - 900",
  subtitle:
    "A master course designed for working professionals like you. Make your career soar with Loyal Bytes.",
  heroImage: "/images/course-page/azure-hero-image.png",
  heroBg: "/images/course-page/azure-hero-bg.png",
  courseDetail: {
    duration: "16 Hours",
    certification: "Microsoft Certification",
    batchInfo: "Weekdays batches available",
    level: "100",
    highlights: [
      {
        icon: "user",
        color: "orange",
        heading: "Duration",
        subheading: "16 Hours.",
      },
      {
        icon: "user ",
        color: "orange",
        heading: "Batch Days",
        subheading: "Weekdays",
      },
      {
        icon: "user ",
        color: "orange",
        heading: "Learning mode",
        subheading:
          "Group, One-to-One, Corporate Batches, Online Live Classrooms",
      },
      {
        icon: "user",
        color: "orange",
        heading: "Passing score",
        subheading: "700",
      },
    ],
    bg: "blue",
    displayImage: "/images/course-page/azure-hightlights-image.png",
    description:
      "Whether you’re a student, business user, or IT professional, this certification ensures you have a firm grasp of a range of topics in the rapidly growing field of cybersecurity. This fundamentals certification can serve as a steppingstone if you are interested in advancing to role-based certifications in security operations, identity and access management, and information protection. It is recommended to have familiarity with networking and cloud computing concepts, general IT knowledge or any general experience working in an IT environment, general understanding of Microsoft Azure and Microsoft 365.",
  },
  idealFor:
    "This certification is targeted to those looking to familiarize themselves with the fundamentals of security, compliance, and identity (SCI) across cloud-based and related Microsoft services. This is a broad audience that may include business stakeholders, new or existing IT professionals, or students who have an interest in Microsoft Security, compliance, and identity solutions. Candidates should be familiar with Microsoft Azure and Microsoft 365 and want to understand how Microsoft Security, compliance, and identity solutions can span across these solution areas to provide a holistic and end-to-end solution.",

  learningObjectives:
    "Demonstrate your knowledge of Microsoft Security, Compliance, and Identity (SCI) solutions. Highlight your understanding of how Microsoft SCI solutions provide holistic, end-to-end cybersecurity capabilities.",
  modules: [
    {
      title:
        "Module 1:	DESCRIBE THE CONCEPTS OF SECURITY, COMPLIANCE, AND IDENTITY (10-15%) ",
      submodules: [
        {
          heading: "9.1.1	DESCRIBE SECURITY AND COMPLIANCE CONCEPTS",
          contents: [
            "the shared responsibility models ",
            "describe defense in depth ",
            "describe the Zero-Trust model ",
            "describe encryption and hashing ",
            "describe compliance concepts ",
          ],
        },
        {
          heading: "9.1.2	DEFINE IDENTITY CONCEPTS",
          contents: [
            "define identity as the primary security perimeter ",
            "define authentication ",
            "define authorization ",
            "describe identity providers are ",
            "describe Azure Active Directory ",
            "describe the concept of Federation ",
          ],
        },
      ],
    },
    {
      title:
        "Module 2: DESCRIBE THE CAPABILITIES OF MICROSOFT IDENTITY AND ACCESS MANAGEMENT SOLUTIONS (25-30%) ",
      submodules: [
        {
          heading:
            "9.2.1	DESCRIBE THE BASIC IDENTITY SERVICES AND IDENTITY TYPES OF AZURE AD",
          contents: [
            "describe Azure Active Directory (AD) ",
            "describe Azure AD identities ",
            "describe what hybrid identity ",
            "describe the different external identity types ",
          ],
        },
        {
          heading: "9.2.2	DESCRIBE THE AUTHENTICATION CAPABILITIES OF AZURE AD",
          contents: [
            "describe the authentication methods available in Azure AD ",
            "describe multi-factor authentication ",
            "describe self-service password reset ",
            "describe password protection and management capabilities available in Azure AD ",
          ],
        },
        {
          heading: "9.2.3	DESCRIBE ACCESS MANAGEMENT CAPABILITIES OF AZURE AD",
          contents: [
            "describe what conditional access is",
            "describe the benefits of Azure AD roles",
            "describe the benefits of Azure AD role-based access control",
          ],
        },
        {
          heading:
            "9.2.4	DESCRIBE THE IDENTITY PROTECTION & GOVERNANCE CAPABILITIES OF AZURE AD",
          contents: [
            "describe identity governance in Azure AD ",
            "describe entitlement management and access reviews ",
            "describe the capabilities of PIM ",
            "describe Azure AD Identity Protection ",
          ],
        },
      ],
    },
    {
      title:
        "Module 3: DESCRIBE THE CAPABILITIES OF MICROSOFT SECURITY SOLUTIONS (25-30%)",
      submodules: [
        {
          heading: "9.3.1	DESCRIBE BASIC SECURITY CAPABILITIES IN AZURE",
          contents: [
            "describe Azure DDoS protection",
            "describe Azure Firewall",
            "describe Web Application Firewall",
            "describe Network Segmentation with Azure VNet",
            "describe Azure Network Security groups",
            "describe Azure Bastion and JIT Access",
            "describe the ways Azure encrypts data",
          ],
        },
        {
          heading: "9.3.2	DESCRIBE SECURITY MANAGEMENT CAPABILITIES OF AZURE",
          contents: [
            "describe Cloud security posture management (CSPM)",
            "describe Microsoft Defender for Cloud",
            "describe enhanced security features of Microsoft Defender for Cloud",
            "describe security baselines for Azure",
          ],
        },
        {
          heading: "9.3.3	DESCRIBE SECURITY CAPABILITIES OF MICROSOFT SENTINEL",
          contents: [
            "define the concepts of SIEM and SOAR",
            "describe how Microsoft Sentinel provides integrated threat management",
          ],
        },
        {
          heading:
            "9.3.4	DESCRIBE THREAT PROTECTION WITH MICROSOFT 365 DEFENDER",
          contents: [
            "describe Microsoft 365 Defender services",
            "describe Microsoft Defender for Office 365",
            "describe Microsoft Defender for Endpoint",
            "describe Microsoft Defender for Cloud Apps",
            "describe Microsoft Defender for Identity",
            "describe the Microsoft 365 Defender portal",
          ],
        },
      ],
    },
    {
      title:
        "Module 4: DESCRIBE THE CAPABILITIES OF MICROSOFT COMPLIANCE SOLUTIONS (25-30%)",
      submodules: [
        {
          heading:
            "9.4.1	DESCRIBE THE COMPLIANCE MANAGEMENT CAPABILITIES OF MICROSOFT",
          contents: [
            "describe the offerings of the Service Trust portal",
            "describe Microsoft’s privacy principles",
          ],
        },
        {
          heading:
            "9.4.2	DESCRIBE THE COMPLIANCE MANAGEMENT CAPABILITIES OF MICROSOFT 365",
          contents: [
            "describe Microsoft 365 compliance center",
            "describe compliance manager",
            "describe the use of benefits of compliance score",
          ],
        },
        {
          heading:
            "9.4.3	DESCRIBE INFORMATION PROTECTION AND GOVERNANCE CAPABILITIES OF MICROSOFT 365",
          contents: [
            "describe data classification capabilities",
            "describe the benefits of content and activity explorer",
            "describe sensitivity labels",
            "describe Data Loss Prevention (DLP)",
            "describe Records Management",
            "describe Retention Polices and Retention Labels",
          ],
        },
        {
          heading: "9.4.4	DESCRIBE INSIDER RISK CAPABILITIES IN MICROSOFT 365",
          contents: [
            "describe Insider Risk Management",
            "describe communication compliance",
            "describe information barriers",
          ],
        },
        {
          heading: "9.4.5	DESCRIBE RESOURCE GOVERNANCE CAPABILITIES IN AZURE",
          contents: [
            "describe what Azure Blueprints is",
            "describe Azure Policy",
            "describe Azure Blueprint",
            "describe Azure Purview",
          ],
        },
      ],
    },
  ],
  onCompletion: [
    "The bullets that follow each of the skills measured are intended to illustrate how we are assessing that skill. Related topics may be covered in the exam. ",
    "Most questions cover features that are general availability (GA). The exam may contain questions on Preview features if those features are commonly used.",
  ],
  batches: [
    {
      id: "",
      days: "",
      mode: "",
      time: "",
      duration: "",
    },
    {
      id: "",
      days: "",
      mode: "",
      time: "",
      duration: "",
    },
    {
      id: "",
      days: "",
      mode: "",
      time: "",
      duration: "",
    },
    {
      id: "",
      days: "",
      mode: "",
      time: "",
      duration: "",
    },
    {
      id: "",
      days: "",
      mode: "",
      time: "",
      duration: "",
    },
  ],
};
