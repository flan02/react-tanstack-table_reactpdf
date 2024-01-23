/* eslint-disable @typescript-eslint/no-explicit-any */
//import { data } from "../../types/data";
import { ColumnDef } from "@tanstack/react-table";

//export type Person = (typeof data)[number];
type Person = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  date_of_birth: string;
}

export const columns: ColumnDef<Person>[] = [
  {
    header: "Person ID",
    accessorKey: "id",
  },
  {
    header: "First Name",
    accessorKey: "first_name",
  },
  {
    header: "Last Name",
    accessorKey: "last_name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Date of Birth",
    accessorKey: "date_of_birth",
  }
] 