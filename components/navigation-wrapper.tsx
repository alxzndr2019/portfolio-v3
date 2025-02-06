"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Loading } from "./loading";
import { ClientWrapper } from "./client-wrapper";

const Navigation = dynamic(() => import("./navigation"), {
  ssr: false,
  loading: () => <Loading />,
});

export function NavigationWrapper() {
  return (
    <ClientWrapper>
      <Suspense fallback={<Loading />}>
        <Navigation />
      </Suspense>
    </ClientWrapper>
  );
}
