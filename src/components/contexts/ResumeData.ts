import type { Badge } from 'braid-design-system';
import type { ComponentProps } from 'react';

interface ProfessionalExperience {
  employer: string;
  workMode: 'On-site' | 'Hybrid' | 'Remote';
  location: string;
  position: string;
  tenure: string;
  rolesAndAchievements: Array<Record<string, string>>;
}

interface AcademicBackground {
  institution: string;
  location: string;
  qualification: string;
  hrefForCredential?: string;
  tenure: string;
  rolesAndAchievements: string[];
}

interface ProfessionalCredential {
  title: string;
  awardingInstitution: string;
  credentialId?: string;
  hrefForCredential?: string;
  expiryDate?: string;
}

interface Certification extends ProfessionalCredential {
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

interface Skill {
  category: string;
  skills: string[];
  badgeTone: ComponentProps<typeof Badge>['tone'];
}

export const useResumeData = () => {
  const name = 'Awangku Muhammad Syazwan bin Awangku Sazali';
  const nickname = 'Syazwan';
  const credentials = ['BEng (Hons)', 'GradTech'];
  const imageUrl = 'https://i.ibb.co/SDqVgyLS/35-X35-Casual-BGless.png';


  const email = 'me@awangkusyazwan.my';
  const website = 'awangkusyazwan.my';
  const phoneNumber = '+60178994995';

  const linkedInHref = 'https://www.linkedin.com/in/awangkusyazwan';
  const youTubeHref = 'https://www.youtube.com/@syaz-dev';
  const gitHubHref = 'https://github.com/awangkusyazwan';
  const seekHref = 'https://my.jobstreet.com/profiles/awangkumuhammadsyazwan-binawangkusazali-mekvqv7ogt';

  const emailHref = `mailto:${email}`;
  const websiteHref = `https://${website}`;
  const telNoHref = `tel:${phoneNumber}`;

  const professionalExperiences: ProfessionalExperience[] = [
    {
      employer: 'JobStreet.com Shared Services Sdn. Bhd.',
      location: 'Kuala Lumpur, Malaysia',
      workMode: 'Hybrid',
      position: 'Associate Software Engineer',
      tenure: '22nd August 2022 – Present',
      rolesAndAchievements: [
        {
          "React UI & Platform Modernization": "Spearheaded candidate-facing front-end updates across the Search Engine Results Page (SERP) and Saved Searches pages using React and TypeScript, delivering the New Visual Language site refresh in alignment with APAC platform unification OKRs."
        },
        { "SDLC & End-to-end Feature Ownership": "Independently delivered and owned SDLC of features in brownfield projects such as profile avatar, header uplift, and user feedback loops flows in core team-owned systems" },
        {
          "Web Accessibility (WCAG)": "Led a 2-week accessibility uplift for candidate homepage web applications, auditing and refactoring React components to achieve strict WCAG 2.1 AA conformance."
        },
        {
          "SEO & Legacy Hostname Redirection": "Partnered with senior engineers and SEO specialists to deliver legacy URL redirection for legacy and pre-unification APAC endpoints, ensuring a 95 % + SEO UAT pass rate while retaining core conversion funnel performance."
        },
        {
          "Authentication Security & GraphQL": "Co-engineered the migration of a product domain-shared GraphQL API from cookie-based sessions to a JWT authentication model, uplifting client-side security and session management."
        },
        {
          "Observability & Cost Optimization": "Integrated and benchmarked Datadog Real User Monitoring (RUM) and other observability patterns within frontend client codebases, elevating client-side logging while reducing monitoring overhead."
        },
        { "AI Tooling & Innovation": "Integrated AI-assisted IDEs (Cursor AI, GitHub Copilot, Opencode) into daily sprint development; co-delivered an experimental release of an agentic AI feature." },
        {
          "DevOps & Resilience Ownership": "Served as the team Resilience Champion every 4 sprints on average on roster, managing automated CI / CD pipeline optimizations, dependency security patching, and vulnerability remediation."
        },
        { "Talent Acquisition": "Evaluated 75+ technical video submissions for ANZ/Asia Graduate Engineering cohorts, establishing baseline rubric criteria to screen high-calibre talent." }],
    },
    {
      employer: 'Carrier Malaysia Sdn. Bhd.',
      location: 'Kuching, Malaysia',
      workMode: 'On-site',
      position: 'Engineer, Service Sales',
      tenure: '7th February – 26th July 2022 ',
      rolesAndAchievements: [
        {
          "Customer Relationship Management (CRM)": "Engaged with 30+ key contacts from 25+ accounts including 1 new account in the Sarawak market for growth of opportunities, revenue, and CRM of the Service and Aftermarket lifecycle of commercial HVAC segment and recapture of lapsed service renewals with prospective and existing customers with near-expiry warranties"
        },
        {
          "Health & Safety Conformance": "Adhered and ensured strict compliance to policies outlining employer-mandated Environmental, Health & Safety (EH&S) policies as outlined under Corporate Policy Manual - Section 2 (EH&S) resulting in zero Total Recordable Incidence Rate (TRIR) and Lost Workday Incidence Rate (LWIR) YTD"
        },
        {
          "Stakeholder Management": "Conducted costing exercise and supplier/vendor liaison to ensure smooth, effective, stakeholder-compliant and rapid delivery of services to all customers using Carrier expertise as Sole Principal Organization providing OEM-mandated Aftermarket services for Carrier CHVAC equipment and plant"
        },
        {
          "Accounts Management":
            "Monitored 25+ customer ageing accounts to ensure timely payment for settling of current and overdue account balance as per End-of-Pay-Period Statement of Account (SoA) subject to policies enforced by the Company-Customer settlement plans and remittance requirements"
        },
        {
          "Work Order Facilitation": "Facilitated instances of urgent complaints of HVAC plant breakdowns or system failures with an average of 2 days for satisfactory provisioning of emergency turnarounds, aligned with Customer demands over period of mitigation"
        },
        { "Conversion Funnel Management": "Updated an average of 5+ active pipelines per week regularly on SFDC to ensure seamless CRM and per-account management" },
        { "Training Facilitation": "Assisted in organising, and participated in, service seminars/ training programs with Customers, new hires (i.e., interns) and work with training groups within the wider organization" },
      ],
    },
    {
      employer: 'PETRONAS Carigali Sdn. Bhd.',
      location: 'Miri, Malaysia',
      workMode: 'On-site',
      position: 'Industrial Trainee (Instrumentation Engineering)',
      tenure: 'December 2019 – February 2020 ',
      rolesAndAchievements: [
        { "Instrumentation Study": "Conducted reaffirmation of Instrumented Protective Function (IPF) studies and recommendations made by in-house consultants reportable to section TP (Technical Professional)" },
        { "Conceptual Study": "Conducted the conceptual study for IPF recommendations for 1 instrument at the Temana-B asset and presented a summary of the study to department executives" },
        { "Safety Impact Reassessment": "Collaboratively reassessed the Safety Impact Level (SIL) matrix for a chemical injection tank level IPF at an in-field asset with on-site operators, consultants, executive and department manager" },
      ],
    },
  ];

  const academicBackgrounds: AcademicBackground[] = [
    {
      institution: 'Swinburne University of Technology Sarawak Campus',
      location: 'Kuching, Malaysia',
      qualification: 'BEng (Hons) Robotics and Mechatronics',
      tenure: 'February 2017 – March 2021',
      hrefForCredential:
        'https://app.box.com/s/uykc33r78a1opzcbte8nl3yfp5s1rl2j',
      rolesAndAchievements: [
        'CGPA: 3.40/4.00',
        'Final Year Capstone Project: Portable Multi-Position Vibration Data Acquisition (DAQ) Device',
        'Extracurriculars: Vice President - Engineers Australia Swinburne Sarawak Student Society',
      ],
    },
  ];

  const professionalCredentials: ProfessionalCredential[] = [
    {
      awardingInstitution: 'Board of Engineers Malaysia (BEM)',
      title: 'Graduate Engineer, Mechatronics',
      credentialId: 'G1195701A',
      hrefForCredential:
        'https://engineer.org.my/public/Engineers/Directory?registrationNo=G1195701A',
    },
  ];

  const certifications: Certification[] = [
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
      hrefForCredential:
        'https://app.box.com/s/b8p99fjz547o5zqfxgfg52bvg8l2m8ds',
      type: 'Skill',
      scores: ['Theory: 94/100', 'Practical: 96/100'],
    },
  ];

