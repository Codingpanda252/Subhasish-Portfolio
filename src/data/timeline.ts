export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  icon: string;
  highlight?: string;
}

export const timeline: TimelineItem[] = [
  {
    year: '2025',
    title: 'WCRP Japan Fellow',
    desc: 'KM-Scale Hackathon, Tokyo (AORI/Univ of Tokyo)',
    icon: 'japan',
    highlight: 'International Research Fellowship'
  },
  {
    year: '2025',
    title: 'Department of Science & Technology, Intern',
    desc: 'Data & Strategy Unit, Ministry of Science & Technology, Government of India',
    icon: 'work',
    highlight: 'Government Internship Experience'
  },
  {
    year: '2024',
    title: 'Co-Founded B.Y.T.E',
    desc: 'Tech society at MAIT fostering innovation, learning, and collaboration through projects, R&D in Web Development, App Development, AI/ML, Cybersecurity (TechSec), and Design',
    icon: 'community',
    highlight: 'Leadership & Community Building'
  },
  {
    year: '2023',
    title: 'Code Ignite, Co-Founder & Lead',
    desc: 'Established a coding community at MAIT, enabling 350+ beginners to develop technical skills through structured mentorship and peer learning',
    icon: 'ignite',
    highlight: 'Tech Culture Initiator'
  },
  {
    year: '2022',
    title: 'B.Tech at Maharaja Agrasen Institute of Technology, Delhi',
    desc: 'Started Computer Science & Engineering at MAIT, GGSIPU Delhi',
    icon: 'education',
    highlight: 'Academic Journey Begins'
  }
];
