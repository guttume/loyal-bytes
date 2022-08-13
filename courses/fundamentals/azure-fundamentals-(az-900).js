export default {
  title: "Azure Fundamentals - 900",
  subtitle:
    "A master course designed for working professionals like you. Make your career soar with Loyal Bytes.",
  heroImage: "/images/course-page/azure-hero-image.png",
  heroBg: "/images/course-page/azure-hero-bg.png",
  courseDetail: {
    duration: "8 Hours",
    certification: "Microsoft Certification",
    batchInfo: "Weekdays batches available",
    level: "100",
    highlights: [
      {
        icon: "user",
        color: "orange",
        heading: "Duration",
        subheading: "8 Hours.",
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
      "Whether you&apos;re new to the field or a seasoned professional, mastering the basics in Microsoft Azure can help you jump-start your career and prepare you to dive deeper into the many technical opportunities Azure offers. The certification validates your basic knowledge of cloud services and how those services are provided with Azure. Candidates should be able to demonstrate a fundamental knowledge of cloud concepts, along with Azure services, workloads, security, privacy, pricing, and support. It is recommended to have familiarity with concepts of networking, storage, compute, application support, and application development. You can use your Azure Fundamentals certification to reinforce your basics for other Azure role-based or specialty certifications, but it isn&apos;t a prerequisite for any of them.",
  },
  idealFor:
    "Candidates for this exam are technology professionals who want to demonstrate foundational knowledge of cloud concepts and Microsoft Azure. These professionals can describe Azure architectural components and Azure services, such as compute, networking, and storage. They can also describe features and tools to secure, govern, and administer Azure. Candidates for this exam have skills and experience working with an area of information technology, such as infrastructure management, database management, or software development.",

  learningObjectives:
    "Prove your knowledge of cloud computing concepts, models, and services, such as public, private, and hybrid cloud, in addition to infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS). Show your expertise on how Azure supports security, privacy, compliance, and trust.",
  modules: [
    {
      title: "Module 1:	DESCRIBE CLOUD CONCEPTS (25–30%) ",
      submodules: [
        {
          heading: "9.1.1	DESCRIBE CLOUD COMPUTING ",
          contents: [
            "describe the shared responsibility model ",
            "define cloud computing ",
            "define cloud models, including public, private, and hybrid ",
            "identify appropriate use cases for each cloud model ",
            "describe the consumption-based model ",
            "compare cloud pricing models ",
          ],
        },
        {
          heading: "9.1.2	DESCRIBE THE BENEFITS OF USING CLOUD SERVICES ",
          contents: [
            "describe the benefits of high availability and scalability in the cloud ",
            "describe the benefits of reliability and predictability in the cloud ",
            "describe the benefits of security and governance in the cloud ",
            "describe the benefits of manageability in the cloud             ",
          ],
        },
        {
          heading: "9.1.3	DESCRIBE CLOUD SERVICE TYPES ",
          contents: [
            "describe infrastructure as a service (IaaS) ",
            "describe platform as a service (PaaS) ",
            "describe software as a service (SaaS) ",
            "identify appropriate use cases for each cloud service (IaaS, PaaS, SaaS) ",
          ],
        },
      ],
    },
    {
      title: "Module 2:	9.2	DESCRIBE AZURE ARCHITECTURE AND SERVICES (35–40%)  ",
      submodules: [
        {
          heading: "9.2.1	DESCRIBE THE CORE ARCHITECTURAL COMPONENTS OF AZURE  ",
          contents: [
            "describe Azure regional, regional pairs, and sovereign regions ",
            "describe availability zones ",
            "describe Azure datacenters ",
            "describe Azure resources and resource groups ",
            "describe subscriptions ",
            "describe management groups ",
            "describe the hierarchy of resource groups, subscriptions, and management groups ",
          ],
        },
        {
          heading: "9.2.2	DESCRIBE AZURE COMPUTE AND NETWORKING SERVICES  ",
          contents: [
            "compare compute types, including container instances, virtual machines (VMs), and functions ",
            "describe VM options, including Azure Virtual Machines, Azure Virtual Machine Scale Sets, availability sets, and Azure Virtual Desktop ",
            "describe resources required for virtual machines ",
            "describe application hosting options, including the Web Apps feature of Azure App Service, containers, and virtual machines ",
            "describe virtual networking, including the purpose of Azure Virtual Networks, Azure virtual subnets, peering, Azure DNS, Azure VPN Gateway, and Azure ExpressRoute ",
            "define public and private endpoints ",
          ],
        },
        {
          heading: "9.2.3	DESCRIBE AZURE STORAGE SERVICES ",
          contents: [
            "compare Azure storage services ",
            "describe storage tiers ",
            "describe redundancy options ",
            "describe storage account options and storage types ",
            "identify options for moving files, including AzCopy, Azure Storage Explorer, and Azure File Sync ",
            "describe migration options, including Azure Migrate and Azure Data Box ",
          ],
        },
        {
          heading: "9.2.4	DESCRIBE AZURE IDENTITY, ACCESS, AND SECURITY ",
          contents: [
            "describe directory services in Azure, including Azure Active Directory (Azure AD) and Azure Active Directory Domain Services (Azure AD DS)",
            "describe authentication methods in Azure, including single sign-on (SSO), multifactor authentication, and password less ",
            "describe external identities and guest access in Azure ",
            "describe Azure AD Conditional Access ",
            "describe Azure role-based access control (RBAC) ",
            "describe the concept of Zero Trust ",
            "describe the purpose of the defense in depth model ",
            "describe the purpose of Microsoft Defender for Cloud ",
          ],
        },
      ],
    },
    {
      title: "Module 3: DESCRIBE AZURE MANAGEMENT AND GOVERNANCE (30–35%)  ",
      submodules: [
        {
          heading: "9.3.1	DESCRIBE COST MANAGEMENT IN AZURE  ",
          contents: [
            "describe factors that can affect costs in Azure ",
            "compare the Pricing calculator and the Total Cost of Ownership (TCO) calculator ",
            "describe the Azure Cost Management and Billing tool ",
            "describe the purpose of tags ",
          ],
        },
        {
          heading:
            "9.3.2	DESCRIBE FEATURES AND TOOLS IN AZURE FOR GOVERNANCE AND COMPLIANCE ",
          contents: [
            "describe the purpose of Azure Blueprints ",
            "describe the purpose of Azure Policy ",
            "describe the purpose of resource locks ",
            "describe the purpose of the Service Trust Portal ",
          ],
        },
        {
          heading:
            "9.3.3	DESCRIBE FEATURES AND TOOLS FOR MANAGING AND DEPLOYING AZURE RESOURCES ",
          contents: [
            "describe the Azure portal ",
            "describe Azure Cloud Shell, including Azure CLI and Azure PowerShell ",
            "describe the purpose of Azure Arc ",
            "describe Azure Resource Manager and Azure Resource Manager templates (ARM templates)",
          ],
        },
        {
          heading: "9.3.4	DESCRIBE MONITORING TOOLS IN AZURE ",
          contents: [
            "describe the purpose of Azure Advisor ",
            "describe Azure Service Health ",
            "describe Azure Monitor, including Log Analytics, Azure Monitor alerts, and Application Insights ",
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
