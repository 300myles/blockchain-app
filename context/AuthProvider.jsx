"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGlobalContext } from "./GlobalProvider";

const ProtectedAuthRoute = ({ children }) => {
  const { user, isLoading } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.push("/dashboard"); // Redirect to Dashboard if user is authenticated
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="grid h-screen place-items-center">
        <div className="flex items-center justify-center w-full h-full">
          {/* <Loader isLoading={isLoading} />  */} Please wait
        </div>
      </div>
    );
  }

  return children;
}

export default ProtectedAuthRoute;