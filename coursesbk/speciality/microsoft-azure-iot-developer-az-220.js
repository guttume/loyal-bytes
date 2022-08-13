  export default {
  title: "Microsoft Azure IoT Developer AZ 220",
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
      "Candidates for this certification should have subject matter expertise implementing the configuration and coding tasks required to create and maintain the cloud and edge portions of an IoT solution. Responsibilities for this role include deploying physical devices, configuring, and maintaining them by using cloud services, and maintaining and troubleshooting the configuration throughout the device lifecycle. Azure IoT developers are also responsible for implementing design specifications for IoT solutions, including device topology, connectivity, diagnostics and monitoring, and security. These professionals develop and deploy modules and configure device networking for the Azure IoT Edge portion of the solution. In addition to this, they implement designs for solutions to manage data pipelines, including monitoring and data transformation as they relate to IoT. Azure IoT developers work with architects, data engineers, and other stakeholders to ensure successful business integration, including the implementation of the Azure Digital Twins service. Candidates for this certification should have a general understanding of device types and Azure services, including data storage options, data analysis, data processing, AI, and other platform as a service (PaaS) options. They must be able to program in at least one Azure IoT software development kit–supported (SDK–supported) language. Candidates for this exam should have subject matter expertise implementing the configuration and coding tasks required to create and maintain the cloud and edge portions of an IoT solution. Candidates for this exam should have a general understanding of device types and Azure services, including data storage options, data analysis, data processing, AI, and other platform as a service (PaaS) options. They must be able to program in at least one Azure IoT software development kit–supported (SDK–supported) language.",
  },
  idealFor:
    "Candidates for this exam should have subject matter expertise implementing the configuration and coding tasks required to create and maintain the cloud and edge portions of an IoT solution. Responsibilities for this role include deploying physical devices, configuring, and maintaining them by using cloud services, and maintaining and troubleshooting the configuration throughout the device lifecycle. Azure IoT developers are also responsible for implementing design specifications for IoT solutions, including device topology, connectivity, diagnostics and monitoring, and security. These professionals develop and deploy modules and configure device networking for the Azure IoT Edge portion of the solution. In addition to this, they implement designs for solutions to manage data pipelines, including monitoring and data transformation as they relate to IoT. Azure IoT developers work with architects, data engineers, and other stakeholders to ensure successful business integration, including the implementation of the Azure Digital Twins service. Candidates for this exam should have a general understanding of device types and Azure services, including data storage options, data analysis, data processing, AI, and other platform as a service (PaaS) options. They must be able to program in at least one Azure IoT software development kit–supported (SDK–supported) language.",

  learningObjectives:
    "Create beautiful web flow. Learn how to migrate and host on Microsoft Azure",
  modules: [
    {
      title:
        "Module 1: SET UP THE IOT SOLUTION INFRASTRUCTURE (10–15%)",
      submodules: [
        {
          heading: "CREATE AND CONFIGURE AN IOT HUB ",
          contents: [
            "Create an iot Hub ",
            "Register a device ",
            "Configure a device twin ",
            "Configure iot Hub tier and scaling ",
          ],
        },
        {
          heading: "BUILD DEVICE MESSAGING AND COMMUNICATION ",
          contents: [
            "Build messaging solutions by using sdks (device and service) ",
            "Implement device-to-cloud communication ",
            "Implement cloud-to-device communication ",
            "Configure file upload for devices ",
            "Optimize message size and scaling ",
            "Connect to iot Hub using TLS server certificates ",
          ],
        },
        {
          heading: "CONFIGURE PHYSICAL IOT DEVICES ",
          contents: [
            "Recommend an appropriate protocol based on device specifications", 
            "Configure device networking, topology, and connectivity ",
          ],
        },
      ],
    },
    {
      title:
        "Module 2: PROVISION AND MANAGE DEVICES (15–20%) ",
      submodules: [
        {
          heading: "SET UP AN IOT HUB DEVICE PROVISIONING SERVICE (DPS) ",
          contents: [
            "Create a DPS instance ",
            "Create a new enrollment in DPS ",
            "Link an iot Hub to the DPS instance ",
          ],
        },
        {
          heading: "MANAGE THE DEVICE LIFECYCLE ",
          contents: [
            "Provision a device by using DPS ",
            "Deprovision an autoenrollment ",
            "Decommission (disenroll) a device", 
          ],
        },
        {
          heading: "MANAGE IOT DEVICES BY USING IOT HUB ",
          contents: [
            "Manage the devices list in the iot Hub device registry ",
            "Modify device twin tags and properties ",
            "Configure a set of devices by using iot Hub Automatic Device Management ",
            "Trigger an action on a set of devices by using iot Hub Jobs and Direct Methods ",
            "Implement a device firmware update process by using device management primitives ",
            "Configure module identities ",
          ],
        },
        {
          heading: "MANAGE IOT DEVICES BY USING AZURE IOT CENTRAL ",
          contents: [
            "Create a custom device template by using Azure iot Central ",
            "Configure rules and actions in iot Central ",
            "Customize the operator view ",
            "Add and manage devices from iot Central ",
            "Troubleshoot device connections and data mapping ",
            "Create an application based on an app template for an industry vertical ",
            "Export a custom application template ",
            "Create and manage a new application based on a custom application template ",
            "Upgrade and version a device template ",
            "Run iot Central jobs ",
            "Interact with iot Central devices using the REST apis ",                                                 
          ],
        },
      ],
    },
    {
      title:
        "Module 3: IMPLEMENT IOT EDGE (15–20%) ",
      submodules: [
        {
          heading: "SET UP AN IOT EDGE DEVICE ",
          contents: [
            "Create a device identity in iot Hub ",
            "Set up an iot device for iot Edge ",
            "Select and install container runtime on iot devices ",
            "Implement module access to the host system ",
            "Update iot Edge runtime ",
            "Provision iot Edge devices by using DPS ",
          ],
        },
        {                                   
          heading: "DEPLOY AN IOT EDGE DEVICE ",
          contents: [
            "Create and implement a deployment manifest ",
            "Create a deployment for a single iot edge device ",
            "Create a deployment to target multiple devices ",
            "Create a continuous deployment by using azure devops ",
          ],
        },
        {
          heading: "DEVELOP IOT EDGE MODULES  ",
          contents: [
            "Create and customize an iot Edge module ",
            "Deploy a custom iot Edge module to an iot Edge device ",
            "Deploy an iot Edge module from Azure Marketplace to an iot Edge device ",
            "Publish an iot Edge module to Azure Container Registry ",
            "Define module configuration ",
            "Configure iot Edge module routing ",
            "Configure environment for iot Edge development; debug iot Edge modules in the development environment ",
          ],
        },
        {
          heading: "CONFIGURE AN IOT EDGE DEVICE ",
          contents: [
            "Select an appropriate gateway pattern ",
            "Deploy an iot gateway by using iot hub and iot edge ",
            "Configure iot edge certificates ",
            "Implement and configure offline support (including local storage) ",
            "Create a layered hierarchy of iot edge devices ",
          ],
        },
      ],
    },
    {
      title:
        "Module 4: IMPLEMENT BUSINESS INTEGRATION (5–10%) ",
      submodules: [
        {
          heading: "INTEGRATE WITH UPSTREAM AND DOWNSTREAM SYSTEMS",
          contents: [
            "Set up input and output connections ",
            "Set up iot hub routing for triggering workflows ",
            "Test data interface integration ",
            "Integrate third-party solutions ",
            "Configure workflows, including rules and alerts ",
          ],
        },
        {
          heading: "DEVELOP AZURE DIGITAL TWINS SOLUTIONS ",
          contents: [
            "Create Azure Digital Twins models and digital twins ",
            "Map iot device data to Azure Digital Twins models and relationships ",
            "Ingest iot device messages and translate messages to Azure Digital Twins ",
            "Configure routes and endpoints to trigger business logic and data processing ",
            "Query the Azure Digital Twins graph ",
            "Update properties on Azure Digital Twins entities in the graph ",
            "Monitor and troubleshoot Azure Digital Twins ",
          ],
        },
      ],
    },
    {
      title:
      "Module 5: PROCESS AND MANAGE DATA (15–20%) ",
    submodules: [
      {
        heading: "CONFIGURE MESSAGE ROUTING IN AZURE IOT HUB",
        contents: [
          "Implement message enrichment in iot Hub ",
          "Implement routing of iot device messages to endpoints ",
          "Define and test routing queries ",
          "Configure iot Hub as an Azure Event Grid source ",
          "Reconfigure the default Azure Event Hubs endpoint when there are multiple endpoints ",
        ],
      },
      {
        heading: "CONFIGURE STREAM PROCESSING OF IOT DATA ",
        contents: [   
          "Create Azure Stream Analytics for data and stream processing of iot data ",
          "Process and filter iot data by using Azure Functions ",
          "Write user-defined functions and aggregations in Stream Analytics ",
          "Consume Azure Machine Learning functions in Stream Analytics ",
          "Configure Stream Analytics outputs ",
        ],
      },
      {
        heading: "CREATE AZURE STREAM ANALYTICS QUERIES",
        contents: [
          "Write a Stream Analytics query that runs in iot Edge ",
          "Write a Stream Analytics query that runs in the cloud ",
        ],
      },
      {
        heading: "PROCESS REAL-TIME DATA BY USING AZURE TIME SERIES INSIGHTS ",
        contents: [
          "Create a Time Series Insights environment ",
          "Connect iot Hub and the Time Series Insights environment ",
          "Create a reference data set for a Time Series Insights environment by using the Azure portal ",
          "Implement Time Series Model hierarchies, types, and instance fields ",
          "Consume data by using Time Series Expression syntax ",
        ],
      }
    ],
  },
  {
    title:
    "Module 6: MONITOR, TROUBLESHOOT, AND OPTIMIZE IOT SOLUTIONS (15–20%) ",
  submodules: [
    {
      heading: "CONFIGURE HEALTH MONITORING ",
      contents: [
        "Configure metrics in iot Hub ",
        "Set up diagnostics logs for iot Hub ",
        "Configure iot Hub scaling (SKU/unit) programmatically ",
        "Query and visualize tracing by using Azure Monitor ",
        "Apply Azure Policy definitions for iot Hub ",
        "Gather iot Edge metrics ",
        "Retrieve diagnostics from iot Edge ",
      ],      
    },
    {
      heading: "TROUBLESHOOT DEVICE COMMUNICATION",
      contents: [   
        "Establish maintenance communication by using RDP or SSH ",
        "Establish maintenance communication by using Azure Device Streams ",
        "Verify device telemetry is received by iot Hub ",
        "Validate device twin properties, tags, and direct methods ",
        "Troubleshoot device disconnects and connects ",
        "Troubleshoot iot Edge devices ",
      ],
     },
     {
      heading: "ENSURE PERFORMANCE AND AVAILABILITY ",
      contents: [   
        "Identify and resolve bottlenecks ",
        "Calculate capacity requirements for each service ",
        "Troubleshoot message loss ",
        "Test manual failover ",
      ],
     },
    ],
  },
  {
    title:
    "Module 7: IMPLEMENT SECURITY (10–15%)",
  submodules: [
    {
      heading: "IMPLEMENT SECURITY FOR IOT DEVICES AND SERVICES ",
      contents: [
        "Implement device and gateway security ",
        "Ensure secure connections",
      ],      
    },
    {
      heading: "IMPLEMENT AZURE MICROSOFT DEFENDER FOR IOT ",
      contents: [   
        "Configure an Azure Microsoft Defender for an iot agent-based solution ",
        "Implement Defender-iot-micro-agents (security agents) ",
        "Configure built-in and custom alerts for iot Hub ",
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
