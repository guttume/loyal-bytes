export default {
  title: "Azure Network Engineer Associate AZ - 700",
  subtitle:
    "A master course designed for working professionals like you. Make your career soar with Loyal Bytes.",
  heroImage: "/images/course-page/azure-hero-image.png",
  heroBg: "/images/course-page/azure-hero-bg.png",
  courseDetail: {
    duration: "32 Hours",
    certification: "AZ - 700 and Azure Network Engineer Associate",
    batchInfo: "weekdays & weekends batches available",
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
        subheading: "Weekdays & Weekends",
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
      "Designing and Implementing Microsoft Azure Networking Solutions. Candidates for this exam should have subject matter expertise in planning, implementing, and maintaining Azure networking solutions, including hybrid networking, connectivity, routing, security, and private access to Azure services. This learning path is designed to help you prepare for Microsoft's AZ-700 Designing and Implementing Microsoft Azure Networking Solutions exam. People who pass the AZ-700 exam will earn the Microsoft Certified: Azure Network Engineer Associate certification. The AZ-700 exam tests your knowledge of five subject areas: designing, implementing, and managing hybrid networking, designing and implementing core networking infrastructure, designing and implementing routing, securing and monitoring networks, and designing and implementing private access to Azure services.",
  },
  idealFor:
    "Candidates for this exam should have subject matter expertise in planning, implementing, and maintaining Azure networking solutions, including hybrid networking, connectivity, routing, security, and private access to Azure services. Responsibilities for the Azure Network Engineer include recommending, planning, and implementing Azure networking solutions. Professionals in this role manage the solution for performance, resiliency, scale, and security. They deploy networking solutions by using the Azure Portal and other methods, including PowerShell, Azure Command-Line Interface (CLI), and Azure Resource Manager templates (ARM templates). The Azure Network Engineer works with solution architects, cloud administrators, security engineers, application developers, and DevOps engineers to deliver Azure solutions. Candidates for this exam should have expert Azure administration skills, in addition to extensive experience and knowledge of networking, hybrid connections, and network security.",

  learningObjectives:
    "Create beautiful web flow. Learn how to migrate and host on Microsoft Azure",
  modules: [
    {
      title:
        "Module 1: Design, Implement, and Manage Hybrid Networking (10–15%)",
      submodules: [
        {
          heading: "Design, implement, and manage a site-to-site VPN connection",
          contents: [
            "Design a site-to-site VPN connection for high availability",
            "Select an appropriate virtual network (VNet) gateway SKU",
            "Create and configure a local network gateway",
            "Create and configure an IPsec/IKE policy",
            "Create and configure a virtual network gateway",
            "Diagnose and resolve virtual network gateway connectivity issues",
          ],
        },
        {
          heading: "Design, implement, and manage a point-to-site VPN connection",
          contents: [
            "Select an appropriate virtual network gateway SKU",
            "Plan and configure RADIUS authentication",
            "Plan and configure certificate-based authentication",
            "Plan and configure OpenVPN authentication",
            "Plan and configure Azure Active Directory (Azure AD) authentication",
            "Pmplement a VPN client configuration file",
            "Diagnose and resolve client-side and authentication issues",
          ],
        },
        {
          heading: "Design, implement, and manage Azure ExpressRoute",
          contents: [
            "Choose between provider and direct model (ExpressRoute Direct)",
            "Design and implement Azure cross-region connectivity between multiple ExpressRoute locations",
            "Select an appropriate ExpressRoute SKU and tier",
            "Design and implement ExpressRoute Global Reach",
            "Design and implement ExpressRoute FastPath",
            "Choose between private peering only, Microsoft peering only, or both",
            "Configure private peering",
            "Configure Microsoft peering",
            "Create and configure an ExpressRoute gateway",
            "Connect a virtual network to an ExpressRoute circuit",
            "Recommend a route advertisement configuration",
            "Configure encryption over ExpressRoute",
            "Implement Bidirectional Forwarding Detection",
            "Diagnose and resolve ExpressRoute connection issues",
          ],
        },
      ],
    },
    {
      title:
        "Module 2: Design and Implement Core Networking Infrastructure (20–25%)",
      submodules: [
        {
          heading: "Design and implement private IP addressing for VNets",
          contents: [
            "Create a VNet",
            "Plan and configure subnetting for services, including VNet gateways, private endpoints, firewalls, application gateways, and VNet-integrated platform services",
            "Plan and configure subnet delegation",
            "Plan and configure subnetting for Azure Route Server",
          ],
        },
        {
          heading: "Design and implement name resolution",
          contents: [
            "Mdesign public DNS zones",
            "Design private DNS zones",
            "Design name resolution inside a VNet",
            "Configure a public or private DNS zone",
            "Link a private DNS zone to a VNet",
          ],
        },
        {
          heading: "Design and implement cross-VNet connectivity",
          contents: [
            "Design service chaining, including gateway transit",
            "Design VPN connectivity between VNets",
            "Implement VNet peering",
          ],
        },
        {
          heading: "Design and implement an Azure Virtual WAN architecture",
          contents: [
            "Design an Azure Virtual WAN architecture, including selecting types and services",
            "Connect a VNet gateway to Azure Virtual WAN",
            "Create a hub in Virtual WAN",
            "Create a network virtual appliance (NVA) in a virtual hub",
            "Configure virtual hub routing",
            "Create a connection unit",
          ],
        },
      ],
    },
    {
      title:
        "Module 3: Design and Implement Routing (25–30%)",
      submodules: [
        {
          heading: "Design, implement, and manage VNet routing",
          contents: [
            "Design and implement user-defined routes (UDRs)",
            "Associate a route table with a subnet",
            "Configure forced tunneling",
            "Diagnose and resolve routing issues",
            "Design and implement Azure Route Server",
          ],
        },
        {
          heading:
            "Design and implement an Azure Load Balancer",
          contents: [
            "Choose an Azure Load Balancer SKU (Basic versus Standard)",
            "Choose between public and internal",
            "Create and configure an Azure Load Balancer (including cross-region)",
            "Implement a load balancing rule",
            "Create and configure inbound NAT rules",
            "Create explicit outbound rules for a load balancer",
          ],
        },
        {
          heading:
            "Design and implement Azure Application Gateway",
          contents: [
            "Recommend Azure Application Gateway deployment options",
            "Choose between manual and auto scale",
            "Create a back-end pool",
            "Configure health probes",
            "Configure listeners",
            "Configure routing rules",
            "Configure HTTP settings",
            "Configure Transport Layer Security (TLS)",
            "Configure rewrite sets",
          ],
        },
        {
          heading:
            "Implement Azure Front Door",
          contents: [
            "Choose an Azure Front Door SKU",
            "Configure health probes, including customization of HTTP response codes",
            "Configure SSL termination and end-to-end SSL encryption",
            "Configure multisite listeners",
            "Configure back-end targets",
            "Configure routing rules, including redirection rules",
          ],
        },
        {
          heading:
            "Implement an Azure Traffic Manager profile",
          contents: [
            "Configure a routing method (mode)",
            "Configure endpoints",
            "Create HTTP settings",
          ],
        },
        {
          heading:
            "Design and implement an Azure Virtual Network NAT",
          contents: [
            "Choose when to use a Virtual Network NAT",
            "Allocate public IP or public IP prefixes for a NAT gateway",
            "Associate a Virtual Network NAT with a subnet",
          ],
        },
      ],
    },
    {
      title:
        "Module 4: Secure and Monitor Networks (15–20%)",
      submodules: [
        {
          heading: "Design, implement, and manage an Azure Firewall deployment",
          contents: [
            "Design an Azure Firewall deployment",
            "Create and implement an Azure Firewall deployment",
            "Configure Azure Firewall rules",
            "Create and implement Azure Firewall Manager policies",
            "Create a secure hub by deploying Azure Firewall inside an Azure Virtual WAN hub",
            "Integrate an Azure Virtual WAN hub with a third-party NVA",
          ],
        },
        {
          heading: "Implement and manage network security groups (NSGs)",
          contents: [
            "Create an NSG",
            "Associate an NSG to a resource",
            "Create an application security group (ASG)",
            "Associate an ASG to a NIC",
            "Create and configure NSG rules",
            "Interpret NSG flow logs",
            "Validate NSG flow rules",
            "Verify IP flow",
          ],
        },
        {
          heading: "Implement a Web Application Firewall (WAF) deployment",
          contents: [
            "Configure detection or prevention mode",
            "Configure rule sets for Azure Front Door, including Microsoft managed and user defined",
            "Configure rule sets for Application Gateway, including Microsoft managed and user defined",
            "Implement a WAF policy",
            "Associate a WAF policy",
          ],
        },
        {
          heading: "Monitor networks",
          contents: [
            "Configure network health alerts and logging by using Azure Monitor",
            "Create and configure a Connection Monitor instance",
            "Configure and use Traffic Analytics",
            "Configure NSG flow logs",
            "Enable and configure diagnostic logging",
            "Configure Azure Network Watcher",
          ],
        },
      ],
    },
    {
      title:
        "Design and Implement Private Access to Azure Services (10–15%)",
      submodules: [
        {
          heading: "Design and implement Azure Private Link service and Azure Private Endpoint",
          contents: [
            "Create a Private Link service",
            "Plan private endpoints",
            "Create private endpoints",
            "Configure access to private endpoints",
            "Integrate Private Link with DNS",
            "Integrate a Private Link service with on-premises clients",
          ],
        },
        {
          heading: "Design and implement service endpoints",
          contents: [
            "Create service endpoints",
            "Configure service endpoint policies",
            "Configure service tags",
            "Configure access to service endpoints",
          ],
        },
        {
          heading: "Configure VNet integration for dedicated platform as a service (PaaS) services",
          contents: [
            "Configure App Service for regional VNet integration",
            "Configure Azure Kubernetes Service (AKS) for regional VNet integration",
            "Configure clients to access App Service Environment",
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
