  export default {
  title: "Troubleshooting Microsoft Azure Connectivity MS 720",
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
        subheading: "-",
      },
      {
        icon: "user ",
        color: "orange",
        heading: "Batch Days",
        subheading: "Weekends, Weekdays", 
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
      "Candidates for the Azure Support Engineer for Connectivity Specialty certification are support engineers with subject matter expertise in using advanced troubleshooting methods to resolve networking and connectivity issues in Azure. Candidates for this exam should have experience with networking and with hybrid environments, including knowledge of routing, permissions, and account limits. They must be able to use available tools to diagnose issues related to business continuity, hybrid environments, Infrastructure as a Service (IaaS), Platform as a Service (PaaS), access control, networking, and virtual machines connectivity.",
  },
  idealFor:
    "Candidates for the Azure Support Engineer for Connectivity Specialty certification are support engineers with subject matter expertise in using advanced troubleshooting methods to resolve networking and connectivity issues in Azure. Professionals in this role troubleshoot hybrid environments, including issues with Azure Virtual Machines, virtual networks, and connectivity between on-premises and Azure services. They use various tools and technologies to diagnose and identify root causes for complex issues. Candidates for this exam should have experience with networking and with hybrid environments, including knowledge of routing, permissions, and account limits. They must be able to use available tools to diagnose issues related to business continuity, hybrid environments, Infrastructure as a Service (iaas), Platform as a Service (paas), access control, networking, and virtual machines connectivity.",

  learningObjectives:
    "Create beautiful web flow. Learn how to migrate and host on Microsoft Azure",
  modules: [
    {
      title:
        "Module 1: TROUBLESHOOT BUSINESS CONTINUITY ISSUES (5–10%) ",
      submodules: [
        {
          heading: "TROUBLESHOOT BACKUP ISSUES ",
          contents: [
            "Review and interpret backup logs ",
            "Troubleshoot azure virtual machines backup issues including restarting a failed backup job ",
            "Troubleshoot issues with azure backup agents ",
            "Troubleshoot azure backup server issues ",
            "Troubleshoot scheduled backups ",
          ],
        },
        {
          heading: "TROUBLESHOOT RECOVERY ISSUES ",
          contents: [
            "Troubleshoot Azure Site Recovery issues ",
            "Troubleshoot site recovery in hybrid scenarios that include Hyper-V, vmware ESX, or System Center Configuration Manager ",
            "Troubleshoot restore issues when using Azure Backup Agent, Azure backup, or Azure Backup Server ",
            "Troubleshoot issues recovering files from an Azure virtual machine backup ",  
          ],
        },
      ],
    },
    {
      title:
        "Module 2: TROUBLESHOOT HYBRID AND CLOUD CONNECTIVITY ISSUES (20–25%) ",
      submodules: [
        {
          heading: "TROUBLESHOOT VIRTUAL NETWORK (VNET) CONNECTIVITY ",
          contents: [
            "Troubleshoot virtual private network (VPN) gateway transit issues",
            "Troubleshoot hub-and-spoke vnet configuration issues ",
            "Troubleshoot global vnet peering connectivity issues ",
            "Troubleshoot peered connections ",
          ],
        },
        {
          heading: "TROUBLESHOOT NAME RESOLUTION ISSUES ",
          contents: [
            "Troubleshoot name resolution for scenarios that use Azure-provided name resolution ",
            "Troubleshoot name resolution for scenarios that use custom DNS servers ",
            "Review and interpret DNS audit logs ",
            "Troubleshoot name resolution for Azure private DNS zones ",
            "Troubleshoot issues with DNS records at public DNS providers ",
            "Troubleshoot domain delegation issues ",
          ],
        },
        {
          heading: "TROUBLESHOOT POINT-TO-SITE VIRTUAL PRIVATE NETWORK (VPN) CONNECTIVITY ",
          contents: [
            "Troubleshoot Windows VPN client configuration issues ",
            "Troubleshoot openvpn VPN client configuration issues ",
            "Troubleshoot macos VPN client configuration issues ",
            "Troubleshoot issues with certificate-based VPN connections ",
            "Troubleshoot issues with RADIUS-based VPN connections ",
            "Troubleshoot Azure Active Directory (Azure AD) authentication issues ",
          ],
        },
        {
          heading: "TROUBLESHOOT SITE-TO-SITE VIRTUAL PRIVATE NETWORK CONNECTIVITY ",
          contents: [
            "Review and interpret network logs and captured network traffic from a VPN gateway ",
            "Determine the root cause for latency issues within site-to-site vpns ",
            "Review and interpret gateway configuration scripts ",
            "Reset a VPN gateway ",
            "Troubleshoot gateway issues by running Log Analytics queries ",
          ],
        },
        {
          heading: "TROUBLESHOOT AZURE EXPRESSROUTE CONNECTIVITY ISSUES ",
          contents: [
            "Determine whether routes are live and correctly configured ",
            "Validate the peering configuration for an expressroute circuit ",
            "Reset an expressroute circuit ",
            "Troubleshoot route filtering ",
            "Troubleshoot custom defined routes ",
            "Determine the root cause for latency issues related to expressroute ",
          ],
        },
      ],
    },
    {
      title:
        "Module 3: 9.3	TROUBLESHOOT PLATFORM AS A SERVICE ISSUES (5–10%) ",
      submodules: [
        {
          heading: "TROUBLESHOOT PAAS SERVICES ",
          contents: [
            "Troubleshoot issues connecting to a paas ",
            "Troubleshoot firewalls for paas services ",
            "Troubleshoot paas configuration issues ",
            "Determine the root cause for service-level throttling ",
          ],
        },
        {                                   
          heading: "TROUBLESHOOT PAAS INTEGRATION ISSUES ",
          contents: [
            "Troubleshoot issues integrating paas services with virtual networks ",
            "Troubleshoot subnet delegation issues ",
            "Troubleshoot issues with private endpoints and service endpoints ",
            "Troubleshoot issues with Azure Private Link ", 
          ],
        },
      ],
    },
    {
      title:
        "Module 4: TROUBLESHOOT AUTHENTICATION AND ACCESS CONTROL ISSUES (15–20%) ",
      submodules: [
        {
          heading: "TROUBLESHOOT AZURE AD AUTHENTICATION ",
          contents: [
            "Determine why on-premises systems cannot connect to Azure resources ",
            "Troubleshoot Azure AD configuration issues ",
            "Troubleshoot self-service password reset issues ",
            "Troubleshoot issues with multifactor authentication ",
          ],
        },
        {
          heading: "TROUBLESHOOT HYBRID AUTHENTICATION ",
          contents: [
            "Troubleshoot Azure AD Connect synchronization issues ",
            "Troubleshoot Azure AD to Active Directory Domain Services (Azure AD DS) integration issues ",
            "Troubleshoot connectivity issues between Azure AD and Active Directory Federation Services (AD FS) ",
            "Troubleshoot issues with pass-through authentication and password hash synchronization ",
            "Troubleshoot Azure AD Application Proxy connectivity issues",
          ],
        },
        {
          heading: "TROUBLESHOOT AUTHORIZATION ISSUES ",
          contents: [
            "Troubleshoot role-based access control (RBAC) issues ",
            "Troubleshoot issues storing encrypted passwords in Azure Key Vault ",
            "Troubleshoot sign-in issues related to Azure AD Conditional Access policies ",
          ],
        },
      ],
    },
    {
      title:
      "Module 5: TROUBLESHOOT NETWORKS (25–30%) ",
    submodules: [
      {
        heading: "TROUBLESHOOT AZURE NETWORK SECURITY ISSUES",
        contents: [
          "Determine why Azure Web Application Firewall is blocking traffic ",
          "Troubleshoot encryption and certificate issues for point-to-site and site-to-site scenarios ",
          "Troubleshoot connectivity to secure endpoints ",
        ],
      },
      {
        heading: "TROUBLESHOOT AZURE NETWORK SECURITY GROUPS (NSGS) ",
        contents: [   
          "Troubleshoot NSG configuration issues ",
          "Review and interpret NSG flow logs ",
          "Determine whether a VM or a group of vms is associated with an application security group (ASG) ",
        ],
      },
      {
        heading: "TROUBLESHOOT AZURE FIREWALL ISSUES ",
        contents: [   
          "Troubleshoot application, network, and infrastructure rules ",
          "Troubleshoot network address translation (nat) and distributed network address translation (dnat) rules ",
          "Troubleshoot azure firewall manager configuration issues ",
        ],
      },
      {
        heading: "TROUBLESHOOT LATENCY ISSUES ",
        contents: [   
          "Determine the root cause for VM-level throttling ",
          "Determine the root cause for latency issues when connecting to Azure virtual machines ",
          "Determine the root cause for throttling between source and destination resources ",
          "Troubleshoot bandwidth availability issues ",
          "Determine whether resource response times meet service-level agreements (slas) ",
        ],
      },
      {
        heading: "TROUBLESHOOT ROUTING AND TRAFFIC CONTROL",
        contents: [   
          "Review and interpret route tables ",
          "Troubleshoot asymmetric routing ",
          "Troubleshoot issues with user-defined routes ",
          "Troubleshoot issues related to forced tunneling ",
          "Troubleshoot border gateway protocol (bgp) issues ",
          "Troubleshoot virtual network peering, transitive routing, and service chaining ",
          "Troubleshoot routing configuration issues in azure ",
        ],
      },
      {
        heading: "TROUBLESHOOT LOAD-BALANCING ISSUES",
        contents: [   
          "Determine whether vms in a load-balanced cluster are healthy ",
          "Troubleshoot issues with Azure Load Balancer ",
          "Review and interpret load balancer rules ",
          "Troubleshoot traffic distribution issues ",
          "Evaluate the configuration of Azure Traffic Manager ",
          "Troubleshoot issues with Azure Traffic Manager profiles ",
          "Troubleshoot port exhaustion issues ",
          "Troubleshoot issues with Azure Front Door ",
          "Troubleshoot issues with Azure Application Gateway ",
        ],
      },
    ],
  },
  {
    title:
    "Module 6: TROUBLESHOOT VM CONNECTIVITY ISSUES (5–10%) ",
  submodules: [
    {
      heading: "TROUBLESHOOT AZURE BASTION ",
      contents: [
        "Troubleshoot issues deploying Azure Bastion ",
        "Troubleshoot connectivity issues ",
        "Troubleshoot authorization issues ",
      ],      
    },
    {
      heading: "TROUBLESHOOT JUST-IN-TIME (JIT) VM ACCESS ",
      contents: [   
        "Validate connectivity with a VM ",
        "Troubleshoot Microsoft Defender for Cloud configuration issues ",
        "Determine which resources are authorized to use JIT VM access ",
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
