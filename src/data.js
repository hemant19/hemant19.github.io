export const portfolioData = {
  personalInfo: {
    name: "Hemant Bhoyar",
    title: "Senior Software Engineer",
    subtitle: "Tech Lead • Distributed Systems & Data Pipelines",
    tagline: "Building core query infrastructure and high-throughput data platforms at scale.",
    location: "Bangalore, India",
    email: "hybhoyar@gmail.com",
    phone: "+91 8793714424",
    linkedin: "https://www.linkedin.com/in/hemant-bhoyar/",
    github: "https://github.com/hemant19",
    resumeUrl: "/resume.pdf",
    avatarUrl: "/headshot.jpg",
  },
  
  systemStats: [
    { label: "Peak Event Flow", value: "1.5M/s", description: "Flink & Kafka pipeline at Booking.com" },
    { label: "Query Result Traffic", value: "100K QPS", description: "Google Search platform infrastructure" },
    { label: "Search Latency SLA", value: "10ms", description: "Query interpretation & aggregation" },
    { label: "User Scale", value: "6M+", description: "BarclaycardUS banking platform features" },
  ],

  experience: [
    {
      company: "Google",
      division: "Search Platform",
      role: "Senior Software Engineer & Tech Lead",
      location: "Bangalore, India",
      duration: "July 2024 – Present",
      isCurrent: true,
      summary: "Working as a tech lead on the Search Qualifications team. We build and maintain all the tools to qualify and enable faster development and release of Google's search platform and features.",
      details: [
        "Tech lead for the Query Result Service (QRS), a core distributed component responsible for interpreting search queries, aggregating data from hundreds of specialized backends, and serving downstream consumers.",
        "Engineering infrastructure that powers Google's AI-mode search, enabling generative AI summarization and newer AI-based search features under tight latency SLAs.",
        "Leading a team of 6 engineers to maintain high availability and robust regression testing for search release candidates.",
        "Optimizing data movement and microservice choreography to sustain approximately 100K QPS production load with mean latency profiles of 10ms."
      ],
      highlights: [
        { label: "Team Size", value: "6 Engineers" },
        { label: "Latency", value: "10ms mean" },
        { label: "Load", value: "100K QPS" },
        { label: "Key Tech", value: "Google Dataflow" }
      ],
      techStack: ["Java", "Google Dataflow", "Distributed Systems", "C++", "Application Security", "gRPC", "Microservices"]
    },
    {
      company: "Atlassian",
      division: "Jira Platform",
      role: "Senior Software Engineer & Tech Lead",
      location: "Bangalore, India",
      duration: "June 2020 – June 2024",
      isCurrent: false,
      summary: "Worked as a tech lead on the Jira Migrations team. Built and maintained tools to migrate enterprise-scale customers from server/on-premise installations to Atlassian Cloud.",
      details: [
        "Led cross-team engineering efforts to unblock critical path migration issues for Fortune 500 enterprise customers migrating terabytes of relational data and attachments.",
        "Coordinated with product owners and security compliance teams to develop bespoke, zero-downtime data migration solutions.",
        "Successfully spearheaded migrations for major enterprise clients including Splunk, Wawanessa, and Commonwealth Bank of Australia (CBA).",
        "Refactored migration pipeline microservices to increase reliability, handling massive scale while maintaining transactional consistency."
      ],
      highlights: [
        { label: "Role", value: "Tech Lead" },
        { label: "Clients", value: "Splunk, CBA" },
        { label: "Focus", value: "Server to Cloud" },
        { label: "Impact", value: "Zero Downtime" }
      ],
      techStack: ["Java", "Spring Framework", "Kubernetes", "Docker", "MySQL", "Maven", "Git", "REST APIs"]
    },
    {
      company: "Booking.com",
      division: "Core Platform & Security",
      role: "Software Developer",
      location: "Amsterdam, Netherlands",
      duration: "August 2018 – June 2020",
      isCurrent: false,
      summary: "Responsible for building, developing, and maintaining the Security Data Pipeline, a distributed, stateful pipeline handling near real-time attack detection.",
      details: [
        "Designed and maintained the Security Data Pipeline: a Java-based distributed stateful application deployed on Google Kubernetes Engine (GKE) leveraging Apache Flink and Kafka.",
        "Built a custom near real-time parsing, enrichment, and attack detection engine capable of processing 1,500,000 events/second at peak (average load of 250,000 events/second).",
        "Rebuilt the request throttling and rate limiting service (originally written in legacy Perl) as a high-performance Java microservice.",
        "Integrated Cassandra as a distributed counter backend to sustain an average load of 40,000 requests/second, peaking up to 200,000 requests/second during active DDoS attacks."
      ],
      highlights: [
        { label: "Pipeline Peak", value: "1.5M events/s" },
        { label: "Throttler Peak", value: "200K req/s" },
        { label: "Infrastructure", value: "Flink + GKE" },
        { label: "Database", value: "Cassandra" }
      ],
      techStack: ["Java", "Apache Flink", "Kafka", "Kubernetes", "Docker", "Cassandra", "ELK Stack", "Perl", "TDD"]
    },
    {
      company: "Barclays",
      division: "Technology Center India",
      role: "Software Developer",
      location: "Pune, India",
      duration: "June 2015 – July 2018",
      isCurrent: false,
      summary: "Developed features on the BarclaycardUS web platform, working closely with business stakeholders to ship core rewards and loyalty program features.",
      details: [
        "Developed credit card rewards features for major co-branded retail cards, including American Airlines, LLBean, and JetBlue cards.",
        "Designed and implemented high-volume Java Web APIs using the Spring Framework, integrating with legacy banking mainframes.",
        "Worked full-stack, developing UI features in React.js for BarclaycardUS which served an active user base of 6 million customers.",
        "Supported a scale of 50,000 to 80,000 unique daily logins while maintaining strict financial compliance and application security."
      ],
      highlights: [
        { label: "User Base", value: "6M Users" },
        { label: "Daily Logins", value: "80K" },
        { label: "Domain", value: "Fintech / Rewards" },
        { label: "Frontend", value: "ReactJS" }
      ],
      techStack: ["Java", "Spring Framework", "ReactJS", "Web API Design", "Maven", "MySQL", "Git"]
    }
  ],

  skills: {
    languages: ["Java", "C++", "Perl", "SQL", "HTML/CSS", "JavaScript (React)"],
    distributedSystems: ["Apache Flink", "Kafka", "Google Dataflow", "Microservices", "API Gateway"],
    infrastructure: ["Kubernetes", "Docker", "Google Kubernetes Engine (GKE)", "Cassandra", "MySQL", "ELK Stack", "Maven", "Git"],
    methodologies: ["Data Structures & Algorithms", "Web API Design", "Test Driven Development (TDD)", "Application Security", "Agile & Scrum"]
  },

  education: [
    {
      institution: "Visvesvaraya National Institute of Technology (VNIT)",
      location: "Nagpur, India",
      degree: "B.Tech — Computer Science & Engineering",
      duration: "June 2011 – April 2015",
      grade: "GPA 7.7 / 10",
      description: "Degree in Computer Science from a premier national institute (VNIT Nagpur). Deep focus on Algorithms, Operating Systems, Database Management, and Compiler Design."
    },
    {
      institution: "Dr. D. Y. Patil ACS College",
      location: "Pune, India",
      degree: "HSC (High School Certificate)",
      duration: "June 2009 – April 2011",
      grade: "Score: 86.5%",
      description: "Completed Higher Secondary Certificate with major focus on Physics, Chemistry, and Mathematics."
    }
  ]
};
