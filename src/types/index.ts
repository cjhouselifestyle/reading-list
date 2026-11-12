export interface Book {
  id: number;
  name: string;
  cats: string[];
  interests: string[];
  series: string;
  cover?: string;
  intro: string;
  highlight: string;
  recommendation: string;
  startAge: string;
  startReason: string;
  sentences: string[];
  tips: string[]; // [1歲建議, 2歲建議, 3歲建議]
  official?: string;
  award?: string;
  pending?: boolean;
}

export interface BundleSuggestionRule {
  names: string[];
  bundleNames: string[];
  title: string;
  text: string;
}

export interface FilterState {
  series: string;
  topic: string;
  selectedInterests: string[];
  bundleGroup: string | null;
  awardOnly: boolean;
}
