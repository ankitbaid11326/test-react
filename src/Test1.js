import React, { useEffect } from "react";
import apiClient from "./ApiClient";

export default function Test2() {
  useEffect(() => {
    async function getApiData() {
      try {
        const result = await apiClient.get("http://localhost:8000/dev");
        console.log("###result", result);
      } catch (error) {
        console.log("### error", error);
      }
    }

    getApiData();
  }, []);

  return <div>Test2</div>;
}