  const volunteeringExperiences: VolunteeringExperience[] = [
    {
      organization: 'Engineers Australia Swinburne Sarawak Student Society',
      location: 'Kuching, Malaysia',
      position: 'Event Volunteer, Frontier Engineers Australia',
      tenure: 'April - May 2019',
      rolesAndAchievements: [
        'Promoted the organizing of a full-day networking masterclass event under the Engineers Australia Malaysia Chapter Frontier program over 14 days before the event takes place',
        "Facilitated the registration of 20+ EA student members' interest to partake in the Frontier event",
        'Facilitated the application for student membership the Institution of Engineers, Australia of 20+ eligible students enrolled at Swinburne Sarawak',
      ],
    },
  ];

  const categorisedSkills: Skill[] = [
    {
      category: 'Technical',
      skills: [
        'TypeScript',
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
        'GraphQL',
        'Node.js',
        'C++',
        'C#',
        'React.js',
        'React Testing Library',
        'Jest',
        'Vitest',
        'AWS',
        'Vite',
        'Bash/Zsh',
        'Next.js',
        'Three.js',
        'Cypress',
        'Datadog',
        'Git',
        'GitHub',
        'Cloudflare Workers',
        'Cursor/Copilot/Opencode (AI Tools)',
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

  return {
    name,
    nickname,
    credentials,
    imageUrl,
    email,
    website,
    phoneNumber,
    linkedInHref,
    youTubeHref,
    gitHubHref,
    seekHref,
    emailHref,
    websiteHref,
    telNoHref,
    professionalExperiences,
    academicBackgrounds,
    professionalCredentials,
    certifications,
    volunteeringExperiences,
    categorisedSkills,
  };
};
