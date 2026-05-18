import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Toast = {
  id: number;
  title?: string;
  message: string;
  type: "success" | "error" | "info";
};

type ToastContextValue = {
  showToast: (toast: Omit<Toast, "id">) => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const showToast = (toast: Omit<Toast, "id">) => {
    const id = Date.now() + Math.random();
    const t: Toast = { id, ...toast };
    setToasts((s) => [t, ...s]);
    setTimeout(() => {
      setToasts((s) => s.filter((x) => x.id !== id));
    }, 4000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="fixed top-6 right-6 flex flex-col gap-3 z-50">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`max-w-sm w-full px-4 py-3 rounded-lg shadow-lg text-sm text-white border border-white/5 ` +
              (t.type === "success"
                ? "bg-emerald-500/90"
                : t.type === "error"
                ? "bg-rose-500/90"
                : "bg-slate-700/90")}
          >
            {t.title && <div className="font-semibold mb-1">{t.title}</div>}
            <div>{t.message}</div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
