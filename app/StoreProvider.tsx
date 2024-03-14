"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import { NextUIProvider } from "@nextui-org/react";
import { CustomProvider } from "rsuite";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <CustomProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </CustomProvider>
    </Provider>
  );
}
