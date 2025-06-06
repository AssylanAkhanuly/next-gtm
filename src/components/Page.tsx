"use client";
import { getGTM } from "@/lib/gtm";
import { PropsWithChildren, useEffect } from "react";

function Page({ children }: PropsWithChildren) {
  useEffect(() => {
    getGTM().then((gtm) => {
      gtm.dataLayer({
        dataLayer: {
          event: "home_page_view",
        },
        
      });
    });
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {children}
    </div>
  );
}

export default Page;
