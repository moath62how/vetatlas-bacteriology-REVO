
export interface SubSection {
  title: string;
  icon: string;
  content: string;
}

export interface ModuleCard {
  id: string;
  title: string;
  category: 'BACTERIOLOGY' | 'MYCOLOGY' | 'VIROLOGY';
  description: string;
  image: string;
  stats: string;
  details: string;
  colorClass: string;
  sections?: SubSection[]; // Optional nested content
}

export interface ModalProps {
  module: ModuleCard | null;
  onClose: () => void;
}
