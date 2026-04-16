"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScriptLoader() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setTimeout(() => {
        if (window.initMainScripts) {
          window.initMainScripts();
        }
        if (window.initCarouselScripts) {
          window.initCarouselScripts();
        }
        
        if (typeof window.WOW === 'function') {
          new window.WOW().init();
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
