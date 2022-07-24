  export default {
  title: "Microsoft Security Operations Analyst SC - 200",
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
      "Learn how to investigate, respond to, and hunt for threats using Microsoft Azure Sentinel, Azure Defender, and Microsoft 365 Defender. In this course you will learn how to mitigate cyberthreats using these technologies. Specifically, you will configure and use Azure Sentinel as well as utilize Kusto Query Language (KQL) to perform detection, analysis, and reporting. The course was designed for people who work in a Security Operations job role and helps learners prepare for the exam SC-200: Microsoft Security Operations Analyst. Learn how to investigate, respond to, and hunt for threats using Microsoft Sentinel, Microsoft Defender for Cloud, and Microsoft 365 Defender. In this course you will learn how to mitigate cyberthreats using these technologies. Specifically, you will configure and use Microsoft Sentinel as well as utilize Kusto Query Language (KQL) to perform detection, analysis, and reporting.	The course was designed for people who work in a Security Operations job role and helps learners prepare for the exam SC-200: Microsoft Security Operations Analyst.",
  },
  idealFor:
    "The Microsoft security operations analyst collaborates with organizational stakeholders to secure information technology systems for the organization. Their goal is to reduce organizational risk by rapidly remediating active attacks in the environment, advising on improvements to threat protection practices, and referring violations of organizational policies to appropriate stakeholders. Responsibilities include threat management, monitoring, and response by using a variety of security solutions across their environment. The role primarily investigates, responds to, and hunts for threats using Microsoft Sentinel, Microsoft Defender for Cloud, Microsoft 365 Defender, and third-party security products. Since the security operations analyst consumes the operational output of these tools, they are also a critical stakeholder in the configuration and deployment of these technologies.",

  learningObjectives:
    "Create beautiful web flow. Learn how to migrate and host on Microsoft Azure",
  modules: [
    {
      title:
        "Module 1: MITIGATE THREATS USING MICROSOFT 365 DEFENDER (25-30%)",
      submodules: [
        {
          heading: "DETECT, INVESTIGATE, RESPOND, AND REMEDIATE THREATS TO THE PRODUCTIVITY ENVIRONMENT BY USING MICROSOFT DEFENDER FOR OFFICE 365    ",
          contents: [
            "Detect, investigate, respond, and remediate threats to Microsoft Teams, sharepoint, and onedrive",
            "Detect, investigate, respond, remediate threats to email by using Defender for Office 365",
            "Manage data loss prevention policy alerts ",
            "Assess and recommend sensitivity labels ",
            "Assess and recommend insider risk policies",
          ],
        },
        {
          heading: "DETECT, INVESTIGATE, RESPOND, AND REMEDIATE ENDPOINT THREATS BY USING MICROSOFT DEFENDER FOR ENDPOINT",
          contents: [
            "Manage data retention, alert notification, and advanced features",
            "Configure device attack surface reduction rules",
            "Configure and manage custom detections and alerts",
            "Respond to incidents and alerts",
            "Manage automated investigations and remediations",
            "Assess and recommend endpoint configurations to reduce and remediate vulnerabilities by using the microsoft’s threat and vulnerability management solution.",
            "Manage microsoft defender for endpoint threat indicators",
            "Analyze microsoft defender for endpoint threat analytics",
          ],
        },
        {
          heading: "DETECT, INVESTIGATE, RESPOND, AND REMEDIATE IDENTITY THREATS",
          contents: [
            "Identify and remediate security risks related to sign-in risk policies",
            "Identify and remediate security risks related to conditional access events ",
            "Identify and remediate security risks related to azure active directory ",
            "Identify and remediate security risks using secure score ",
            "Identify, investigate, and remediate security risks related to privileged identities ",
            "Configure detection alerts in azure ad identity protection ",
            "Identify and remediate security risks related to active directory domain services using microsoft defender for identity ",  
          ],
        },
        {                               
          heading: "DETECT, INVESTIGATE, RESPOND, AND REMEDIATE APPLICATION THREATS",
          contents: [
            "Identify, investigate, and remediate security risks by using Microsoft Cloud Application Security (MCAS)",
            "Configure MCAS to generate alerts and reports to detect threats",
          ],
        },
        {
          heading: "MANAGE CROSS-DOMAIN INVESTIGATIONS IN MICROSOFT 365 DEFENDER PORTAL",
          contents: [
            "Manage incidents across Microsoft 365 Defender products",
            "Manage actions pending approval across products",
            "Perform advanced threat hunting",
            
          ],
        },
      ],
    },
    {
      title:
        "Module 2: MITIGATE THREATS USING MICROSOFT DEFENDER FOR CLOUD (25-30%)",
      submodules: [
        {
          heading: "DESIGN AND CONFIGURE A MICROSOFT DEFENDER FOR CLOUD IMPLEMENTATION",
          contents: [
            "Plan and configure Microsoft Defender for Cloud settings, including selecting target subscriptions and workspace",
            "Configure Microsoft Defender for Cloud roles ",
            "Configure data retention policies ",
            "Assess and recommend cloud workload protection ",
          ],
        },
        {
          heading: "PLAN AND IMPLEMENT THE USE OF DATA CONNECTORS FOR INGESTION OF DATA SOURCES IN MICROSOFT DEFENDER FOR CLOUD",
          contents: [
            "Identify data sources to be ingested for Microsoft Defender for Cloud",
            "Configure automated onboarding for Azure resources",
            "Connect on-premises computers",
            "Connect AWS cloud resources",
            "Connect GCP cloud resources",
            "Configure data collection",
          ],
        },
        {
          heading: "MANAGE MICROSOFT DEFENDER FOR CLOUD ALERT RULES",
          contents: [
            "Validate alert configuration",
            "Setup email notifications",
            "Create and manage alert suppression rules",
          ],
        },
        {
          heading: "CONFIGURE AUTOMATION AND REMEDIATION",
          contents: [
            "Configure automated responses in Microsoft Defender for Cloud",
            "Design and configure workflow automation in Microsoft Defender for Cloud",
            "Remediate incidents by using Microsoft Defender for Cloud recommendations",
            "Create an automatic response using an Azure Resource Manager template",
          ]
        },
        {
          heading: "INVESTIGATE MICROSOFT DEFENDER FOR CLOUD ALERTS AND INCIDENTS",
          contents: [
            "Describe alert types for Azure workloads",
            "Manage security alerts",
            "Manage security incidents",
            "Analyze Microsoft Defender for Cloud threat intelligence",
            "Respond to Microsoft Defender Cloud for Key Vault alerts",
            "Manage user data discovered during an investigation",
          ]
        }
      ],
    },
    {
      title:
        "Module 3: MITIGATE THREATS USING MICROSOFT SENTINEL (40-45%)",
      submodules: [
        {
          heading: "DESIGN AND CONFIGURE A MICROSOFT SENTINEL WORKSPACE",
          contents: [
            "Plan a Microsoft Sentinel workspace",
            "Configure Microsoft Sentinel roles",
            "Design Microsoft Sentinel data storage",
            "Configure security settings and access for Microsoft Sentinel",
          ],
        },
        {                                   
          heading: "PLAN AND IMPLEMENT THE USE OF DATA CONNECTORS FOR INGESTION OF DATA SOURCES IN MICROSOFT SENTINEL",
          contents: [
            "Identify data sources to be ingested for Microsoft Sentinel",
            "Identify the prerequisites for a data connector",
            "Configure and use Microsoft Sentinel data connectors",
            "Configure data connectors by using Azure Policy",
            "Design and configure Syslog and CEF event collections",
            "Design and Configure Windows Security events collections",
            "Configure custom threat intelligence connectors",
            "Create custom logs in Azure Log Analytics to store custom data",
          ],
        },
        {
          heading: "MANAGE MICROSOFT SENTINEL ANALYTICS RULES",
          contents: [
            "Design and configure analytics rules",
            "Create custom analytics rules to detect threats",
            "Activate microsoft security analytics rules",
            "Configure connector provided scheduled queries",
            "Configure custom scheduled queries",
          ],
        },
        {
          heading: "CONFIGURE SECURITY ORCHESTRATION AUTOMATION AND RESPONSE (SOAR) IN MICROSOFT SENTINEL",
          contents: [
            "Create Microsoft Sentinel playbooks",
            "Configure rules and incidents to trigger playbooks",
            "Use playbooks to remediate threats",
            "Use playbooks to manage incidents",
            "Use playbooks across Microsoft Defender solutions",
          ],
        },
        {
          heading: "MANAGE MICROSOFT SENTINEL INCIDENTS",
          contents: [
            "Investigate incidents in Microsoft Sentinel",
            "Triage incidents in Microsoft Sentinel",
            "Respond to incidents in Microsoft Sentinel",
            "Investigate multi-workspace incidents",
            "Identify advanced threats with User and Entity Behavior Analytics (UEBA)",
          ],
        },
        {
          heading: "USE MICROSOFT SENTINEL WORKBOOKS TO ANALYZE AND INTERPRET DATA",
          contents: [
            "Activate and customize Microsoft Sentinel workbook templates",
            "Create custom workbooks",
            "Configure advanced visualizations",
            "View and analyze Microsoft Sentinel data using workbooks",
            "Track incident metrics using the security operations efficiency workbook",
          ],
        },
        {
          heading: "9.3.7	HUNT FOR THREATS USING MICROSOFT SENTINEL",
          contents: [
            "Create custom hunting queries",
            "Run hunting queries manually",
            "Monitor hunting queries by using livestream",
            "Perform advanced hunting with notebooks",
            "Track query results with bookmarks",
            "Use hunting bookmarks for data investigations",
            "Convert a hunting query to an analytical",  
          ]
        }
      ],
    },
    {
      title:
        "Module 4: PLAN AND IMPLEMENT AN IDENTITY GOVERNANCE STRATEGY (25 - 30%)",
      submodules: [
        {
          heading: "PLAN AND IMPLEMENT ENTITLEMENT MANAGEMENT",
          contents: [
            "Define catalogs",
            "Define access packages",
            "Plan, implement and manage entitlements",
            "Implement and manage terms of use",
            "Manage the lifecycle of external users in azure ad identity governance settings define catalogs",
          ],
        },
        {
          heading: "PLAN, IMPLEMENT AND MANAGE ACCESS REVIEWS",
          contents: [
            "Plan for access reviews",
            "Create access reviews for groups and apps",
            "Monitor access review findings",
            "Manage licenses for access reviews",
            "Automate access review management tasks",
            "Configure recurring access reviews",
          ],
        },
        {
          heading: "PLAN AND IMPLEMENT PRIVILEGED ACCESS",
          contents: [
            "Define a privileged access strategy for administrative users (resources, roles, approvals, thresholds)",
            "Configure privileged identity management for azure ad roles",
            "Configure privileged identity management for azure resources",
            "Assign roles",
            "Manage pim requests",
            "Analyze pim audit history and reports",
            "Create and manage break-glass accounts",
          ],
        },
        {
          heading: "9.4.4	MONITOR AND MAINTAIN AZURE ACTIVE DIRECTORY",
          contents: [
            "Analyze and investigate sign-in logs to troubleshoot access issues",
            "Review and monitor azure ad audit logs",
            "Enable and integrate azure ad diagnostic logs with log analytics / microsoft sentinel",
            "Export sign-in and audit logs to a third-party siem",
            "Review azure ad activity by using log analytics / microsoft sentinel, excluding kql use",
            "Analyze azure active directory workbooks / reporting",
            "Configure notifications",
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
