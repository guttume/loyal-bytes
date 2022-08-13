export default {
  title: "Designing and Implementing a Microsoft Azure AI Solution AI - 102",
  subtitle:
    "A master course designed for working professionals like you. Make your career soar with Loyal Bytes.",
  heroImage: "/images/course-page/azure-hero-image.png",
  heroBg: "/images/course-page/azure-hero-bg.png",
  courseDetail: {
    duration: "40 Hours",
    certification: "DP – 203 and Data Engineering on Microsoft Azure",
    batchInfo: "Weekends and weekdays batches available",
    level: "200",
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
      "Learn how to protect the information in your Microsoft 365 deployment. This course focuses on data governance and information protection within your organization. The course covers the implementation of data loss prevention policies, sensitive information types, sensitivity labels, data retention policies and Office 365 message encryption among other related topics. The course helps learners prepare for the Microsoft Information Protection Administrator exam (SC-400). The Microsoft information protection administrator plans and implements controls that meet organizational compliance needs. This person is responsible for translating requirements and compliance controls into technical implementation. They assist organizational control owners to become and stay compliant. They work with information technology (IT) personnel, business application owners, human resources, and legal stakeholders to implement technology that supports policies and controls necessary to sufficiently address regulatory requirements for their organization. They also work with the compliance and security leadership, such as a chief compliance officer and security officer, to evaluate the full breadth of associated enterprise risk and partner to develop those policies. This person defines applicable requirements and tests IT processes and operations against those policies and controls.They are responsible for creating policies and rules for content classification, data loss prevention, governance, and protection.",
  },
  idealFor:
    "Candidates for Exam AI-102: Designing and Implementing a Microsoft Azure AI Solution build, manage, and deploy AI solutions that leverage Azure Cognitive Services and Azure Applied AI services. Their responsibilities include participating in all phases of AI solutions development—from requirements definition and design to development, deployment, maintenance, performance tuning, and monitoring. They work with solution architects to translate their vision and with data scientists, data engineers, IoT specialists, and AI developers to build complete end-to-end AI solutions. Candidates for this exam should be proficient in C# or Python and should be able to use REST-based APIs and SDKs to build computer vision, natural language processing, knowledge mining, and conversational AI solutions on Azure. They should also understand the components that make up the Azure AI portfolio and the available data storage options. Plus, candidates need to understand and be able to apply responsible AI principles",
  learningObjectives:
    "Create beautiful web flow. Learn how to migrate and host on Microsoft Azure",
  modules: [
    {
      title: "Module 1: IMPLEMENT INFORMATION PROTECTION (35-40%)",
      submodules: [
        {
          heading: "CREATE AND MANAGE SENSITIVE INFORMATION TYPES",
          contents: [
            "Select a sensitive information type based on an organization's requirements",
            "Create and manage custom sensitive information types",
            "Create custom sensitive information types with exact data match",
            "Implement document fingerprinting",
            "Create a keyword dictionary",
          ],
        },
        {
          heading: "CREATE AND MANAGE TRAINABLE CLASSIFIERS",
          contents: [
            "Identify when to use trainable classifiers",
            "Create a trainable classifier",
            "Verify a trainable classifier is performing properly",
            "Retrain a classifier",
          ],
        },
        {
          heading: "IMPLEMENT AND MANAGE SENSITIVITY LABELS",
          contents: [
            "Identify roles and permissions for administering sensitivity labels",
            "Create sensitivity labels",
            "Configure and manage sensitivity label policies",
            "Apply sensitivity labels to microsoft teams, microsoft 365 groups, and sharepoint sites",
            "Configure and publish automatic labeling policies (excluding microsoft defender for cloud apps scenarios)",
            "Monitor data classification and label usage by using label analytics tools such as content explorer and activity explorer",
            "Apply bulk classification to on-premises data by using the aip unified labelling scanner",
            "Manage protection settings and marking for applied sensitivity labels",
            "Apply protections and restrictions to email including content marking, usage, permission, encryption, expiration, etc.",
            "Apply protections and restrictions to files including content marking, usage, permission, encryption, expiration, etc.",
            "Manage and govern data by using azure purview",
          ],
        },
        {
          heading: "IMPLEMENT AND MANAGE SENSITIVITY LABELS",
          contents: [
            "Define requirements for implementing Office 365 Message Encryption",
            "Implement Office 365 Advanced Message Encryption",
          ],
        },
      ],
    },
    {
      title: "Module 2: IMPLEMENT DATA LOSS PREVENTION (30-35%)",
      submodules: [
        {
          heading: "9.2.1	CREATE AND CONFIGURE DATA LOSS PREVENTION POLICIES",
          contents: [
            "Recommend a data loss prevention solution for an organization",
            "Configure data loss prevention for policy precedence",
            "Configure policies for microsoft exchange email",
            "Configure policies for microsoft sharepoint sites",
            "Configure policies for microsoft onedrive accounts",
            "Configure policies for microsoft teams chat and channel messages",
            "Integrate microsoft defender for cloud apps with microsoft information protection",
            "Configure policies in microsoft defender for cloud apps",
            "Implement data loss prevention policies in test mode",
          ],
        },
        {
          heading:
            "IMPLEMENT AND MONITOR MICROSOFT ENDPOINT DATA LOSS PREVENTION",
          contents: [
            "Configure policies for endpoints",
            "Configure endpoint data loss prevention settings",
            "Recommend configurations that enable devices for endpoint data loss prevention policies",
            "Monitor endpoint activities",
          ],
        },
        {
          heading:
            "MANAGE AND MONITOR DATA LOSS PREVENTION POLICIES AND ACTIVITIES",
          contents: [
            "Manage and respond to data loss prevention policy violations",
            "Review and analyze data loss prevention reports",
            "Manage permissions for data loss prevention reports",
            "Manage data loss prevention violations in microsoft defender for cloud apps",
          ],
        },
      ],
    },
    {
      title: "Module 3: IMPLEMENT INFORMATION GOVERNANCE (25-30%)",
      submodules: [
        {
          heading: "CONFIGURE RETENTION POLICIES AND LABELS",
          contents: [
            "Create and apply retention labels",
            "Create and apply retention label policies",
            "Configure and publish auto-apply label policies",
          ],
        },
        {
          heading: "9.3.2	MANAGE DATA RETENTION IN MICROSOFT 365",
          contents: [
            "Create and apply retention policies in Microsoft sharepoint and onedrive",
            "Create and apply retention policies in Microsoft Teams",
            "Recover content in Microsoft Teams, sharepoint, and onedrive",
            "Recover content in Microsoft Exchange",
            "Implement retention policies and tags in Microsoft Exchange",
            "Apply mailbox holds in Microsoft Exchange",
            "Implement Microsoft Exchange Online archiving policies",
          ],
        },
        {
          heading: "IMPLEMENT RECORDS MANAGEMENT IN MICROSOFT 365",
          contents: [
            "Configure labels for records management",
            "Manage and migrate retention requirements with a file plan",
            "Configure automatic retention using file plan descriptors",
            "Classify records using retention labels and policies",
            "Implement in-place records management in microsoft sharepoint",
            "Configure event-based retention",
            "Manage disposition of records",
          ],
        },
      ],
    },
  ],
  onCompletion: [
    "The bullets that follow each of the skills measured are intended to illustrate how we are assessing that skill. Related topics may not be covered in the exam.Most questions cover features that are general availability (GA). The exam may contain questions on Preview features if those features are commonly used.",
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
