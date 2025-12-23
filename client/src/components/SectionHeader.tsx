import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, className, centered = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className={cn("h-1 w-20 bg-secondary mt-4 rounded-full", centered && "mx-auto")} />
      </motion.div>
    </div>
  );
}
