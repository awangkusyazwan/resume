interface ProfessionalExperience {
  employer: string;
  location: string;
  position: string;
  duration: string;
  rolesAndAchievements: string[];
}

export const professionalExperiences: ProfessionalExperience[] = [
  {
    employer: 'JobStreet.com Shared Services Sdn. Bhd.',
    location: 'Kuala Lumpur, Malaysia (Hybrid)',
    position: 'Associate Software Engineer',
    duration: '22nd August 2022 – Present',
    rolesAndAchievements: [
      'Independently author or collaboratively co-author sprint-planned or ad-hoc bug fixes and feature enhancements with supplementing test cases derived from bug bashing, tech discovery or bug reporting in a DevOps environment through CI/CD pipelines releases as major, minor or patch releases via semantic versioning',
      'Maintain codebase resilience through vulnerability issue remediation for team-owned systems as a sprint-rotating resilience champion over on average once every 4 sprints',
      'Contribute in sprint agile ceremonies by estimating ticket complexity in backlog grooming sessions, run standup and retrospective sessions, and collaboratively plan for fortnightly sprints',
      'Improve DevOps processes within the team by optimising CI/CD pipeline and maintaining dependencies on team-owned systems, in accordance with org-adopted requests for comments (RFCs) and standards',
      'Continuously uplift competencies and skills in various areas of front-end biased full-stack development technologies and associated stacks e.g., React, TypeScript, AWS, GraphQL, HTML, CSS, and testing libraries',
      'Improved system monitoring and observability while optimising cost base by implementing and testing Datadog RUM in codebase, resulting in increased system resilience and enhanced client-side error logging',
      'Directly collaborated with 5 senior engineers, 2 delivery leads, and 2 SEO specialists on delivering URL redirection for legacy JobsDB URLs on web, collectively resulting in 95%+ passing of SEO user acceptance test cases, improved SEO rankings for unified APAC URLs without compromising conversion funnels from legacy endpoints and flattened the redirection hops for legacy endpoints',
      'Directly collaborated with 3 senior engineers, 1 UX designer and 2 product managers on the New Visual Language (NVL) site refresh for candidate domains in the Search Engine Results Page (SERP) and Saved Searches static page to improve visual appeal in accordance with APAC platform unification OKR',
      'Collaborated with a senior engineer in migrating a cookie-based authentication workflow to a JWT-based session authentication flow, resulting in a more secure authentication for domain-shared GraphQL-powered API',
      'Contributed to the Graduate program by thoroughly screening through 1-way interview responses against a set of criteria for ~25 applicants per week over 3 occasions of Graduate program hiring for 2 cohorts based in ANZ and Asia, resulting in higher benchmark for candidate talent pool quality',
    ],
  },
  {
    employer: 'Carrier Malaysia Sdn. Bhd.',
    location: 'Kuching, Malaysia',
    position: 'Engineer, Service Sales',
    duration: '7th February – 26th July 2022 ',
    rolesAndAchievements: [
      'Engaged with 30+ key contacts from 25+ accounts including 1 new account in the Sarawak market for growth of opportunities, revenue, and CRM of the Service and Aftermarket lifecycle of commercial HVAC segment and recapture of lapsed service renewals with prospective and existing customers with near-expiry warranties',
      'Adhered and ensured strict compliance to policies outlining employer-mandated Environmental, Health & Safety (EH&S) policies as outlined under Corporate Policy Manual - Section 2 (EH&S) resulting in zero Total Recordable Incidence Rate (TRIR) and Lost Workday Incidence Rate (LWIR) YTD',
      'Conducted costing exercise and supplier/vendor liaison to ensure smooth, effective, stakeholder-compliant and rapid delivery of services to all customers using Carrier expertise as Sole Principal Organization providing OEM-mandated Aftermarket services for Carrier CHVAC equipment and plant',
      'Monitored 25+ customer ageing accounts to ensure timely payment for settling of current and overdue account balance as per End-of-Pay-Period Statement of Account (SoA) subject to policies enforced by the Company-Customer settlement plans and remittance requirements',
      'Facilitated instances of urgent complaints of HVAC plant breakdowns or system failures with an average of 2 days for satisfactory provisioning of emergency turnarounds, aligned with Customer demands over period of mitigation',
      'Updated an average of 5+ active pipelines per week regularly on SFDC to ensure seamless CRM and per-account management',
      'Assisted in organising, and participated in, service seminars/ training programs with Customers, new hires (i.e., interns) and work with training groups within the wider organization',
    ],
  },
];

export default professionalExperiences;
