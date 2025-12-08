import { CheckCircle2 } from "lucide-react";

interface SuccessToastProps {
  title: string;
  description: string;
}

export const SuccessToast = ({ title, description }: SuccessToastProps) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0">
        <CheckCircle2 className="w-6 h-6 text-green-500" />
      </div>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
