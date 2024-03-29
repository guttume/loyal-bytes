export default {
  title: "Azure Administrator Associate AZ - 104",
  subtitle:
    "A master course designed for working professionals like you. Make your career soar with Loyal Bytes.",
  heroImage: "/images/course-page/azure-hero-image.png",
  heroBg: "/images/course-page/azure-hero-bg.png",
  courseDetail: {
    duration: "40 Hours",
    certification: "Microsoft Certification",
    batchInfo: "Weekdays batches available",
    level: "100",
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
      "Candidates for the Azure Data Scientist Associate certification should have subject matter expertise applying data science and machine learning to implement and run machine learning workloads on Azure. A candidate for this certification should have knowledge and experience in data science and using Azure Machine Learning and Azure Databricks.",
  },
  idealFor:
    "Candidates for the Azure Jo Associate certification should have subject matter expertise applying data science and machine learning to implement and run machine learning workloads on Azure. Responsibilities for this role include planning and creating a suitable working environment for data science workloads on Azure. You run data experiments and train predictive models. In addition, you manage, optimize, and deploy machine learning models into production. A candidate for this certification should have knowledge and experience in data science and using Azure Machine Learning and Azure Databricks.",

  learningObjectives:
    "Responsibilities for this role include planning and creating a suitable working environment for data science workloads on Azure. You run data experiments and train predictive models. In addition, you manage, optimize, and deploy machine learning models into production.",
  modules: [
    {
      title: "Module 1:	MANAGE AZURE RESOURCES FOR MACHINE LEARNING (25-30%)",
      submodules: [
        {
          heading: "9.1.1	CREATE AN AZURE MACHINE LEARNING WORKSPACE",
          contents: [
            "create an Azure Machine Learning workspace",
            "configure workspace settings",
            "manage a workspace by using Azure Machine Learning studio",
          ],
        },
        {
          heading: "9.1.2	MANAGE DATA IN AN AZURE MACHINE LEARNING WORKSPACE",
          contents: [
            "select Azure storage resources",
            "register and maintain datastores",
            "create and manage datasets",
          ],
        },
        {
          heading:
            "9.1.3	MANAGE COMPUTE FOR EXPERIMENTS IN AZURE MACHINE LEARNING",
          contents: [
            "determine the appropriate compute specifications for a training workload",
            "create compute targets for experiments and training",
            "configure Attached Compute resources including Azure Databricks",
            "monitor compute utilization",
          ],
        },
        {
          heading:
            "9.1.4	IMPLEMENT SECURITY AND ACCESS CONTROL IN AZURE MACHINE LEARNING",
          contents: [
            "determine access requirements and map requirements to built-in roles",
            "create custom roles",
            "manage role membership",
            "manage credentials by using Azure Key Vault",
          ],
        },
        {
          heading:
            "9.1.5	SET UP AN AZURE MACHINE LEARNING DEVELOPMENT ENVIRONMENT",
          contents: [
            "create compute instances",
            "share compute instances",
            "access Azure Machine Learning workspaces from other development environments",
          ],
        },
        {
          heading: "9.1.6	SET UP AN AZURE DATABRICKS WORKSPACE",
          contents: [
            "create an Azure Databricks workspace",
            "create an Azure Databricks cluster",
            "create and run notebooks in Azure Databricks",
            "link and Azure Databricks workspace to an Azure Machine Learning workspace",
          ],
        },
      ],
    },
    {
      title: "Module 2:	RUN EXPERIMENTS AND TRAIN MODELS (20-25%)",
      submodules: [
        {
          heading:
            "9.2.1	CREATE MODELS BY USING THE AZURE MACHINE LEARNING DESIGNER",
          contents: [
            "create a training pipeline by using Azure Machine Learning designer",
            "ingest data in a designer pipeline",
            "use designer modules to define a pipeline data flow",
            "use custom code modules in designer",
          ],
        },
        {
          heading: "9.2.2	RUN MODEL TRAINING SCRIPTS",
          contents: [
            "create and run an experiment by using the Azure Machine Learning SDK",
            "configure run settings for a script",
            "consume data from a dataset in an experiment by using the Azure Machine Learning SDK",
            "run a training script on Azure Databricks compute",
            "run code to train a model in an Azure Databricks notebook",
          ],
        },
        {
          heading: "9.2.3	GENERATE METRICS FROM AN EXPERIMENT RUN",
          contents: [
            "log metrics from an experiment run",
            "retrieve and view experiment outputs",
            "use logs to troubleshoot experiment run errors",
            "use MLflow to track experiments",
            "track experiments running in Azure Databricks",
          ],
        },
        {
          heading: "9.2.4	USE AUTOMATED MACHINE LEAR",
          contents: [
            "use the Automated ML interface in Azure Machine Learning studio",
            "use Automated ML from the A4",
            "select the algorithms to be searched",
            "define a primary metric",
            "get data for an Automated ML run",
            "retrieve the best model            ",
          ],
        },
        {
          heading: "9.2.5	TUNE HYPERPARAMETERS WITH AZURE MACHINE LEARNING",
          contents: [
            "select a sampling method",
            "define the search space",
            "define the primary metric",
            "define early termination options",
            "find the model that has optimal hyperparameter values",
          ],
        },
      ],
    },
    {
      title:
        "Module 3: DEPLOY AND OPERATIONALIZE MACHINE LEARNING SOLUTIONS (35-40%)",
      submodules: [
        {
          heading: "9.3.1	SELECT COMPUTE FOR MODEL DEPLOYMENT",
          contents: [
            "consider security for deployed services",
            "evaluate compute options for deployment",
          ],
        },
        {
          heading: "9.3.2	DEPLOY A MODEL AS A SERVICE",
          contents: [
            "configure deployment settings",
            "deploy a registered model",
            "deploy a model trained in Azure Databricks to an Azure Machine Learning endpoint",
            "consume a deployed service",
            "troubleshoot deployment container issues",
          ],
        },
        {
          heading: "9.3.3	MANAGE MODELS IN AZURE MACHINE LEARNING",
          contents: [
            "register a trained model",
            "monitor model usage",
            "monitor data drift",
          ],
        },
        {
          heading:
            "9.3.4	CREATE AN AZURE MACHINE LEARNING PIPELINE FOR BATCH INFERENCING",
          contents: [
            "configure a ParallelRunStep",
            "configure compute for a batch inferencing pipeline",
            "publish a batch inferencing pipeline",
            "run a batch inferencing pipeline and obtain outputs",
            "obtain outputs from a ParallelRunStep",
          ],
        },
        {
          heading:
            "9.3.5	PUBLISH AN AZURE MACHINE LEARNING DESIGNER PIPELINE AS A WEB SERVICE",
          contents: [
            "create a target compute resource",
            "configure an inference pipeline",
            "consume a deployed endpoint",
          ],
        },
        {
          heading:
            "9.3.6	IMPLEMENT PIPELINES BY USING THE AZURE MACHINE LEARNING SDK",
          contents: [
            "create a pipeline",
            "pass data between steps in a pipeline",
            "run a pipeline",
            "monitor pipeline runs",
          ],
        },
        {
          heading: "9.3.7	APPLY ML OPS PRACTICES",
          contents: [
            "trigger an Azure Machine Learning pipeline from Azure DevOps",
            "automate model retraining based on new data additions or data changes",
            "refactor notebooks into scripts",
            "implement source control for scripts",
          ],
        },
      ],
    },
    {
      title: "Module 4: IMPLEMENT RESPONSIBLE MACHINE LEARNING (5-10%)",
      submodules: [
        {
          heading: "9.4.1	USE MODEL EXPLAINERS TO INTERPRET MODELS",
          contents: [
            "select a model interpreter",
            "generate feature importance data",
          ],
        },
        {
          heading: "9.4.2	DESCRIBE FAIRNESS CONSIDERATIONS FOR MODELS",
          contents: [
            "evaluate model fairness based on prediction disparity",
            "mitigate model unfairness",
          ],
        },
        {
          heading: "9.4.3	DESCRIBE PRIVACY CONSIDERATIONS FOR DATA",
          contents: [
            "describe principles of differential privacy",
            "specify acceptable levels of noise in data and the effects on privacy",
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
