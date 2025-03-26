// app/my-statsig.tsx

"use client";

import React from "react";
import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';


export default function MyStatsig({ children }: { children: React.ReactNode }) {
  const { client } = useClientAsyncInit(
    "client-id4E3BQlwEC7rTyFpsJeLsghLKG1X3pAngN0v9u6Vmp",
    { userID: 'a-user' }, 
    { plugins: [ new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin() ] },
  );

  return (
    <StatsigProvider client={client} loadingComponent={<div>Loading...</div>}>
      {children}
    </StatsigProvider>
  );
}
