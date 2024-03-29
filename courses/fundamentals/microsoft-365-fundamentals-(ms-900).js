export default {
  title: "Microsoft 365 Fundamentals - 900",
  subtitle:
    "A master course designed for working professionals like you. Make your career soar with Loyal Bytes.",
  heroImage: "/images/course-page/azure-hero-image.png",
  heroBg: "/images/course-page/azure-hero-bg.png",
  courseDetail: {
    duration: "8 Hours",
    certification: "Microsoft Certification",
    batchInfo: "Weekdays batches available",
    level: "100",
    highlights: [
      {
        icon: "user",
        color: "orange",
        heading: "Duration",
        subheading: "8 Hours.",
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
      "Whether you’re a business user, administrator, or embarking on your technical career, this certification provides an opportunity to prove yourself as a cloud evangelist. In addition to validating your knowledge of Microsoft 365 capabilities, earning this certification makes it clear to your organization that you understand the benefits of adopting cloud services, the basics of a Software as a Service (SaaS) cloud model, and the value of implementing Microsoft 365 cloud services. It is recommended to have familiarity with common IT challenges, such as enterprise license management and support plan management.",
  },
  idealFor:
    "This exam is designed for candidates looking to demonstrate foundational-level knowledge on the considerations and benefits of adopting cloud services in general and the Software as a Service (SaaS) cloud model. Candidates should have knowledge of available options and benefits gained by implementing Microsoft 365 cloud service offerings. Candidates should have the requisite knowledge to recommend solutions that address common organizational IT challenges and to differentiate Microsoft 365 solutions from the competition in the market. Candidates should also have fundamental knowledge of offerings, optimizing licensing for cost effectiveness, and support options for organizations. Candidates should be able to differentiate between Microsoft’s services and products (Microsoft 365, Azure, and Dynamics 365).",

  learningObjectives:
    "Demonstrate foundational-level knowledge of cloud services, such as standard practices, considerations, and benefits. Show fluency in SaaS solutions; particularly Microsoft 365 offerings. Highlight familiarity with the Microsoft 365 cloud service options currently available.",
  modules: [
    {
      title: "Module 1:	DESCRIBE CLOUD CONCEPTS (10-15%)",
      submodules: [
        {
          heading:
            "9.1.1	DESCRIBE THE DIFFERENT TYPES OF CLOUD SERVICES AVAILABLE",
          contents: [
            "describe Microsoft’s IaaS, and PaaS offerings",
            "describe where Microsoft Azure and Dynamics 365 fit in to the Microsoft ecosystem",
            "cloud-based productivity solutions",
          ],
        },
        {
          heading:
            "9.1.2	DESCRIBE THE BENEFITS OF AND CONSIDERATIONS FOR USING A CLOUD SERVICE INSTEAD OF ONPREMISES SERVICES",
          contents: [
            "describe public, private, and hybrid scenarios",
            "identify scenarios when usage of cloud-based services is more beneficial than onpremises services",
            "compare costs of cloud-based services with on-premises services",
            "identify factors that drive organizations to move to the cloud",
          ],
        },
      ],
    },
    {
      title:
        "Module 2:	DESCRIBE CORE MICROSOFT 365 SERVICES AND CONCEPTS (30-35%)",
      submodules: [
        {
          heading: "9.2.1	IDENTIFY CORE MICROSOFT 365 CAPABILITIES",
          contents: [
            "productivity and teamwork (IM and chat, online meetings, email and calendaring, Office productivity apps, file storage and sharing, intranet and team sites, enterprise social, accessibility)",
            "business management (simplified management, business process automation, extensibility, business voice and phone systems, forms and workflow management, business intelligence, work management, customer scheduling and booking, mileage tracking and reporting)",
            "security and compliance (identity and access management, information protection and governance, threat protection, security management, insider risk management, compliance management, discover and respond)",
            "describe the capabilities of the Microsoft 365 Admin center and Microsoft 365 user portal",
          ],
        },
        {
          heading:
            "9.2.2	DESCRIBE OPTIONS FOR DEPLOYING AND SUPPORTING WINDOWS AND OFFICE",
          contents: [
            "describe the deployment and release models for Windows-as-a-Service (WaaS) including deployment rings",
            "describe the capabilities of Windows Virtual Desktop (WVD) and when it makes sense to implement WVD",
            "identify deployment and servicing methods for Microsoft 365 apps",
          ],
        },
        {
          heading: "9.2.3	DESCRIBE ANALYTICS CAPABILITIES IN MICROSOFT 365",
          contents: [
            "describe capabilities of Workplace Analytics and MyAnalytics",
            "describe the reports available in the Microsoft 365 Admin center and other admin centers",
          ],
        },
        {
          heading: "9.2.4	DESCRIBE MICROSOFT 365 COLLABORATION SOLUTIONS",
          contents: [
            "explain how collaboration solutions in Microsoft 365 can drive personal and organizational productivity",
            "describe the capabilities for extending Office and Microsoft Teams with Power Platform and third-party apps and services",
          ],
        },
      ],
    },
    {
      title:
        "Module 3: EXPLAIN SECURITY, COMPLIANCE, PRIVACY, AND TRUST IN MICROSOFT 365 (30-35%)",
      submodules: [
        {
          heading:
            "9.3.1	EXPLAIN ZERO-TRUST SECURITY PRINCIPLES FOR MICROSOFT 365",
          contents: [
            "identify key components that need to be protected within an organization’s cloud and on-premises infrastructure",
            "describe key security pillars of protection, including identity, documents, network, and devices",
          ],
        },
        {
          heading: "9.3.2	EXPLAIN UNIFIED ENDPOINT MANAGEMENT CONCEPTS",
          contents: [
            "explain device and application management",
            "describe bring you own device (BYOD), and application and device management",
            "explain the value of the Microsoft Endpoint Manager (MEM) including Microsoft Intune and System Center",
          ],
        },
        {
          heading: "9.3.3	EXPLAIN IDENTITY AND ACCESS MANAGEMENT CONCEPTS",
          contents: [
            "describe concepts of cloud identity, on-premises identity, and hybrid identity",
            "describe the purpose and value of implementing multi-factor authentication (MFA)",
            "describe the purpose and value of conditional access",
          ],
        },
        {
          heading: "9.3.4	EXPLAIN THREAT PROTECTION IN MICROSOFT 365",
          contents: [
            "identify how Microsoft 365 services address the most common current threats",
            "describe the concepts of Cloud App Security",
          ],
        },
        {
          heading:
            "9.3.5	DESCRIBE THE SERVICE TRUST PORTAL, MICROSOFT 365 SECURITY CENTER, AND COMPLIANCE MANAGER",
          contents: [
            "identify differences between the Service Trust portal, Security center, and Compliance Manager",
            "explain the trust relationship between Microsoft and service locations",
            "describe data protection options including data segregation",
            "describe how compliance scores are generated and how they can be used",
            "describe scenarios where knowing the compliance score benefits an organization",
            "describe the value and capabilities of the Service Trust portal",
            "explain insider risk management capabilities in the compliance score",
            "identify eDiscovery use cases and scenarios",
            "explain why privacy matters to Microsoft",
            "demonstrate the Security Center and Secure Score benefits and capabilities",
          ],
        },
        {
          heading:
            "9.3.6	DESCRIBE INFORMATION PROTECTION AND GOVERNANCE SOLUTIONS",
          contents: [
            "explain information protection and governance",
            "identify the types of sensitivity labels and when to use each type",
          ],
        },
      ],
    },
    {
      title: "Module 4: DESCRIBE MICROSOFT 365 PRICING AND SUPPORT (20-25%)",
      submodules: [
        {
          heading: "9.4.1	PLAN, PREDICT, AND COMPARE PRICING",
          contents: [
            "describe the Cloud Solution Provider (CSP) pricing model for Windows and Microsoft cloud services",
            "explain available billing and bill management options including billing frequency and methods of payment",
            "optimize costs based on licensing options",
          ],
        },
        {
          heading: "9.4.2	IDENTIFY LICENSING OPTIONS AVAILABLE IN MICROSOFT 365",
          contents: [
            "describe the available licensing and management options for Microsoft 365",
            "describe additional capabilities available when a customer purchase Azure Active Directory Premium P1, Azure Active Directory Premium P2, and Azure AD Free",
          ],
        },
        {
          heading: "9.4.3	DESCRIBE THE SERVICE LIFECYCLE IN MICROSOFT 365",
          contents: [
            "describe private, public preview, and General Availability (GA) options",
            "describe the correlation between lifecycle options and pricing",
            "describe use cases and capabilities for the Microsoft 365 Roadmap portal",
          ],
        },
        {
          heading: "9.4.4	DESCRIBE SUPPORT OFFERINGS FOR MICROSOFT 365 SERVICES",
          contents: [
            "describe how to create a support request for Microsoft 365 services",
            "describe service level agreements (SLAs) concepts, use cases for SLAs, SLA tiers, roles, and responsibilities",
            "determine service health status by using the Microsoft 365 dashboard or the tenant dashboard",
            "describe how organizations can communicate with Microsoft by using UserVoice",
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
