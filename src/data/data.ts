import { Badge } from 'braid-design-system';
import type { ComponentProps } from 'react';

interface ProfessionalExperience {
  employer: string;
  location: string;
  position: string;
  tenure: string;
  rolesAndAchievements: string[];
}

interface AcademicBackground {
  institution: string;
  location: string;
  qualification: string;
  hrefForCredential?: string;
  tenure: string;
  rolesAndAchievements: string[];
}

interface ProfessionalCredentials {
  title: string;
  awardingInstitution: string;
  credentialId?: string;
  hrefForCredential?: string;
  expiryDate?: string;
}

interface Certifications extends ProfessionalCredentials {
  type: 'Academic' | 'Professional' | 'Skill' | 'Other';
  scores?: string[];
}

interface VolunteeringExperience {
  organization: string;
  location: string;
  position: string;
  tenure: string;
  rolesAndAchievements: string[];
}

interface Skills {
  category: string;
  skills: string[];
  badgeTone: ComponentProps<typeof Badge>['tone'];
}

export const professionalExperiences: ProfessionalExperience[] = [
  {
    employer: 'JobStreet.com Shared Services Sdn. Bhd.',
    location: 'Kuala Lumpur, Malaysia (Hybrid)',
    position: 'Associate Software Engineer',
    tenure: '22nd August 2022 – Present',
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
    tenure: '7th February – 26th July 2022 ',
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
  {
    employer: 'PETRONAS Carigali Sdn. Bhd.',
    location: 'Miri, Malaysia',
    position: 'Industrial Trainee (Instrumentation Engineering)',
    tenure: 'December 2019 – February 2020 ',
    rolesAndAchievements: [
      'Conducted reaffirmation of IPF (Instrumented Protective Function) studies and recommendations made by in-house consultants reportable to section TP (Technical Professional)',
      'Conducted the conceptual study for IPF recommendations for 1 instrument at the Temana-B asset and presented a summary of the study to department executives',
      'Collaboratively reassessed the Safety Impact Level (SIL) matrix for a chemical injection tank level IPF at an in-field asset with on-site operators, consultants, executive and department manager',
    ],
  },
];

export const academicBackgrounds: AcademicBackground[] = [
  {
    institution: 'Swinburne University of Technology Sarawak Campus',
    location: 'Kuching, Malaysia',
    qualification: 'BEng (Hons) Robotics and Mechatronics',
    tenure: 'February 2017 – March 2021',
    hrefForCredential: 'https://app.box.com/s/uykc33r78a1opzcbte8nl3yfp5s1rl2j',
    rolesAndAchievements: [
      'CGPA: 3.4.0/4.00',
      'Final Year Honours Project: Portable Multi-Position Vibration Data Acquisition (DAQ) Device',
      'Extracurriculars: Vice President - Engineers Australia Swinburne Sarawak Student Society',
    ],
  },
];

export const professionalCredentials: ProfessionalCredentials[] = [
  {
    awardingInstitution: 'Board of Engineers Malaysia (BEM)',
    title: 'Graduate Engineer, Mechatronics',
    credentialId: 'G1195701A',
    hrefForCredential:
      'https://engineer.org.my/public/Engineers/Directory?registrationNo=G1195701A',
  },
];

export const certifications: Certifications[] = [
  {
    awardingInstitution: 'EF SET',
    title: 'EF SET Certification - English',
    hrefForCredential: 'https://cert.efset.org/en/c43tmF',
    type: 'Skill',
    scores: [
      'CEFR Rating: C2 Proficient',
      'Reading: 78/100',
      'Listening: 90/100',
      'Writing: 79/100',
      'Speaking: 84/100',
    ],
  },
  {
    awardingInstitution: 'Sarawak Skills Development Centre (PPKS)',
    title: 'Expert Craftsman Programme (Mechatronics)',
    hrefForCredential: 'https://app.box.com/s/b8p99fjz547o5zqfxgfg52bvg8l2m8ds',
    type: 'Skill',
    scores: ['Theory: 94/100', 'Practical: 96/100'],
  },
];

export const volunteeringExperiences: VolunteeringExperience[] = [
  {
    organization: 'Engineers Australia Swinburne Sarawak Student Society',
    location: 'Kuching, Malaysia',
    position: 'Event Volunteer, Frontier Engineers Australia',
    tenure: 'April - May 2019',
    rolesAndAchievements: [
      'Promoted the organizing of a full-day networking masterclass event under the Engineers Australia Malaysia Chapter Frontier program over 14 days before the event takes place',
      'Facilitated the registration of 20+ EA student members’ interest to partake in the Frontier event',
      'Facilitated the application for student membership the Institution of Engineers, Australia of 20+ eligible students enrolled at Swinburne Sarawak',
    ],
  },
];
export const categorisedSkills: Skills[] = [
  {
    category: 'Technical',
    skills: [
      'TypeScript',
      'JavaScript',
      'GraphQL',
      'Node.js',
      'Python',
      'React',
      'React Testing Library',
      'Jest',
      'C++',
      'C#',
      'AWS',
      'HTML',
      'CSS',
      'Cypress',
      'Datadog',
      'Git',
      'CI/CD',
    ],
    badgeTone: 'positive',
  },
  {
    category: 'Languages',
    skills: ['English ● CEFR C2 Proficient', 'Bahasa Malaysia ● Native'],
    badgeTone: 'promote',
  },
];
