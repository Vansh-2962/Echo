import { motion, AnimatePresence } from "framer-motion";
import { Zap, X, Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const proFeatures = [
  "Unlimited Collections",
  "Unlimited Requests",
  "Environment Management",
  "Pre/Post Scripts",
  "Priority Support",
];

interface UpgradeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  limitType: "collections" | "requests";
}

export const UpgradeModal = ({
  open,
  onOpenChange,
  limitType,
}: UpgradeModalProps) => {
  const navigate = useNavigate();

  const limitMessage =
    limitType === "collections"
      ? "You've reached the free tier limit of 1 collection."
      : "You've reached the free tier limit of 3 requests per collection.";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-border">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center">
              <Crown className="h-5 w-5 text-primary" />
            </div>
            <DialogHeader className="space-y-0.5 text-left">
              <DialogTitle className="text-lg">Upgrade to Pro</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {limitMessage}
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <div className="px-6 pb-6 space-y-5">
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">
              Everything in Pro:
            </p>
            <ul className="space-y-2.5">
              {proFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-baseline gap-1 pt-1">
            <span className="text-3xl font-bold text-foreground">$20</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Maybe Later
            </Button>
            <Button
              className="flex-1 gap-1.5"
              onClick={() => {
                onOpenChange(false);
                navigate("/checkout");
              }}
            >
              <Zap className="h-3.5 w-3.5" />
              Upgrade Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
