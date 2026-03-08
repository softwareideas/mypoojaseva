import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Route,
  BookOpen,
  Sparkles,
  Calendar,
  Moon,
  Flower2,
  ChevronRight,
} from "lucide-react";

export interface ServiceNavItem {
  id: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

export const SERVICE_ITEMS: ServiceNavItem[] = [
  {
    id: "flowchart",
    title: "Interactive Journey",
    tagline: "Explore your spiritual path through life",
    icon: Route,
    gradient: "from-maroon/90 via-maroon/70 to-saffron/60",
  },
  {
    id: "lifecycle",
    title: "Life Cycle",
    tagline: "16 sacred samskaras from birth to beyond",
    icon: Flower2,
    gradient: "from-saffron/80 via-amber-500/70 to-rose-400/60",
  },
  {
    id: "pooja",
    title: "Pooja Services",
    tagline: "Daily, festival & special occasion rituals",
    icon: Sparkles,
    gradient: "from-amber-600/80 via-saffron/70 to-maroon/50",
  },
  {
    id: "tarpanam",
    title: "Monthly Tarpanam",
    tagline: "Honor ancestors on Amavasya & Purnima",
    icon: Moon,
    gradient: "from-indigo-800/80 via-purple-700/70 to-maroon/60",
  },
  {
    id: "samskara",
    title: "Samskara Guide",
    tagline: "Deep dive into each sacrament",
    icon: BookOpen,
    gradient: "from-emerald-700/80 via-teal-600/70 to-cyan-500/60",
  },
  {
    id: "calendar",
    title: "Pooja Calendar",
    tagline: "Auspicious dates & festival planner",
    icon: Calendar,
    gradient: "from-rose-600/80 via-pink-500/70 to-saffron/50",
  },
];

interface ServiceNavCardProps {
  item: ServiceNavItem;
  isActive: boolean;
  onClick: () => void;
}

const ServiceNavCard: React.FC<ServiceNavCardProps> = ({
  item,
  isActive,
  onClick,
}) => {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative rounded-2xl overflow-hidden text-left p-6 transition-all duration-300",
        "hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2",
        "bg-gradient-to-br shadow-lg hover:shadow-xl",
        item.gradient,
        "min-h-[130px] sm:min-h-[140px]",
        isActive && "ring-2 ring-white ring-offset-2 ring-offset-maroon/20 scale-[1.02] shadow-xl"
      )}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-start justify-between">
          <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <ChevronRight
            className={cn(
              "h-5 w-5 text-white/70 transition-transform duration-300",
              isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white drop-shadow-sm">
            {item.title}
          </h3>
          <p className="text-sm text-white/90 mt-0.5 line-clamp-2">
            {item.tagline}
          </p>
        </div>
      </div>
    </button>
  );
};

export default ServiceNavCard;
