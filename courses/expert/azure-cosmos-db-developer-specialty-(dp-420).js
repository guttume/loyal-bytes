  export default {
  title: "Azure Cosmos DB Developer Specialty DP 420",
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
      "Candidates for the Azure Cosmos DB Developer Specialty certification should have subject matter expertise designing, implementing, and monitoring cloud-native applications that store and manage data. Candidates for this exam must have solid knowledge and experience developing apps for Azure and working with Azure Cosmos DB database technologies. They should be proficient at developing applications by using the Core (SQL) API and SDKs, writing efficient queries, and creating appropriate index policies, provisioning, and managing resources in Azure, and creating server-side objects with JavaScript. They should be able to interpret JSON, read C# or Java code, and use PowerShell.",
  },
  idealFor:
    "Responsibilities for this role include designing and implementing data models and data distribution, loading data into an Azure Cosmos DB database, and optimizing and maintaining the solution. These professionals integrate the solution with other Azure services. They also design, implement, and monitor solutions that consider se	curity, availability, resilience, and performance requirements. Candidates for this certification must have solid knowledge and experience developing apps for Azure and working with Azure Cosmos DB database technologies. They should be proficient at developing applications by using the Core (SQL) API and SDKs, writing efficient queries, and creating appropriate index policies, provisioning, and managing resources in Azure, and creating server-side objects with JavaScript. They should be able to interpret JSON, read C# or Java code, and use PowerShell.",

  learningObjectives:
    "Create beautiful web flow. Learn how to migrate and host on Microsoft Azure",
  modules: [
    {
      title:
        "Module 1: DESIGN AND IMPLEMENT DATA MODELS (35–40%)",
      submodules: [
        {
          heading: "DESIGN AND IMPLEMENT A NON-RELATIONAL DATA MODEL FOR AZURE COSMOS DB CORE API",
          contents: [
            "Develop a design by storing multiple entity types in the same container",
            "Develop a design by storing multiple related entities in the same document",
            "Develop a model that denormalizes data across documents",
            "Develop a design by referencing between documents",
            "Identify primary and unique keys",
            "Identify data and associated access patterns",
            "Specify a default ttl on a container for a transactional store",
          ],
        },
        {
          heading: "DESIGN A DATA PARTITIONING STRATEGY FOR AZURE COSMOS DB CORE API",
          contents: [
            "Choose a partition strategy based on a specific workload",
            "Choose a partition key",
            "Plan for transactions when choosing a partition key",
            "Evaluate the cost of using a cross-partition query",
            "Calculate and evaluate data distribution based on partition key selection",
            "Calculate and evaluate throughput distribution based on partition key selection",
            "Construct and implement a synthetic partition key",
            "Design partitioning for workloads that require multiple partition keys",
          ],
        },
        {
          heading: "PLAN AND IMPLEMENT SIZING AND SCALING FOR A DATABASE CREATED WITH AZURE COSMOS DB",
          contents: [
            "Evaluate the throughput and data storage requirements for a specific workload",
            "Choose between serverless and provisioned models",
            "Choose when to use database-level provisioned throughput",
            "Design for granular scale units and resource governance",
            "Evaluate the cost of the global distribution of data",
            "Configure throughput for azure cosmos db by using the azure portal",
          ],
        },
        {
          heading: "IMPLEMENT CLIENT CONNECTIVITY OPTIONS IN THE AZURE COSMOS DB SDK",
          contents: [
            "Choose a connectivity mode (gateway versus direct)",
            "Implement a connectivity mode",
            "Create a connection to a database",
            "Enable offline development by using the azure cosmos db emulator",
            "Handle connection errors",
            "Implement a singleton for the client",
            "Specify a region for global distribution",
            "Configure client-side threading and parallelism options",
            "Enable sdk logging",
          ],
        },
        {
          heading: "IMPLEMENT DATA ACCESS BY USING THE AZURE COSMOS DB SQL LANGUAGE",
          contents: [
            "Choose when to use a point operation versus a query operation",
            "Implement a point operation that creates, updates, and deletes documents",
            "Implement an update by using a patch operation",
            "Manage multi-document transactions using sdk transactional batch",
            "Perform a multi-document load using sdk bulk",
            "Implement optimistic concurrency control using etags",
            "Implement session consistency by using session tokens",
            "Implement a query operation that includes pagination",
            "Implement a query operation by using a continuation token",
            "Handle transient errors and 429s",
            "Specify ttl for a document",
            "Retrieve and use query metrics", 
          ],
        },
        {
          heading: "IMPLEMENT SERVER-SIDE PROGRAMMING IN AZURE COSMOS DB CORE API BY USING JAVASCRIPT",
          contents: [
            "Write, deploy, and call a stored procedure",
            "Design stored procedures to work with multiple items transactionally",
            "Implement triggers",
            "Implement a user-defined function",
          ],
        },
      ],
    },
    {
      title:
        "Module 2: DESIGN AND IMPLEMENT DATA DISTRIBUTION (5–10%)",
      submodules: [
        {
          heading: "DESIGN AND IMPLEMENT A REPLICATION STRATEGY FOR AZURE COSMOS DB",
          contents: [
            "Choose when to distribute data",
            "Define automatic failover policies for regional failure for azure cosmos db core api",
            "Perform manual failovers to move single master write regions",
            "Choose a consistency model",
            "Identify use cases for different consistency models",
            "Evaluate the impact of consistency model choices on availability and associated ru cost",
            "Evaluate the impact of consistency model choices on performance and latency",
            "Specify application connections to replicated data",
          ],
        },
        {
          heading: "DESIGN AND IMPLEMENT MULTI-REGION WRITE",
          contents: [
            "Choose when to use multi-region write",
            "Implement multi-region write",
            "Implement a custom conflict resolution policy for azure cosmos db core api",
          ],
        },
      ],
    },
    {
      title:
        "Module 3: INTEGRATE AN AZURE COSMOS DB SOLUTION (5–10%)",
      submodules: [
        {
          heading: "ENABLE AZURE COSMOS DB ANALYTICAL WORKLOADS",
          contents: [
            "Enable Azure Synapse Link",
            "Choose between Azure Synapse Link and Spark Connector",
            "Enable the analytical store on a container",
            "Enable a connection to an analytical store and query from Azure Synapse Spark or Azure Synapse SQL",
            "Perform a query against the transactional store from Spark",
            "Write data back to the transactional store from Spark",
          ],
        },
        {                                   
          heading: "IMPLEMENT SOLUTIONS ACROSS SERVICES",
          contents: [
            "Integrate events with other applications by using Azure Functions and Azure Event Hubs",
            "Denormalize data by using Change Feed and Azure Functions",
            "Enforce referential integrity by using Change Feed and Azure Functions",
            "Aggregate data by using Change Feed and Azure Functions, including reporting",
            "Archive data by using Change Feed and Azure Functions",
            "Implement Azure Cognitive Search for an Azure Cosmos DB solution",
          ],
        },
      ],
    },
    {
      title:
        "Module 4: OPTIMIZE AN AZURE COSMOS DB SOLUTION (15–20%)",
      submodules: [
        {
          heading: "OPTIMIZE QUERY PERFORMANCE IN AZURE COSMOS DB CORE API",
          contents: [
            "Adjust indexes on the database",
            "Calculate the cost of the query",
            "Retrieve request unit cost of a point operation or query",
            "Implement azure cosmos db integrated cache",
            
          ],
        },
        {
          heading: "DESIGN AND IMPLEMENT CHANGE FEEDS FOR AN AZURE COSMOS DB CORE API",
          contents: [
            "Develop an Azure Functions trigger to process a change feed",
            "Consume a change feed from within an application by using the SDK",
            "Manage the number of change feed instances by using the change feed estimator",
            "Implement denormalization by using a change feed",
            "Implement referential enforcement by using a change feed",
            "Implement aggregation persistence by using a change feed",
            "Implement data archiving by using a change feed",
          ],
        },
        {
          heading: "9.4.3	DEFINE AND IMPLEMENT AN INDEXING STRATEGY FOR AN AZURE COSMOS DB CORE API",
          contents: [
            "Choose when to use a read-heavy versus write-heavy index strategy",
            "Choose an appropriate index type",
            "Configure a custom indexing policy by using the azure portal",
            "Implement a composite index",
            "Optimize index performance", 
          ],
        },
      ],
    },
    {
      title:
      "Module 5: MAINTAIN AN AZURE COSMOS DB SOLUTION (25–30%)",
    submodules: [
      {
        heading: "MONITOR AND TROUBLESHOOT AN AZURE COSMOS DB SOLUTION",
        contents: [
          "Evaluate response status code and failure metrics",
          "Monitor metrics for normalized throughput usage by using azure monitor",
          "Monitor server-side latency metrics by using azure monitor",
          "Monitor data replication in relation to latency and availability",
          "Configure azure monitor alerts for azure cosmos db",
          "Implement and query azure cosmos db logs",
          "Monitor throughput across partitions",
          "Monitor distribution of data across partitions",
          "Monitor security by using logging and auditing",
        ],
      },
      {
        heading: "IMPLEMENT BACKUP AND RESTORE FOR AN AZURE COSMOS DB SOLUTION",
        contents: [   
          "Choose between periodic and continuous backup",
          "Configure periodic backup",
          "Configure continuous backup and recovery",
          "Locate a recovery point for a point-in-time recovery",
          "Recover a database or container from a recovery point",
        ],
      },
      {
        heading: "IMPLEMENT DATA MOVEMENT FOR AN AZURE COSMOS DB SOLUTION",
        contents: [   
          "Choose a data movement strategy",
          "Move data by using client sdk bulk operations",
          "Move data by using azure data factory and azure synapse pipelines",
          "Move data by using a kafka connector",
          "Move data by using azure stream analytics",
          "Move data by using the azure cosmos db spark connector",
        ],
      },
      {
        heading: "IMPLEMENT A DEVOPS PROCESS FOR AN AZURE COSMOS DB SOLUTION",
        contents: [   
          "Choose when to use declarative versus imperative operations",
          "Provision and manage azure cosmos db resources by using azure resource manager templates (arm templates)",
          "Migrate between standard and auto scale throughput by using powershell or azure cli",
          "Initiate a regional failover by using powershell or azure cli",
          "Maintain index policies in production by using arm templates",
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
