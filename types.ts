interface NavPrimaryProps {
  items: {
    title: string;
    to: string;
    icon: import('lucide-react').LucideIcon;
    activeOptions: { exact: boolean };
  }[];
}

interface NavUserProps {
  user: import('better-auth').User;
}
