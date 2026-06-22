export type ActiveTab = 'home' | 'about' | 'services' | 'opportunities' | 'insights' | 'contact' | 'privacy' | 'terms';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
}

export interface InvestmentOpportunity {
  id: string;
  title: string;
  type: 'Real Estate' | 'Growth Business' | 'SME Acquisition';
  location: string;
  targetYield: string;
  minInvestment: string;
  status: 'Open' | 'Funding' | 'Fully Subscribed';
  description: string;
  riskProfile: 'Conservative' | 'Moderate' | 'Incentive';
  highlight: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Market Insights' | 'Real Estate' | 'Business Investment' | 'Educational';
  date: string;
  readTime: string;
  author: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  message: string;
  timestamp: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
}
