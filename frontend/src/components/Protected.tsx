import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }: { children: React.ReactNode }) => {
  const { data, isPending } = authClient.useSession();
  const [checked, setChecked] = useState(false);

  const isAuthenticated = data?.session && data?.user;

  useEffect(() => {
    if (!isPending) {
      const timer = setTimeout(() => setChecked(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isPending]);

  if (isPending || !checked) {
    return (
      <div className="h-screen w-full grid place-items-center">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-bolt text-primary animate-draw"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
          </svg>{" "}
        </div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to={"/"} replace />;
};

export default Protected;
