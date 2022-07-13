export default {
  title: "Azure Stack Hub Operator Associate AZ-600",
  subtitle:
    "A master course designed for working professionals like you. Make your career soar with Loyal Bytes.",
  heroImage: "/images/course-page/azure-hero-image.png",
  heroBg: "/images/course-page/azure-hero-bg.png",
  courseDetail: {
    duration: "32 Hours",
    certification: "AZ - 600 and Azure Stack Hub Operator Associate",
    batchInfo: "weekdays batches available",
    level: "200",
    highlights: [
      {
        icon: "user",
        color: "orange",
        heading: "Duration",
        subheading: "32 Hours.",
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
      "Candidates for Exam AZ-600 are Azure administrators or Azure Stack Hub operators who provide cloud services to end users or customers from within their own datacenter using Azure Stack Hub. Candidates for this exam should have significant experience managing and operating Azure Stack Hub environments. They should have a strong understanding of Azure, in addition to some knowledge of virtualization, networking, and identity management. They need to understand how Azure Stack Hub enables DevOps processes and the hybrid development model. This learning path is designed to help you prepare for Microsoft's AZ-700 Designing and Implementing Microsoft Azure Networking Solutions exam. People who pass the AZ-700 exam will earn the Microsoft Certified: Azure Network Engineer Associate certification. The AZ-700 exam tests your knowledge of five subject areas: designing, implementing, and managing hybrid networking, designing, and implementing core networking infrastructure, designing and implementing routing, securing and monitoring networks, and designing and implementing private access to Azure services.",
  },
  idealFor:
    "Candidates for the Azure Stack Hub Operator Associate certification are Azure administrators or Azure Stack Hub operators who provide cloud services to end users or customers from within their own datacenter using Azure Stack Hub. Their responsibilities are to plan, deploy, package, update, and maintain the Azure Stack Hub infrastructure. They also offer hybrid cloud resources and requested services and manage infrastructure as a service (IaaS) and platform as a service (PaaS). They serve as part of a larger team dedicated to cloud-based management and security or hybrid environments as part of an end-to-end infrastructure. Candidates for this certification should have significant experience managing and operating Azure Stack Hub environments. They should have a strong understanding of Azure, in addition to some knowledge of virtualization, networking, and identity management. They need to understand how Azure Stack Hub enables DevOps processes and the hybrid development model.",

  learningObjectives:
    "Create beautiful web flow. Learn how to migrate and host on Microsoft Azure",
  modules: [
    {
      title:
        "Module 1: Provide services (30-35%)",
      submodules: [
        {
          heading: "Manage Azure Stack Hub Marketplace",
          contents: [
            "Populate Azure Stack Hub Marketplace in a disconnected environment",
            "Create a custom Azure Stack Hub Marketplace item",
            "Manage lifecycle for Azure Stack Hub Marketplace items",
          ],
        },
        {
          heading: "Offer an App Service resource provider",
          contents: [
            "Plan an App Service resource provider deployment",
            "Deploy an App Service resource provider",
            "Update an App Service resource provider",
            "Scale roles based on capacity requirements",
            "Rotate App Service secrets and certificates",
            "Manage worker tiers",
            "Back up App Service",
          ],
        },
        {
          heading: "Offer an Event Hubs resource provider",
          contents: [
            "Plan an Event Hubs resource provider deployment",
            "Deploy an Event Hubs resource provider",
            "Update an Event Hubs resource provider",
            "Rotate Event Hubs secrets and certificates",
          ],
        },
        {
          heading: "Offer services",
          contents: [
            "Create and manage quotas",
            "Create and manage plans",
            "Create and manage offers",
            "Create and manage user subscriptions",
            "Change user subscription owner",
          ],
        },
        {
          heading: "Manage usage and billing",
          contents: [
            "Set up usage data reporting",
            "View and retrieve usage data by using the Usage API",
            "Manage usage and billing in multi-tenant and CSP scenarios",
          ],
        },
      ],
    },
    {
      title:
        "Module 2: Implement data center integration (15-20%)",
      submodules: [
        {
          heading: "Prepare for Azure Stack Hub deployment",
          contents: [
            "Recommend a name resolution strategy",
            "Recommend a public and internal IP strategy",
            "Recommend a data center firewall integration strategy",
            "Recommend an identity provider",
            "Validate identity provider integration",
            "Configure the Time Server (NTP)",
          ],
        },
        {
          heading: "Manage infrastructure certificates for Azure Stack Hub",
          contents: [
            "Recommend a certificate strategy",
            "Validate the certificates",
            "Run secret rotation PowerShell cmdlet for external certificates",
          ],
        },
        {
          heading: "Manage Azure Stack Hub registration",
          contents: [
            "recommend a registration model",
            "register in a connected environment",
            "register in a disconnected environment",
            "re-register",
          ],
        },
      ],
    },
    {
      title:
        "Module 3: Manage identity and access (10-15%)",
      submodules: [
        {
          heading: "Manage multi-tenancy",
          contents: [
            "Register the guest tenant directory with Azure Stack Hub",
            "Disable multi-tenancy",
            "Update guest tenant directory",
          ],
        },
        {
          heading:
            "Manage access",
          contents: [
            "Identify an appropriate method for access (service principal, users, groups)",
            "Provision a service principal for Azure Stack Hub",
            "Recommend a permission model",
            "Configure access in Azure Stack Hub",
            "Create a custom role",
          ],
        },
      ],
    },
    {
      title:
        "Module 4: Manage infrastructure (30-35%)",
      submodules: [
        {
          heading: "Manage system health",
          contents: [
            "Recommend a monitoring strategy",
            "Monitor system health by using the REST API",
            "Monitor system health by using syslog server",
            "Manage field replacement or repair",
            "Configure automatic diagnostic log collection",
            "Collect diagnostic logs on demand by using PowerShell",
            "Configure syslog forwarding for Azure Stack Hub infrastructure",
          ],
        },
        {
          heading: "Plan and configure business continuity and disaster recovery",
          contents: [
            "Recommend a business continuity disaster recovery (BCDR) strategy",
            "Recommend a strategy for infrastructure backups",
            "Configure storage target for infrastructure backups",
            "Configure certificates for infrastructure backups",
            "Configure frequency and retention policy for infrastructure backups",
          ],
        },
        {
          heading: "Manage capacity",
          contents: [
            "Plan for system capacity",
            "Manage partitioned GPUs",
            "Add nodes",
            "Manage storage capacity",
            "Add IP pools",
          ],
        },
        {
          heading: "Update infrastructure",
          contents: [
            "Update Azure Stack Hub",
            "Download and import update packages manually",
            "Update Azure AD home directory",
          ],
        },
        {
          heading: "Manage Azure Stack Hub by using privileged endpoints",
          contents: [
            "Connect to a privileged endpoint",
            "Configure the cloud admin user role",
            "Unlock a support session",
            "Close the session on the privileged endpoint",
            "Stop and start Azure Stack Hub",
            "Perform system diagnostics by using Test-AzureStack",
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
