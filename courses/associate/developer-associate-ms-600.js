  export default {
  title: "Developer Associate MS - 600",
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
        subheading: "40 Hours.",
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
      "This course covers five central elements of Microsoft 365 platform – implementing Microsoft Identity, working with Microsoft Graph, extending, and customizing sharepoint, extending Teams, and extending Office. In this course, students will learn how to implement Microsoft Identity and work with Microsoft Graph. Students will also gain the knowledge on UI elements (including Adaptive Cards and UI Fabric), Integration Points (including Microsoft Teams, Office Add-ins, sharepoint Framework, Actionable Messages), and determining workload platform targets. In implementing Microsoft Identity, students will learn to implement Microsoft identity including registering an application, implanting authentication, configuring permissions to consume an API, and creating a service to access Microsoft Graph. In working with Microsoft Graph, students will learn how to access user data, explore query parameters, manage a group lifecycle, access files, and optimize network traffic using Microsoft Graph. In extending and customizing sharepoint, students will learn about sharepoint Framework web parts, extensions, and how to package and deploy a spfx solution. In extending Teams, students will look at the components of a Teams App, work with webhooks, tabs, and conversational bots. In extending Office, students work with Office Add-ins, task pane add-ins, javascript apis, Office UI Fabric, and actionable messages with adaptive cards.",
  },
  idealFor:
    "Candidates for this exam are Microsoft 365 Developers who design, build, test, and maintain applications and solutions that are optimized for the productivity and collaboration needs of organizations using the Microsoft 365 platform. Candidates for this exam are proficient in Microsoft identity, Microsoft Graph, and building apps for Microsoft Teams. They have general knowledge on UI elements (including Fluent UI (Office UI Fabric), integration points (including Office Add-ins, sharepoint Framework, Actionable Messages), and determining workload platform targets. Candidates should have experience developing solutions on Microsoft Teams, Office, or sharepoint through all phases of software development. They should have a basic understanding of REST apis, JSON, oauth2, odata, openid Connect, Microsoft identities (including Azure AD and Microsoft accounts), Azure AD B2C, and permission/consent concepts Skills Measured The bullets that follow each of the skills measured are intended to illustrate how we are assessing that skill. Related topics may be covered in the exam. Most questions cover features that are general availability (GA). The exam may contain questions on Preview features if those features are commonly used.",

  learningObjectives:
    "Create beautiful web flow. Learn how to migrate and host on Microsoft Azure",
  modules: [
    {
      title:
        "Module 1: IMPLEMENT MICROSOFT IDENTITY (20-25%)",
      submodules: [
        {
          heading: "REGISTER AN APPLICATION",
          contents: [
            "Determine the supported account type",
            "Select authentication and client credentials for app type and authentication flow",
            "Define app roles",
          ],
        },
        {
          heading: "IMPLEMENT AUTHENTICATION",
          contents: [
            "Configure the javascript implementation of Microsoft Authentication Library (MSAL) for endpoint and token cache",
            "Plan and configure scopes for dynamic or static permissions",
            "Use the MSAL (javascript) login method",
          ],
        },
        {
          heading: "CONFIGURE PERMISSIONS TO CONSUME AN API",
          contents: [
            "Configure delegated permissions for the app",
            "Configure application permissions for the app",
            "Identify admin consent requirements",
          ],
        },
        {                               
          heading: "IMPLEMENT AUTHORIZATION TO CONSUME AN API",
          contents: [
            "Configure incremental consent scopes",
            "Call msal (javascript) using aquiretokensilent/aquiretoken pattern",
          ],
        },
        {
          heading: "IMPLEMENT AUTHORIZATION IN AN API",
          contents: [
            "Validate access token",
            "Configure effective permissions for delegated scopes",
            "Implement app permissions using roles",
            "Use a delegated access token to call a microsoft api",
          ],
        },
        {
          heading: "CREATE A SERVICE TO ACCESS MICROSOFT GRAPH",
          contents: [
            "Configure client credentials using a certificate",
            "Configure application permissions for the app",
            "Acquire an access token for microsoft graph using an application permission and client credential certificate",
            "Acquire an access token using the client secret",
          ],
        }
      ],
    },
    {
      title:
        "Module 2: BUILD APPS WITH MICROSOFT GRAPH (15-20%)",
      submodules: [
        {
          heading: "OPTIMIZE DATA USAGE WITH QUERY PARAMETERS",
          contents: [
            "Use $filter query parameter",
            "Use $select query parameter",
            "Order results using $orderby query parameter",
            "Set page size of results using $skip and $top query parameters",
            "Expand and retrieve resources using $expand query parameter",
            "Retrieve the total count of matching resources using $count query parameter",
            "Search for resources using $search query parameter",
            "Determine the appropriate microsoft graph sdk to leverage",
          ],
        },
        {
          heading: "OPTIMIZE NETWORK TRAFFIC",
          contents: [
            "Monitor for changes using change notifications",
            "Combine multiple requests using $batch",
            "Get changes using a delta query",
            "Detect and handle throttling",
          ],
        },
        {
          heading: "ACCESS USER DATA FROM MICROSOFT GRAPH",
          contents: [
            "Get the signed in user's profile",
            "Get a list of users in the organization",
            "Get the user's profile photo",
            "Get the user object based on the user's unique identifier",
            "Get the user's manager’s profile",
          ],
        },
        {
          heading: "ACCESS FILES WITH MICROSOFT GRAPH",
          contents: [
            "Get the list of files in the signed in user's onedrive",
            "Download a file from the signed in user's onedrive using file unique id",
            "Download a file from a sharepoint Online site using the relative path to the file",
            "Get the list of files trending around the signed in user",
            "Upload a large file to onedrive",
            "Get a user object from an owner list in a group and retrieve that user’s files",
          ]
        },
        {
          heading: "MANAGE A GROUP LIFECYCLE ON MICROSOFT GRAPH",
          contents: [
            "Get the information on a group by id",
            "Get the list of members in a group",
            "Get the list of owners of a group",
            "Get the list of groups where the signed in user is a member",
            "Provision a group",
            "Provision a team with a group",
            "Delete a group",
          ],
        },
      ],
    },
    {
      title:
        "Module 3: EXTEND AND CUSTOMIZE SHAREPOINT (15-20%)",
      submodules: [
        {
          heading: "DESCRIBE THE COMPONENTS OF A SHAREPOINT FRAMEWORK (SPFX) WEB PART",
          contents: [
            "Identify the appropriate tool to create an spfx Web Part project",
            "Describe properties of client-side web parts",
            "Describe Fluent UI (Office UI Fabric) in client-side web parts",
            "Describe when to use an app page",
            "Differentiate between app page and web part",
            "Describe rendering framework options",
            "Describe branding and theming in sharepoint Online",
          ],
        },
        {                                   
          heading: "DESCRIBE SPFx EXTENSIONS",
          contents: [
            "Identify the appropriate tool to create an spfx Extension project",
            "Describe page placeholders from Application Customizer",
            "Describe the listview Command Set extension",
            "Describe the Field Customizer extension",
          ],
        },
        {
          heading: "DESCRIBE THE PROCESS TO PACKAGE AND DEPLOY AN SPFX SOLUTION",
          contents: [
            "Describe the options for preparing a package for deployment",
            "Describe the options for packaging a solution",
            "Describe the requirements of tenant-scoped solution deployment",
            "Describe the requirements of isolated web parts",
            "Describe the options to deploy a solution’",
          ],
        },
        {
          heading: "DESCRIBE THE CONSUMPTION OF MICROSOFT GRAPH",
          contents: [
            "Describe the purpose of the msgraphclient object",
            "Describe the methods for granting permissions to Microsoft Graph",
          ],
        },
        {
          heading: "DESCRIBE THE CONSUMPTION OF THIRD-PARTY APIS SECURED WITH AZURE AD FROM WITHIN AN SPFx SOLUTION",
          contents: [
            "Describe the purpose of the aadhttpclient object",
            "Describe the methods for granting permissions to consume a third-party API",
          ],
        },
        {
          heading: "DESCRIBE WEB PARTS AS TEAMS TABS",
          contents: [
            "Describe how to build a Microsoft Teams tab by using spfx",
            "Describe the considerations for creating an spfx Web Part to be a Teams Tab",
            "Describe the options for deploying an spfx Web Part as a Teams Tab",
          ],
        },
      ],
    },
    {
      title:
        "Module 4: EXTEND TEAMS (20-25%)",
      submodules: [
        {
          heading: "CREATE A MICROSOFT TEAMS APP MANIFEST",
          contents: [
            "Configure an app manifest using App Studio or Developer Portal",
            "Manually create an app manifest to deploy an spfx Web Part to Teams",
            "Create an app package for a Microsoft Teams app",
          ],
        },
        {
          heading: "DEPLOY A TEAM’S APP",
          contents: [
            "Describe the options for deploying a Teams app",
            "Sideload an app in Microsoft Teams",
            "Publish a Teams app to an organization app catalog",
          ],
        },
        {
          heading: "CREATE AND USE TASK MODULES",
          contents: [
            "Create a card-based task module",
            "Create an iframe-based task module",
            "Invoke a task module from a tab",
            "Invoke a task module from a bot",
            "Chain task module invocations",
          ],
        },
        {
          heading: "CREATE A WEBHOOK",
          contents: [
            "Create an outgoing webhook",
            "Create an incoming webhook",
          ],
        },
        {
          heading: "IMPLEMENT CUSTOM TEAMS TABS",
          contents: [
            "Create a personal tab",
            "Create a channel/group tab",
            "Create a tab with a deep link",
            "Implement single sign-on authentication for a tab",
          ],
        },
        {heading: "CREATE A MESSAGING EXTENSION",
        contents: [
          "Create a messaging extension search command",
          "Create a messaging extension action command using an adaptive card",
          "Create a messaging extension action command using parameters",
        ],
       },
       {
        heading: "CREATE A CONVERSATIONAL BOT",
          contents: [
            "Create a personal bot",
            "Create a group/channel bot",
            "Use proactive messaging with a bot",
            "Send actionable messages from a bot",
            "Implement single sign-on authentication for a bot",
          ],
        },
        {
          heading: "USE MICROSOFT GRAPH TO WORK WITH TEAMS",
          contents: [
            "Create a team",
            "List teams",
            "Configure a built-in tab",
            "Send activity feed notification to user",
            "Enable resource",
          ],
        },
      ],
    },
    {
      title:
      "Module 4: EXTEND OFFICE (15-20%)",
    submodules: [
      {
        heading: "DESCRIBE FUNDAMENTAL COMPONENTS AND TYPES OF OFFICE ADD-INS",
        contents: [
          "Describe task pane and content add-ins",
          "Describe dialog boxes",
          "Describe custom functions",
          "Describe add-in commands",
          "Describe the purpose of the office add-ins manifest",
        ],
      },
      {
        heading: "DESCRIBE OFFICE JS APIS",
        contents: [
          "Describe the Office Add-in programming model",
          "Describe Office Add-in developer tools",
          "Describe the capabilities of the Excel javascript API",
          "Describe the capabilities of the Outlook javascript API",
          "Describe the capabilities of the Word javascript API",
          "Describe the capabilities of the powerpoint javascript API",
          "Describe the capabilities of Excel custom functions",
        ],
      },
      {
        heading: "DESCRIBE DEVELOPMENT OF ADD-INS",
        contents: [
          "Describe the options for persisting state and settings",
          "Describe fluent ui (office ui fabric) in office add-ins",
          "Describe when to use microsoft graph in office add-ins",
          "Describe authorization when using microsoft graph in office add-ins",
        ],
      },
      {
        heading: "DESCRIBE TESTING, DEBUGGING, AND DEPLOYMENT OPTIONS",
        contents: [
          "Select deployment options based on requirements",
          "Describe testing and debugging concepts for office add-ins",
        ],
      },
      {
        heading: "DESCRIBE ACTIONABLE MESSAGES",
        contents: [
          "Describe the features of actionable messages with an Adaptive Card",
          "Describe the scenarios for refreshing an actionable message",
          
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