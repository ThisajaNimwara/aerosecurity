import { useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";

export function useGoContact() {
  const navigate = useNavigate();
  return useCallback(() => {
    void navigate({ to: "/contact" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);
}
