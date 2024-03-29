export default {
  title: "Azure Administrator Associate AZ - 104",
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
        subheading: "40 Hours.",
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
      "Mastering the basics in AI can help you jump-start your career and get ready to dive deeper into the other technical opportunities Azure offers. Artificial intelligence (AI) opens doors into possibilities that might have seemed like science fiction only yesterday. Using AI, you can build solutions, improve your apps, and advance technology in many fields, including healthcare, financial management, and environmental protection, to name just a few. The Microsoft Certified: Azure AI Fundamentals certification could be a great fit for you if you'd like to: Prove that you have the AI skills it takes to build a better world. Earning your Azure AI Fundamentals certification can supply the foundation you need to build your career and demonstrate your knowledge of common AI and machine learning workloads—and what Azure services can solve for them. Validate your foundational knowledge of machine learning and AI concepts, along with related Azure services., It is recommended to have some general programming knowledge or experience, but it is not required. You can use Azure AI fundamentals to reinforce your basics for other Azure role-based certifications, like Azure Data Scientist Associate, Azure AI Engineer Associate, or Azure Developer Associate, but its not a prerequisite for any of them. NOTE: Passing score: 700",
  },
  idealFor:
    "Candidates for this exam should have subject matter expertise implementing, managing, and monitoring an organization’s Microsoft Azure environment. Responsibilities for this role include implementing, managing, and monitoring identity, governance, storage, compute, and virtual networks in a cloud environment, plus provision, size, monitor, and adjust resources, when needed. An Azure administrator often serves as part of a larger team dedicated to implementing an organization's cloud infrastructure. A candidate for this exam should have at least six months of hands-on experience administering Azure, along with a strong understanding of core Azure services, Azure workloads, security, and governance. In addition, this role should have experience using PowerShell, Azure CLI, Azure portal, and Azure Resource Manager templates.",

  learningObjectives:
    "Create beautiful web flow. Learn how to migrate and host on Microsoft Azure",
  modules: [
    {
      title: "Module 1: Manage Azure identities and governance (15–20%)  ",
      submodules: [
        {
          heading: "Manage Azure Active Directory (Azure AD) objects",
          contents: [
            "Create users and groups",
            "Create administrative units",
            "Manage user and group properties",
            "Manage device settings",
            "Perform bulk user updates",
            "Manage guest accounts",
            "Configure Azure AD join",
            "configure self-service password reset",
          ],
        },
        {
          heading: "Manage storage",
          contents: [
            "Export from Azure job",
            "Import into Azure job",
            "Install and use Azure Storage Explorer",
            "Copy data by using AZCopy",
            "Implement Azure Storage replication",
            "configure blob object replication",
          ],
        },
        {
          heading: "Configure Azure files and Azure Blob Storage",
          contents: [
            "Create an Azure file share",
            "Create and configure Azure File Sync service",
            "Configure Azure Blob Storage",
            "Configure storage tiers",
            "Configure blob lifecycle management",
          ],
        },
      ],
    },
    {
      title: "Module 2: Deploy and manage Azure compute resources (20–25%)",
      submodules: [
        {
          heading:
            "Automate deployment of virtual machines (VMs) by using Azure Resource Manager templates",
          contents: [
            "Modify an Azure Resource Manager template",
            "Configure a virtual hard disk (VHD) template",
            "Deploy from a template",
            "Save a deployment as an Azure Resource Manager template",
            "Deploy virtual machine extensions",
          ],
        },
        {
          heading: "Configure VMs",
          contents: [
            "Configure Azure Disk Encryption",
            "Move VMs from one resource group to another",
            "Manage VM sizes",
            "Add data disks",
            "Configure networking",
            "Redeploy VMs",
            "Configure high availability",
            "Deploy and configure virtual machine scale sets",
          ],
        },
        {
          heading: "Create and configure containers",
          contents: [
            "Configure sizing and scaling for Azure Container Instances",
            "Configure container groups for Azure Container Instances",
            "Configure storage for Azure Kubernetes Service (AKS)",
            "Configure scaling for AKS",
            "Configure network connections for AKS",
            "Upgrade an AKS cluster",
          ],
        },
        {
          heading: "Create and configure Azure App Service",
          contents: [
            "Create an App Service plan",
            "Configure scaling settings in an App Service plan",
            "Create an App Service",
            "Secure an App Service",
            "Configure custom domain names",
            "Configure backup for an App Service",
            "Configure networking settings",
            "Configure deployment settings",
          ],
        },
      ],
    },
    {
      title: "Module 3: Configure and manage virtual networking (25–30%)",
      submodules: [
        {
          heading: "Implement and manage virtual networking",
          contents: [
            "Create and configure virtual networks, including peering",
            "Configure private and public IP addresses",
            "Configure user-defined network routes",
            "Implement subnets",
            "Configure endpoints on subnets",
            "Configure private endpoints",
            "Configure Azure DNS, including custom DNS settings and private or public DNS zone",
          ],
        },
        {
          heading: "Secure access to virtual networks",
          contents: [
            "Create security rules",
            "Associate a network security group (NSG) to a subnet or network interface",
            "Evaluate effective security rules",
            "Implement Azure Firewall",
            "Implement Azure Bastion",
          ],
        },
        {
          heading: "Configure load balancing",
          contents: [
            "Configure Azure Application Gateway",
            "Configure an internal or public load balancer",
            "Troubleshoot load balancing",
          ],
        },
        {
          heading: "Monitor and troubleshoot virtual networking",
          contents: [
            "Monitor on-premises connectivity",
            "Configure and use Azure Monitor for Networks",
            "Use Azure Network Watcher",
            "Troubleshoot external networking",
            "Troubleshoot virtual network connectivity",
          ],
        },
        {
          heading:
            "Integrate an on-premises network with an Azure virtual network",
          contents: [
            "Create and configure Azure VPN Gateway",
            "Create and configure Azure ExpressRoute",
            "Configure Azure Virtual WAN",
          ],
        },
      ],
    },
    {
      title: "Module 4: Monitor and back up Azure resources (10–15%)",
      submodules: [
        {
          heading: "Monitor resources by using Azure Monitor",
          contents: [
            "Configure and interpret metrics",
            "Configure Azure Monitor logs",
            "Query and analyze logs",
            "Set up alerts and actions",
            "Configure Application Insights",
          ],
        },
        {
          heading: "Implement backup and recovery",
          contents: [
            "Create a Recovery Services vault",
            "Create a Backup vault",
            "Create and configure backup policy",
            "Perform backup and restore operations by using Azure Backup",
            "Perform site-to-site recovery by using Azure Site Recovery",
            "Configure and review backup reports",
          ],
        },
        {
          heading:
            "9.4.3	IDENTIFY CONSIDERATIONS FOR CONVERSATIONAL AI SOLUTIONS ON AZURE",
          contents: [
            "Identify features and uses for bots",
            "Identify capabilities of the Azure Bot service",
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
