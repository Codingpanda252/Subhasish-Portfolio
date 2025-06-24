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
    title: 'DST Internship',
    desc: 'Data & Strategy Unit, Government of India',
    icon: 'work',
    highlight: 'Government Internship Experience'
  },
  {
    year: '2024',
    title: 'BYTE Co-Founder',
    desc: 'Launched tech community of 65+ at MAIT',
    icon: 'community',
    highlight: 'Leadership & Community Building'
  },
  {
    year: '2023',
    title: 'Code Ignite Start',
    desc: 'First coding club initiative at MAIT',
    icon: 'ignite',
    highlight: 'Tech Culture Initiator'
  },
  {
    year: '2022',
    title: 'B.Tech at MAIT',
    desc: 'Started CSE at MAIT, GGSIPU Delhi',
    icon: 'education',
    highlight: 'Academic Journey Begins'
  }
];
