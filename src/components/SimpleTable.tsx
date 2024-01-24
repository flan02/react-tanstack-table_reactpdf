/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Button } from "./ui/button"
//import React from 'react'
// * tsrafce snippet

import { people } from "../data"
import Datatable from "./table/DataTable"
import { columns } from "./table/columns"
import { ThemeProvider } from "./theme-provider"


type Props = {}

const SimpleTable = (_props: Props) => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="container py-4">
          <Datatable columns={columns} data={people} />
        </div>
      </ThemeProvider>
    </>
  )
}

export default SimpleTable
