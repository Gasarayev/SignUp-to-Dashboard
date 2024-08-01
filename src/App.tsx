
import { useState, useEffect, } from "react";

import { AIMProvider } from "./contexts/iam";
import ThemeContextProvider from "./contexts/theme";


import { iam_get } from "./api/iam";
import { IAM_I } from "./types/iam/intefaces";

import { routes } from "./routes"
import { RouterProvider } from "react-router-dom";


function App() {
  const [iam, setIAM] = useState<IAM_I | null>(null)

  useEffect(() => {
    iam_get()
      .then(rsp => setIAM(rsp.data))
  }, [])

  return (
    <div>
      <ThemeContextProvider>
        <AIMProvider value={{ iam, setIAM }}>
          <RouterProvider router={routes} />
        </AIMProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
