export default {
  title: "Windows Server Hybrid Administrator Associate AZ 800 & AZ 801",
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
      "Candidates for this certification administer core and advanced Windows Server workloads and services using on-premises, hybrid, and cloud technologies. These professionals should have expertise in implementing and managing on-premises and hybrid solutions, such as identity, management, compute, networking, and storage. They are also experts at performing tasks related to security, migration, monitoring, high availability, troubleshooting, and disaster recovery. These professionals use administrative tools and technologies, including Windows Admin Center, PowerShell, Azure Arc, and IaaS virtual machine administration. They also work with Azure Automation Update Management, Microsoft Defender for Identity, Azure Security Center, Azure Migrate, and Azure Monitor. Candidates for the Windows Server Hybrid Administrator Associate certification should have subject matter expertise in configuring and managing Windows Server on-premises, hybrid, and infrastructure as a service (iaas) platform workload. Responsibilities for this role include integrating Windows Server environments with Azure services and managing Windows Server in on-premises networks. This role manages and maintains Windows Server iaas workloads in Azure, in addition to migrating and deploying workloads to Azure. This role typically collaborates with Azure administrators, enterprise architects, Microsoft 365 administrators, and network engineers.",
  },
  idealFor:
    "",

  learningObjectives:
    "Create beautiful web flow. Learn how to migrate and host on Microsoft Azure",
  modules: [
    {
      title:
          "Module 1: DEPLOY AND MANAGE ACTIVE DIRECTORY DOMAIN SERVICES (AD DS) IN ON-PREMISES AND CLOUD ENVIRONMENTS (30–35%)",
      submodules: [
        {
          heading: "DEPLOY AND MANAGE AD DS DOMAIN CONTROLLERS",
          contents: [
            "Deploy and manage domain controllers on-premises ",
            "Deploy and manage domain controllers in azure ",
            "Deploy read-only domain controllers (rodcs) ",
            "Troubleshoot flexible single master operations (fsmo) roles",
          ],
        },
        {
          heading: "CONFIGURE AND MANAGE MULTI-SITE, MULTI-DOMAIN, AND MULTI-FOREST ENVIRONMENTS ",
          contents: [
            "Configure and manage forest and domain trusts ",
            "Configure and manage ad ds sites ",
            "Configure and manage ad ds replication",             
          ],
        },
        {
          heading: "CREATE AND MANAGE AD DS SECURITY PRINCIPALS ",
          contents: [
            "Create and manage AD DS users and groups", 
            "Manage users and groups in multi-domain and multi-forest scenarios ",
            "Implement group managed service accounts (gmsas) ",
            "Join Windows Servers to AD DS, Azure AD DS, and Azure AD",
          ],
        },
        {
          heading: "IMPLEMENT AND MANAGE HYBRID IDENTITIES ",
          contents: [
            "Implement Azure AD Connect ",
            "Manage Azure AD Connect Synchronization ",
            "Implement Azure AD Connect cloud sync ",
            "Integrate Azure AD, AD DS, and Azure AD DS ",
            "Manage Azure AD DS ",
            "Manage Azure AD Connect Health ",
            "Manage authentication in on-premises and hybrid environments ",
            "Configure and manage AD DS passwords",
          ],
        },
        {
          heading: "MANAGE WINDOWS SERVER BY USING DOMAIN-BASED GROUP POLICIES ",
          contents: [
            "Implement Group Policy in AD DS ",
            "Implement Group Policy Preferences in AD DS ",
            "Implement Group Policy in Azure AD DS ",
          ],
        }
      ],
    },
    {
      title:
        "Module 2: MANAGE WINDOWS SERVERS AND WORKLOADS IN A HYBRID ENVIRONMENT (10–15%) ",
      submodules: [
        {
          heading: "MANAGE WINDOWS SERVERS IN A HYBRID ENVIRONMENT ",
          contents: [
            "Deploy a Windows Admin Center gateway server ",
            "Configure a target machine for Windows Admin Center ",
            "Configure powershell Remoting ",
            "Configure credssp or Kerberos delegation for second hop remoting ",
            "Configure JEA for powershell Remoting",
          ],
        },
        {
          heading: "MANAGE WINDOWS SERVERS AND WORKLOADS BY USING AZURE SERVICES ",
          contents: [
            "Analyze behavior of system with regards to load and failure conditions",
            "Calculate when a system will fail under various conditions",
            "Measure baseline metrics for system",
            "Leverage application insights smart detection and dynamic thresholds in azure monitor",
          ],
        },
        {
          heading: "DESIGN AND IMPLEMENT A HEALTH CHECK",
          contents: [
            "Manage Windows Servers by using Azure Arc ",
            "Assign Azure Policy Guest Configuration ",
            "Deploy Azure services using Azure Virtual Machine extensions on non-Azure machines ",
            "Manage updates for Windows machines ",
            "Integrate Windows Servers with Log Analytics ",
            "Integrate Windows Servers with Azure Security Center ",
            "Manage iaas virtual machines (vms) in Azure that run Windows Server ",
            "Implement Azure Automation for hybrid workloads ",
            "Create runbooks to automate tasks on target vms ",
            "Implement DSC to prevent configuration drift in iaas machines",
          ],
        }
      ],
    },
    {
      title:
        "Module 3: MANAGE VIRTUAL MACHINES AND CONTAINERS (15–20%) ",
      submodules: [
        {
          heading: "  MANAGE HYPER-V AND GUEST VIRTUAL MACHINES ",
          contents: [
            "Enable VM enhanced session mode ",
            "Manage VM using powershell Remoting, powershell Direct, and HVC.exe ",
            "Configure nested virtualization ",
            "Configure VM memory ",
            "Configure Integration Services ",
            "Configure Discrete Device Assignment ",
            "Configure VM Resource Groups ",
            "Configure VM CPU Groups ",
            "Configure hypervisor scheduling types ",
            "Manage VM Checkpoints ",
            "Implement high availability for virtual machines ",
            "Manage VHD and VHDX files ",
            "Configure Hyper-V network adapter ",
            "Configure NIC teaming ",
            "Configure Hyper-V switch",
          ],
        },
        {
          heading: "CREATE AND MANAGE CONTAINERS ",
          contents: [
            "Create Windows Server container images ",
            "Manage Windows Server container images ",
            "Configure Container networking ",
            "Manage container instances",      
          ],
        },
        {
          heading: "MANAGE AZURE VIRTUAL MACHINES THAT RUN WINDOWS SERVER",
          contents: [
            "Manage data disks ",
            "Resize azure virtual machines ",
            "Configure continuous delivery for azure virtual machines ",
            "Configure connections to vms ",
            "Manage azure virtual machines network configuration",
          ],
        },
      ],
    },
    {
      title:
        "Module 4: IMPLEMENT AND MANAGE AN ON-PREMISES AND HYBRID NETWORKING INFRASTRUCTURE (15–20%) ",
      submodules: [
        {
          heading: "IMPLEMENT ON-PREMISES AND HYBRID NAME RESOLUTION ",
          contents: [
            "Integrate DNS with AD DS ",
            "Create and manage zones and records ",
            "Configure DNS forwarding/conditional forwarding ",
            "Integrate Windows Server DNS with Azure DNS private zones ",
            "Implement DNSSEC",
          ],
        },
        {
          heading: "MANAGE IP ADDRESSING IN ON-PREMISES AND HYBRID SCENARIOS ",
          contents: [
            "Implement and manage IPAM ",
            "Implement and configure the DHCP server role (on-premises only) ",
            "Resolve IP address issues in hybrid environments ",
            "Create and manage scopes ",
            "Create and manage IP reservations ",
            "Implement DHCP high availability",
          ],
        },
        {
          heading: "IMPLEMENT ON-PREMISES AND HYBRID NETWORK CONNECTIVITY ",
          contents: [
            "Implement and manage the Remote Access role ",
            "Implement and manage Azure Network Adapter ",
            "Implement and manage Azure Extended Network ",
            "Implement and manage Network Policy Server role", 
            "Implement Web Application Proxy ",
            "Implement Azure Relay ",
            "Implement site-to-site virtual private network (VPN) ",
            "Implement Azure Virtual WAN ",
            "Implement Azure AD Application Proxy",
          ],
        },
      ],
    },
    {
      title:
        "Module 5: MANAGE STORAGE AND FILE SERVICES (15–20%)   ",
      submodules: [
        {
          heading: "CONFIGURE AND MANAGE AZURE FILE SYNC ",
          contents: [
            "Create Azure File Sync service ",
            "Create sync groups ",
            "Create cloud endpoints", 
            "Register servers ",
            "Create server endpoints", 
            "Configure cloud tiering ",
            "Monitor File Sync ",
            "Migrate DFS to Azure File Sync",
          ],
        },
        {
          heading: "CONFIGURE AND MANAGE WINDOWS SERVER FILE SHARES ",
          contents: [
            "Configure Windows Server file share access ",
            "Configure file screens ",
            "Configure File Server Resource Manager (FSRM) quotas ",
            "Configure branchcache ",
            "Implement and configure Distributed File System (DFS)",
          ],
        },
        {
          heading: "CONFIGURE WINDOWS SERVER STORAGE ",
          contents: [
            "Configure disks and volumes ",
            "Configure and manage storage spaces ",
            "Configure and manage storage replica ",
            "Configure data deduplication ",
            "Configure smb direct ",
            "Configure storage quality of service (qos) ",
            "Configure file systems",
          ],
        },
      ],
    },
    {
      title:
        "Module 6: SECURE WINDOWS SERVER ON-PREMISES AND HYBRID INFRASTRUCTURES (25–30%) ",
      submodules: [
        {
          heading: "SECURE WINDOWS SERVER OPERATING SYSTEM",
          contents: [
            "Configure and manage exploit protection ",
            "Configure and manage windows defender application control ",
            "Configure and manage windows defender for endpoint ",
            "Configure and manage windows defender credential guard ",
            "Configure smartscreen ",
            "Implement operating system security by using group policies",
          ],
        },
        {
          heading: "SECURE A HYBRID ACTIVE DIRECTORY (AD) INFRASTRUCTURE ",
          contents: [
            "Configure password policies ",
            "Enable password block lists ",
            "Manage protected users ",
            "Manage account security on a read-only domain controller (rodc) ",
            "Harden domain controllers ",
            "Configure authentication policies silos ",
            "Restrict access to domain controllers ",
            "Configure account security ",
            "Manage ad built-in administrative groups ",
            "Manage ad delegation ",
            "Implement and manage microsoft defender for identity",
          ],
        },
        {
          heading: "IDENTIFY AND REMEDIATE WINDOWS SERVER SECURITY ISSUES BY USING AZURE SERVICES ",
          contents: [
            "Monitor on-premises servers and Azure iaas virtual machines (vms) by using Azure Sentinel ",
            "Identify and remediate security issues on-premises servers and Azure iaas vms by using Azure Security Center",            
          ],
        },
        {
          heading: "SECURE WINDOWS SERVER NETWORKING ",
          contents: [
            "Manage Windows Defender Firewall ",
            "Implement domain isolation ",
            "Implement connection security rules",
          ],
        },
        {
          heading: "SECURE WINDOWS SERVER STORAGE ",
          contents: [
            "Manage Windows bitlocker Drive Encryption (bitlocker) ",
            "Manage and recover encrypted volumes ",
            "Enable storage encryption by using Azure Disk Encryption ",
            "Manage disk encryption keys for iaas virtual machines",       
          ],
        },
      ],
    },
    {
      title:
        "Module 7: IMPLEMENT AND MANAGE WINDOWS SERVER HIGH AVAILABILITY (10–15%)",  
      submodules: [
        {
          heading: "IMPLEMENT A WINDOWS SERVER FAILOVER CLUSTER ",
          contents: [
            "Implement a failover cluster on-premises, hybrid, or cloud-only ",
            "Create a windows failover cluster ",
            "Stretch cluster across datacenter or azure regions ",
            "Configure storage for failover clustering ",
            "Modify quorum options ",
            "Configure network adapters for failover clustering ",
            "Configure cluster workload options ",
            "Configure cluster sets ",
            "Configure scale-out file servers ",
            "Create an azure witness ",
            "Configure a floating ip address for the cluster ",
            "Implement load balancing for the failover cluster ",            
          ],
        },
        {
          heading: "MANAGE FAILOVER CLUSTERING ",
          contents: [
            "Implement cluster-aware updating ",
            "Recover a failed cluster node ",
            "Upgrade a node to windows server 2022 ",
            "Failover workloads between nodes ",
            "Install windows updates on cluster nodes ",
            "Manage failover clusters using windows admin center ",
          ],
        },
        {
          heading: "IMPLEMENT AND MANAGE STORAGE SPACES DIRECT ",
          contents: [
            "Create a failover cluster using Storage Spaces Direct", 
            "Upgrade a Storage Spaces Direct node ",
            "Implement networking for Storage Spaces Direct ",
            "Configure Storage Spaces Direct",
          ],
        },
      ],
    },
    {
      title:
        "Module 8: IMPLEMENT DISASTER RECOVERY (10–15%)",  
      submodules: [
        {
          heading: "MANAGE BACKUP AND RECOVERY FOR WINDOWS SERVER ",
          contents: [
            "Backup and restore files and folders to Azure Recovery Services vault ",
            "Install and manage Azure Backup Server ",
            "Back up and recover using Azure Backup Server ",
            "Manage backups in Azure Recovery Services vault ",
            "Create a backup policy ",
            "Configure backup for Azure Virtual Machines using the built-in backup agent ",
            "Recover a VM using temporary snapshots ",
            "Recover vms to new Azure Virtual Machines ",
            "Restore a VM",
          ],
        },
        {
          heading: "IMPLEMENT DISASTER RECOVERY BY USING AZURE SITE RECOVERY ",
          contents: [
            "Configure Azure Site Recovery networking ",
            "Configure Site Recovery for on-premises vms", 
            "Configure a recovery plan ",
            "Configure Site Recovery for Azure Virtual Machines ",
            "Implement VM replication to secondary datacenter or Azure region ",
            "Configure Azure Site Recovery policies",
          ],
        },
        {
          heading: "PROTECT VIRTUAL MACHINES BY USING HYPER-V REPLICAS ",
          contents: [
            "Configure Hyper-V hosts for replication ",
            "Manage Hyper-V replica servers ",
            "Configure VM replication ",
            "Perform a failover",    
          ],
        },
      ],
    },
    {
      title:
        "Module 9: MIGRATE SERVERS AND WORKLOADS (20–25%) ",  
      submodules: [
        {
          heading: "MIGRATE ON-PREMISES STORAGE TO ON-PREMISES SERVERS OR AZURE ",
          contents: [
            "Transfer data and share ",
            "Cut over to a new server by using storage migration service ",
            "Use storage migration service to migrate to azure virtual machines ",
            "Migrate to azure file shares",
          ],
        },
        {
          heading: "MIGRATE ON-PREMISES SERVERS TO AZURE ",
          contents: [
            "Deploy and configure Azure Migrate appliance ",
            "Migrate VM workloads to Azure iaas ",
            "Migrate physical workloads to Azure iaas ",
            "Migrate by using Azure Migrate",
          ],
        },
        {
          heading: "MIGRATE WORKLOADS FROM PREVIOUS VERSIONS TO WINDOWS SERVER 2022 ",
          contents: [
            "Migrate Internet Information Services (IIS) ",
            "Migrate Hyper-V hosts ",
            "Migrate Remote Desktop Services (RDS) host servers ",
            "Migrate Dynamic Host Configuration Protocol (DHCP) ",
            "Migrate print servers",
          ],
        },
        {
          heading: "MIGRATE IIS WORKLOADS TO AZURE",
          contents: [
            "Migrate IIS workloads to Azure Web Apps ",
            "Migrate IIS workloads to containers ",
          ],
        },
        {
          heading: "MIGRATE AN AD DS INFRASTRUCTURE TO WINDOWS SERVER 2022 AD DS ",
          contents: [
            "Migrate AD DS objects, including users, groups, and Group Policies, using Active Directory Migration Tool ",
            "Migrate to a new Active Directory Forest ",
            "Upgrade an existing forest",
          ],
        },
      ],
    },
    {
      title:
        "Module 10: MONITOR AND TROUBLESHOOT WINDOWS SERVER ENVIRONMENTS (20–25%) ",  
      submodules: [
        {
          heading: "MONITOR WINDOWS SERVER BY USING WINDOWS SERVER TOOLS AND AZURE SERVICES ",
          contents: [
            "Monitor Windows Server by using Performance Monitor ",
            "Create and configure Data Collector Sets ",
            "Monitor servers and configure alerts by using Windows Admin Center ",
            "Monitor by using System Insights ",
            "Manage event logs ",
            "Deploy Log Analytics agents ",
            "Collect performance counters to Azure ",
            "Create alerts ",
            "Monitor Azure Virtual Machines by using Azure diagnostics extension ",
            "Monitor Azure Virtual Machines performance by using VM insights ",
          ],
        },
        {
          heading: "TROUBLESHOOT WINDOWS SERVER ON-PREMISES AND HYBRID NETWORKING ",
          contents: [
            "Troubleshoot hybrid network connectivity", 
            "Troubleshoot on-premises connectivity",           
          ],
        },
        {
          heading: "TROUBLESHOOT WINDOWS SERVER VIRTUAL MACHINES IN AZURE ",
          contents: [
            "Troubleshoot deployment failures ",
            "Troubleshoot booting failures ",
            "Troubleshoot vm performance issues ",
            "Troubleshoot vm extension issues ",
            "Troubleshoot disk encryption issues ",
            "Troubleshoot storage ",
            "Troubleshoot vm connection issues",
          ],
        },
        {
          heading: "TROUBLESHOOT ACTIVE DIRECTORY  ",
          contents: [
            "Restore objects from AD recycle bin ",
            "Recover Active Directory database using Directory Services Restore Mode ",
            "Recover SYSVOL ",
            "Troubleshoot Active Directory replication ",
            "Troubleshoot hybrid authentication issues ",
            "Troubleshoot on-premises Active Directory ",
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
