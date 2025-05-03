"use client";

import Header from "@/components/header";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RecordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [tab, setTab] = useState("makeRecord");

  useEffect(() => {
    if (pathname.includes("break-a-record")) {
      setTab("breakRecord");
    } else {
      setTab("makeRecord");
    }
  }, [pathname]);

  const handleTabChange = (value: string) => {
    setTab(value);
    router.push(value === "makeRecord" ? "/make-a-record" : "/break-a-record");
  };

  return (
    <div className="pt-9 pb-12 flex flex-col gap-12">
      <Header />

      <div className="px-30">
        <Tabs value={tab} onValueChange={handleTabChange}>
          <div className="w-full flex justify-center">
            <TabsList>
              <TabsTrigger value="makeRecord">Make Record</TabsTrigger>
              <TabsTrigger value="breakRecord">Break Record</TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-6">
            <TabsContent value="makeRecord">
              {tab === "makeRecord" && children}
            </TabsContent>
            <TabsContent value="breakRecord">
              {tab === "breakRecord" && children}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
