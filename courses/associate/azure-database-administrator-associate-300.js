export default {
  title: "Azure Database Administrator Associate DP - 300",
  subtitle:
    "A master course designed for working professionals like you. Make your career soar with Loyal Bytes.",
  heroImage: "/images/course-page/azure-hero-image.png",
  heroBg: "/images/course-page/azure-hero-bg.png",
  courseDetail: {
    duration: "32 Hours",
    certification: "Microsoft Certification",
    batchInfo: "Weekdays batches available",
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
      "The Azure database administrator implements and manages the operational aspects of cloud-native and hybrid data platform solutions built with Microsoft SQL Server and Microsoft Azure Data Services. The Azure database administrator uses a variety of methods and tools to perform day-to-day operations, including applying knowledge of using T-SQL for administrative management purposes.",
  },
  idealFor:
    "Candidates for this exam are database administrators and data management specialists that manage on-premises and cloud relational databases built with Microsoft SQL Server and Microsoft Azure Data Services.",

  learningObjectives:
    "The Azure database administrator implements and manages the operational aspects of cloud-native and hybrid data platform solutions built on Azure Data Services and SQL Server. The Azure database administrator uses a variety of methods and tools to perform day-to-day operations, including applying knowledge of using T-SQL for administrative management purposes. This role is responsible for management, availability, security and performance monitoring and optimization of modern relational database solutions. This role works with the Azure data engineer role to manage operational aspects of data platform solutions.",
  modules: [
    {
      title: "Module 1: PLAN AND IMPLEMENT DATA PLATFORM RESOURCES (15-20%)",
      submodules: [
        {
          heading: "9.1.1	DEPLOY RESOURCES BY USING MANUAL METHODS",
          contents: [
            "deploy database offerings on selected platforms",
            "configure customized deployment templates",
            "apply patches and updates for hybrid and IaaS deployment",
          ],
        },
        {
          heading:
            "9.1.2	RECOMMEND AN APPROPRIATE DATABASE OFFERING BASED ON SPECIFIC REQUIREMENTS",
          contents: [
            "evaluate requirements for the deployment",
            "evaluate the functional benefits/impact of possible database offerings",
            "evaluate the scalability of the possible database offering",
            "evaluate the HA/DR of the possible database offering",
            "evaluate the security aspects of the possible database offering",
          ],
        },
        {
          heading: "9.1.3	CONFIGURE RESOURCES FOR SCALE AND PERFORMANCE",
          contents: [
            "configure Azure SQL Database for scale and performance",
            "configure Azure SQL Managed Instance for scale and performance",
            "configure SQL Server in Azure VMs for scale and performance",
            "calculate resource requirements",
            "evaluate database partitioning techniques, such as database sharding",
            "set up SQL Data Sync",
          ],
        },
        {
          heading: "9.1.4	EVALUATE A STRATEGY FOR MOVING TO AZURE",
          contents: [
            "evaluate requirements for the migration",
            "evaluate offline or online migration strategies",
            "evaluate requirements for the upgrade",
            "evaluate offline or online upgrade strategies",
          ],
        },
        {
          heading:
            "9.1.5	IMPLEMENT A MIGRATION OR UPGRADE STRATEGY FOR MOVING TO AZURE",
          contents: [
            "implement an online migration strategy",
            "implement an offline migration strategy",
            "implement an online upgrade strategy",
            "implement an offline upgrade strategy",
          ],
        },
      ],
    },
    {
      title: "Module 2:	IMPLEMENT A SECURE ENVIRONMENT (15-20%)",
      submodules: [
        {
          heading:
            "9.2.1	CONFIGURE DATABASE AUTHENTICATION BY USING PLATFORM AND DATABASE TOOLS",
          contents: [
            "configure Azure AD authentication",
            "create users from Azure AD identities",
            "configure security principals",
          ],
        },
        {
          heading:
            "9.2.2	CONFIGURE DATABASE AUTHORIZATION BY USING PLATFORM AND DATABASE TOOLS",
          contents: [
            "configure database and object-level permissions using graphical tools",
            "apply principle of least privilege for all securable",
          ],
        },
        {
          heading: "9.2.3	IMPLEMENT SECURITY FOR DATA AT REST",
          contents: [
            "implement Transparent Data Encryption (TDE)",
            "implement object-level encryption",
            "implement Dynamic Data Masking",
            "implement Azure Key Vault and disk encryption for Azure VMs",
          ],
        },
        {
          heading: "9.2.4	IMPLEMENT SECURITY FOR DATA IN TRANSIT",
          contents: [
            "configure server and database-level firewall rules",
            "implement Always Encrypted",
          ],
        },
        {
          heading: "9.2.5	IMPLEMENT COMPLIANCE CONTROLS FOR SENSITIVE DATA",
          contents: [
            "apply a data classification strategy",
            "configure server and database audits",
            "implement data change tracking",
            "perform a vulnerability assessment",
          ],
        },
      ],
    },
    {
      title: "Module 3: MONITOR AND OPTIMIZE OPERATIONAL RESOURCES (15-20%)",
      submodules: [
        {
          heading: "9.3.1	MONITOR ACTIVITY AND PERFORMANCE",
          contents: [
            "prepare an operational performance baseline",
            "determine sources for performance metrics",
            "interpret performance metrics",
            "configure and monitor activity and performance at the infrastructure, server, service, and database levels",
          ],
        },
        {
          heading: "9.3.2	IMPLEMENT PERFORMANCE-RELATED MAINTENANCE TASKS",
          contents: [
            "implement index maintenance tasks",
            "implement statistics maintenance tasks",
            "configure database auto-tuning",
            "manage storage capacity",
          ],
        },
        {
          heading: "9.3.3	IDENTIFY PERFORMANCE-RELATED ISSUES",
          contents: [
            "configure Query Store to collect performance data",
            "identify sessions that cause blocking",
            "assess growth/fragmentation of databases and logs",
            "assess performance-related database configuration parameters",
          ],
        },
        {
          heading: "9.3.4	CONFIGURE RESOURCES FOR OPTIMAL PERFORMANCE",
          contents: [
            "configure storage and infrastructure resources",
            "configure server and service account settings for performance",
            "configure Resource Governor for performance",
          ],
        },
        {
          heading: "9.3.5	CONFIGURE A USER DATABASE FOR OPTIMAL PERFORMANCE",
          contents: [
            "implement database-scoped configuration",
            "configure compute resources for scaling",
            "configure Intelligent Query Processing (IQP)",
          ],
        },
      ],
    },
    {
      title: "Module 4: OPTIMIZE QUERY PERFORMANCE (5-10%)",
      submodules: [
        {
          heading: "9.4.1	REVIEW QUERY PLANS",
          contents: [
            "determine the appropriate type of execution plan",
            "identify problem areas in execution plans",
            "extract query plans from the Query Store",
          ],
        },
        {
          heading: "9.4.2	EVALUATE PERFORMANCE IMPROVEMENTS",
          contents: [
            "determine the appropriate Dynamic Management Views (DMVs) to gather query performance information",
            "identify performance issues using DMVs",
            "identify and implement index changes for queries",
            "recommend query construct modifications based on resource usage",
            "assess the use of hints for query performance",
          ],
        },
        {
          heading: "9.4.3	REVIEW DATABASE TABLE AND INDEX DESIGN",
          contents: [
            "identify data quality issues with duplication of data",
            "identify normal form of database tables",
            "assess index design for performance",
            "validate data types defined for columns",
            "recommend table and index storage including filegroups",
            "evaluate table partitioning strategy",
            "evaluate the use of compression for tables and indexes",
          ],
        },
      ],
    },
    {
      title: "Module 5: PERFORM AUTOMATION OF TASKS (10-15%)",
      submodules: [
        {
          heading: "9.5.1	CREATE SCHEDULED TASKS",
          contents: [
            "manage schedules for regular maintenance jobs",
            "configure multi-server automation",
            "configure notifications for task success/failure/non-completion",
          ],
        },
        {
          heading:
            "9.5.2	EVALUATE AND IMPLEMENT AN ALERT AND NOTIFICATION STRATEGY",
          contents: [
            "create event notifications based on metrics",
            "create event notifications for Azure resources",
            "create alerts for server configuration changes",
            "create tasks that respond to event notifications",
          ],
        },
        {
          heading: "9.5.3	MANAGE AND AUTOMATE TASKS IN AZURE",
          contents: [
            "perform automated deployment methods for resources",
            "implement policies by using automated evaluation modes",
          ],
        },
      ],
    },
    {
      title:
        "Module 6: PLAN AND IMPLEMENT A HIGH AVAILABILITY AND DISASTER RECOVERY (HADR) ENVIRONMENT (15-20%)",
      submodules: [
        {
          heading:
            "9.6.1	RECOMMEND AN HADR STRATEGY FOR A DATA PLATFORM SOLUTION",
          contents: [
            "recommend HADR strategy based on RPO/RTO requirements",
            "evaluate HADR for hybrid deployments",
            "evaluate Azure-specific HADR solutions",
            "identify resources for HADR solutions",
          ],
        },
        {
          heading:
            "9.6.2	TEST AN HADR STRATEGY BY USING PLATFORM, OS, AND DATABASE TOOLS",
          contents: [
            "test HA by using failover",
            "test DR by using failover or restore",
          ],
        },
        {
          heading:
            "9.6.3	PERFORM BACKUP AND RESTORE A DATABASE BY USING DATABASE TOOLS",
          contents: [
            "perform a database backup with options",
            "perform a database restore with options",
            "perform a database restore to a point in time",
            "configure long-term backup retention",
          ],
        },
        {
          heading:
            "9.6.4	CONFIGURE HA/DR BY USING OS, PLATFORM, AND DATABASE TOOLS",
          contents: [
            "configure replication",
            "create an Always on Availability Group",
            "configure auto-failover groups",
            "integrate a database into an Always on Availability Group",
            "configure quorum options for a Windows Server Failover Cluster",
            "configure an Always on Availability Group listener",
            "configure failover cluster instances on Azure VMs",
          ],
        },
      ],
    },
    {
      title: "Module 6: PERFORM ADMINISTRATION BY USING T-SQL (10-15%)",
      submodules: [
        {
          heading: "9.7.1	EXAMINE SYSTEM HEALTH",
          contents: [
            "evaluate database health using DMVs",
            "evaluate server health using DMVs",
            "perform database consistency checks by using DBCC",
          ],
        },
        {
          heading: "9.7.2	MONITOR DATABASE CONFIGURATION BY USING T-SQL",
          contents: [
            "assess proper database auto grow configuration",
            "report on database free space",
            "review database configuration options",
          ],
        },
        {
          heading: "9.7.3	PERFORM BACKUP AND RESTORE A DATABASE BY USING T-SQL",
          contents: [
            "prepare databases for Always On Availability Groups",
            "perform transaction log backup",
            "perform restore of user databases",
            "perform database backups with options",
          ],
        },
        {
          heading: "9.7.4	MANAGE AUTHENTICATION BY USING T-SQL",
          contents: ["manage certificates", "manage security principals"],
        },
        {
          heading: "9.7.5	MANAGE AUTHORIZATION BY USING T-SQL",
          contents: [
            "configure permissions for users to access database objects",
            "configure permissions by using custom roles",
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
