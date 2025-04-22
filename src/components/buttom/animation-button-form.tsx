import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { Check, Loader2, X } from "lucide-react";

const AnimationButtonForm = ({
  isLoading,
  status,
}: {
  isLoading: boolean;
  status: string;
}) => {
  return (
    <Button
      type="submit"
      className="mt-6 transition-all duration-300 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none dark:active:shadow-none cursor-pointer flex items-center justify-center gap-2"
      disabled={isLoading}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Loader2 className="animate-spin" />
          </motion.div>
        )}
        {!isLoading && status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <Check className="text-green-600" />
          </motion.div>
        )}
        {!isLoading && status === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <X className="text-red-600" />
          </motion.div>
        )}
        {!isLoading && status === "idle" && (
          <motion.span
            key="text"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            Enviar
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default AnimationButtonForm;
