
type ListItem = {
  id: number;
  count: number;
  suffix: string;
  description: string;
  ref: ((node?: Element | null) => void) | null; 
};

export const listItems: ListItem[] = [
  {
    id: 1,
    count: 94,
    suffix: "%",
    description: "Client Retention",
    ref: null,
  },
  {
    id: 2,
    count: 70,
    suffix: "M+",
    description: "Emails Per Month",
    ref: null,
  },
  {
    id: 3,
    count: 10,
    suffix: "K+",
    description: "Monthly Campaigns",
    ref: null,
  },
];