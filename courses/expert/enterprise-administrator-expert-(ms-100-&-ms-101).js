export default {
  title: "Enterprise Administrator Expert MS 100 & MS 101",
  subtitle:
    "A master course designed for working professionals like you. Make your career soar with Loyal Bytes.",
  heroImage: "/images/course-page/azure-hero-image.png",
  heroBg: "/images/course-page/azure-hero-bg.png",
  courseDetail: {
    duration: "40 Hours",
    certification: "AZ - 104 and Azure Administrator Associate",
    batchInfo: "Weekend and weekdays batches available",
    level: "200",
    highlights: [
      {
        icon: "user",
        color: "orange",
        heading: "Duration",
        subheading: "120 Hours.",
      },
      {
        icon: "user ",
        color: "orange",
        heading: "Batch Days",
        subheading: "Weekends & Weekdays",
      },
      {
        icon: "user ",
        color: "orange",
        heading: "Learningmode",
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
      "Microsoft 365 enterprise administrators evaluate, plan, migrate, deploy, and manage Microsoft 365 services. Candidates for the Azure Solutions Architect Expert certification should have subject matter expertise in designing cloud and hybrid solutions that run on Microsoft Azure, including compute, network, storage, monitoring, and security. Responsibilities for this role include advising stakeholders and translating business requirements into designs for secure, scalable, and reliable Azure solutions. An Azure solutions architect partners with developers, administrators, and other roles responsible for implementing solutions on Azure. A candidate for this certification should have advanced experience and knowledge of IT operations, including networking, virtualization, identity, security, business continuity, disaster recovery, data platforms, and governance. A professional in this role should manage how decisions in each area affect an overall solution. In addition, they should have experience in Azure administration, Azure development, and DevOps processes.",
  },
  idealFor:
    "Candidates for this exam are Microsoft 365 enterprise administrators who take part in evaluating, planning, migrating, deploying, and managing Microsoft 365 services. They perform Microsoft 365 tenant management tasks for an enterprise, including its identities, security, compliance, Power Platform, and supporting technologies. Candidates have a working knowledge of Microsoft 365 workloads and should have been an administrator for at least one Exchange, SharePoint, Teams, or Windows 10 deployment. Candidates also have a working knowledge of networking, server administration, and IT fundamentals such as DNS, Active Directory, and PowerShell. Candidates for this exam are Microsoft 365 enterprise administrators who take part in evaluating, planning, migrating, deploying, and managing Microsoft 365 services. They perform Microsoft 365 tenant management tasks for an enterprise, including its identities, security, compliance, and supporting technologies. Candidates have a working knowledge of Microsoft 365 workloads and should have been an administrator for at least Exchange, SharePoint, Teams, Windows 10 deployment. Candidates also have a working knowledge of networking, server administration, and IT fundamentals such as DNS, Active Directory, and PowerShell.",

  learningObjectives:
    "Create beautiful web flow. Learn how to migrate and host on Microsoft Azure",
  modules: [
    {
      title:
        "Module 1: DESIGN AND IMPLEMENT MICROSOFT 365 SERVICES (25-30%) ",
      submodules: [
        {
          heading: "PLAN ARCHITECTURE ",
          contents: [
            "Plan integration of Microsoft 365 and on-premises environments",
            "Plan an identity and authentication solution ",
            "Plan enterprise application modernization",       
          ],
        },
        {
          heading: "DEPLOY A MICROSOFT 365 TENANT ",
          contents: [
            "Manage domains ",
            "Configure organizational settings ",
            "Complete the organizational profile ",
            "Add a microsoft partner or work with microsoft fasttrack ",
            "Complete the subscription setup wizard ",
            "Plan and create a tenant ",
            "Edit an organizational profile ",
            "Plan and create subscription(s) ",
            "Configure tenant-wide workload settings ",
          ],
        },
        {
          heading: "MANAGE MICROSOFT 365 SUBSCRIPTION AND TENANT HEALTH ",
          contents: [
            "Manage service health alerts ",
            "Create and manage service requests ",
            "Create internal service health response plan ",
            "Monitor service health ",
            "Monitor license allocations ",
            "Configure and review reports, including power bi, azure monitor logs, log analytics workspaces, and microsoft 365 reporting ",
            "Schedule and review security and compliance reports ",
            "Schedule and review usage metrics ",
          ],
        },
        {
          heading: "PLAN MIGRATION OF USERS AND DATA ",
          contents: [
            "Identify data to be migrated and migration methods ",
            "Identify users and mailboxes to be migrated and migration methods ",
            "Plan migration of on-premises users and groups ",
            "Import pst files",
          ],
        }
      ],
    },
    {
      title:
        "Module 2: MANAGE USER IDENTITY AND ROLES (25-30%) ",
      submodules: [
        {
          heading: "DESIGN IDENTITY STRATEGY",
          contents: [
            "Evaluate requirements and solutions for synchronization ",
            "Evaluate requirements and solutions for identity management", 
            "Evaluate requirements and solutions for authentication",             
          ],
        },
        {
          heading: "PLAN IDENTITY SYNCHRONIZATION ",
          contents: [
            "Design directory synchronization ",
            "Implement directory synchronization with directory services, federation services, and azure endpoints by using azure ad connect sync ",
            "Plan for directory synchronization using azure ad cloud sync ",
          ],
        },
        {
          heading: "MANAGE IDENTITY SYNCHRONIZATION WITH AZURE ACTIVE DIRECTORY (AZURE AD) ",
          contents: [
            "Configure and manage directory synchronization by using Azure AD cloud sync ",
            "Configure directory synchronization by using Azure AD Connect ",
            "Monitor Azure AD Connect Health ",
            "Manage Azure AD Connect synchronization ",
            "Configure object filters ",
            "Configure password hash synchronization ",
            "Implement multi-forest AD Connect scenarios ",
          ],
        },
        {
          heading: "MANAGE AZURE AD IDENTITIES ",
          contents: [
            "Plan Azure AD identities ",
            "Implement and manage self-service password reset (SSPR) ",
            "Manage access reviews ",
            "Manage groups ",
            "Manage passwords", 
            "Manage product licenses ",
            "Manage users ",
            "Perform bulk user management ",
          ],
        },
        {
          heading: "MANAGE ROLES ",
          contents: [
            "Plan user roles ",
            "Manage admin roles ",
            "Allocate roles for workloads ",
            "Manage role allocations by using azure ad ",
          ],
        },
      ],
    },
    {
      title:
        "Module 3: MANAGE ACCESS AND AUTHENTICATION (15-20%) ",
      submodules: [
        {
          heading: "MANAGE AUTHENTICATION ",
          contents: [
            "Design an authentication method ",
            "Configure authentication ",
            "Implement an authentication method ",
            "Manage authentication ",
            "Monitor authentication ",
          ],
        },
          {
          heading: "PLAN AND IMPLEMENT SECURE ACCESS ",
          contents: [
            "Design a conditional access solution ",
            "Implement entitlement packages ",
            "Implement azure ad identity protection ",
            "Manage identity protection ",
            "Implement conditional access ",
            "Manage conditional access ",
            "Implement and secure access for guest and external users",
          ],
        },
        {
          heading: "CONFIGURE APPLICATION ACCESS ",
          contents: [
            "Configure application registration in Azure AD ",
            "Configure Azure AD Application Proxy ",
            "Publish enterprise apps in Azure AD ",
            "Get and manage Integrated apps from the Microsoft 365 admin center ",
          ],
        },
      ],
    },
    { 
      title:
        "Module 4: PLAN MICROSOFT OFFICE 365 WORKLOADS AND APPLICATIONS (25-30%) ",
      submodules: [
        {
          heading: "PLAN FOR MICROSOFT 365 APPS DEPLOYMENT ",
          contents: [
            "Plan for Microsoft connectivity ",
            "Manage Microsoft 365 Apps ",
            "Plan for Office online ",
            "Assess readiness using Microsoft analytics ",
            "Plan Microsoft 365 App compatibility ",
            "Manage Microsoft 365 apps deployment and software downloads ",
            "Plan for Microsoft 365 apps updates ",
            "Plan Microsoft telemetry and reporting", 
            "Plan for and manage policy settings using the Office cloud policy service ",
          ],
        },
        {
          heading: "PLAN FOR MESSAGING DEPLOYMENTS ",
          contents: [
            "Plan migration strategy ",
            "Plan messaging deployment ",
            "Identify hybrid requirements", 
            "Plan for connectivity ",
            "Plan for mail routing ",
            "Plan email domains",             
          ],
        },
        {
          heading: "PLAN FOR MICROSOFT SHAREPOINT ONLINE AND ONEDRIVE FOR BUSINESS ",
          contents: [
            "Plan migration strategy ",
            "Plan external share settings", 
            "Identify hybrid requirements ",
            "Manage access configurations ",
            "Manage microsoft groups ",
            "Manage sharepoint tenant and site settings",
          ],
        },
        {
          heading: "PLAN FOR MICROSOFT TEAMS INFRASTRUCTURE ",
          contents: [
            "Plan for communication and call quality and capacity ",
            "Plan for phone system ",
            "Plan microsoft teams deployment ",
            "Plan microsoft teams organizational settings ",
            "Plan for guest and external access ",
            "Plan for microsoft teams hybrid connectivity and co-existence",
          ],
        },
        {
          heading: "PLAN MICROSOFT POWER PLATFORM INTEGRATION ",
          contents: [
            "Implement Microsoft Power Platform Center of Excellence (coe) starter kit ",
            "Plan for Power Platform workload deployments ",
            "Plan resource deployment ",
            "Plan for connectivity (and data flow) ",
            "Manage environments ",
            "Manage resources",      
          ],
        },
      ],
    },
    {
      title:
        "Module 5: IMPLEMENT MODERN DEVICE SERVICES (40-45%)",
      submodules: [
        {
          heading: "PLAN DEVICE MANAGEMENT",
          contents: [
            "Plan device monitoring",
            "Plan microsoft endpoint manager implementation and integration with azure ad",
            "Plan co-management between endpoint configuration manager and intune",
            "Plan for configuration profiles",
          ],
        },
        {
          heading: "  MANAGE DEVICE COMPLIANCE",
          contents: [
            "Plan for device compliance",
            "Plan for attack surface reduction",
            "Configure security baselines",
            "Configure device compliance policy",
            "Plan and configure conditional access policies",
          ],
        },
        {
          heading: "PLAN FOR APPS",
          contents: [
            "Create and configure Microsoft Store for Business",
            "Plan app deployment",
            "Plan for mobile application management (MAM)",
          ],
        },
        {
          heading: "PLAN WINDOWS 10 DEPLOYMENT",
          contents: [
            "Plan for Windows as a Service (waas)",
            "Plan for managing Windows quality and feature updates",
            "Plan Windows 10 Enterprise deployment methods",
            "Analyze upgrade readiness for Windows 10 by using services such as Desktop Analytics",
            "Evaluate and deploy additional Windows 10 Enterprise security feature",            
          ],
        },
        {
          heading: "ENROLL DEVICES",
          contents: [
            "Plan for device join or device registration to Azure Active Directory (Azure AD)",
            "Plan for manual and automated device enrollment into Intune",
            "Enable device enrollment into Intune",
          ],
        },
      ],
    },
    {
      title:
        "Module 6: IMPLEMENT MICROSOFT 365 SECURITY AND THREAT MANAGEMENT (20-25%)",
      submodules: [
        {
          heading: "MANAGE SECURITY REPORTS AND ALERTS",
          contents: [
            "Evaluate and manage Microsoft Office 365 tenant security by using Secure Score",
            "Manage incident investigation",
            "Review and manage Microsoft 365 security alerts",
          ],
        },
        {
          heading: "PLAN AND IMPLEMENT THREAT PROTECTION WITH MICROSOFT 365 DEFENDER",
          contents: [
            "Plan Microsoft Defender for Endpoint",
            "Design Microsoft Defender for Office 365 policies",
            "Implement Microsoft Defender for Identity",  
          ],
        },
        {
          heading: "PLAN MICROSOFT DEFENDER FOR CLOUD APPS",
          contents: [
            "Plan information protection by using Microsoft Defender for Cloud Apps",
            "Plan policies to manage access to cloud apps",
            "Plan for application connectors",
            "Configure Cloud App Security policies",
            "Review and respond to Cloud App Security alerts",
            "Monitor for unauthorized cloud applications",
          ],
        },
      ],
    },
    {
      title:
        "Module 7: MANAGE MICROSOFT 365 GOVERNANCE AND COMPLIANCE (35-40%)",
      submodules: [
        {
          heading: "PLAN FOR COMPLIANCE REQUIREMENTS",
          contents: [
            "Plan compliance solutions",
            "Assess compliance",
            "Plan for and implement privileged access management",
            "Plan for legislative and regional or industry requirements and drive implementation",
          ],
        },
        {
          heading: "MANAGE INFORMATION GOVERNANCE",
          contents: [
            "Plan data classification",
            "Plan for classification labeling",
            "Plan for restoring deleted content",
            "Implement records management",
            "Design data retention labels and policies in microsoft 365",
          ],
        },
        {
          heading: "IMPLEMENT INFORMATION PROTECTION",
          contents: [
            "Plan an information protection solution",
            "Plan and implement sensitivity labels and policies",
            "Monitor label alerts and analytics",
            "Deploy azure information protection unified labels clients",
            "Configure information rights management (irm) for workloads",
            "Plan for windows information protection (wip) implementation",           
          ],
        },
        {
          heading: "PLAN AND IMPLEMENT DATA LOSS PREVENTION (DLP)",
          contents: [
            "Plan for DLP",
            "Configure DLP policies",
            "Monitor DLP",            
          ],
        },
        {
          heading: "11.3.5	MANAGE SEARCH AND INVESTIGATION",
          contents: [
            "Plan and configure auditing",
            "Plan and configure ediscovery",
            "Implement and manage insider risk management",
            "Design a content search solution",
          ],
        },
      ],
    },
  ],
  onCompletion: [
    "The bullets that follow each of the skills measured are intended to illustrate how we are assessing that skill. Related topics may not be covered in the exam.",
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
