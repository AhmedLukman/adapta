export interface StatsCardPrimeSliceI {
  StatsCard: {
    climateScore: number
    waterScore: number
    soilScore: number
    compositeScore: number
  }
}


export interface StatsCardI {
  score?: number | string;
  value?: number;
  heading?: string
  children?: React.ReactNode
}

export interface WrapperI {
  children: React.ReactNode;
}

export interface MetricInfoCardI {
  riskText: string;
  riskPercentage: string;
  color: "red" | "green" | "orange";
}

export interface ChildrenI {
  children: React.ReactNode;
}

export interface ModalOverlayI {
  onClose: () => void;
}

export interface ReportCardI {
  onOpen: () => void;
}

export interface BackdropI {
  onClose: () => void;
}

export interface ButtonI extends ChildrenI {
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.FormEvent) => void | (() => void);
}

export interface FormSliceI {
  form: {
    hasComputed: boolean;
    crop: string;
    period: string;
    location: string
  };
}

export interface ChartI {
  value?: number;
  score?: number | string;
}
