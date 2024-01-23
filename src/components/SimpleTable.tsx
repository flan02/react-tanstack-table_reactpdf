/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Button } from "./ui/button"
//import React from 'react'
// * tsrafce snippet

import { people } from "../data"
import Datatable from "./table/DataTable"
import { columns } from "./table/columns"


type Props = {}

const SimpleTable = (props: Props) => {
  return (
    <Datatable columns={columns} data={people} />
  )
}

export default SimpleTable
