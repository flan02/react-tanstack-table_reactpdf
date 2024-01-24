import { ColumnDef } from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { ArrowDown, ArrowUp, MoreHorizontal } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

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
    id: 'select',
    header: ({ table }) => {
      return (
        <Checkbox
          className={`mr-2 mt-1 ${table.getIsAllPageRowsSelected() ? 'dark:bg-red-600 dark:text-white' : ''}`}
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value: boolean) => {
            table.toggleAllPageRowsSelected(!!value)
          }}
        />)
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          className={`mr-2 mt-1 ${row.getIsSelected() ? 'bg-blue-300 dark:bg-red-600 dark:text-white' : ''}`}
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value)
          }}
        />)
    },
    enableSorting: false,
    enableHiding: false
  },
  {
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => { column.toggleSorting(column.getIsSorted() === 'asc') }} className="-ml-4">
          Person ID {column.getIsSorted() === 'asc' ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    accessorKey: "id",
  },
  {
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => { column.toggleSorting(column.getIsSorted() === 'asc') }} className="-ml-4">
          First Name {column.getIsSorted() === 'asc' ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    accessorKey: "first_name",
  },
  {
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => { column.toggleSorting(column.getIsSorted() === 'asc') }} className="-ml-4">
          Last Name {column.getIsSorted() === 'asc' ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    accessorKey: "last_name",
  },
  {
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => { column.toggleSorting(column.getIsSorted() === 'asc') }} className="-ml-4">
          Email {column.getIsSorted() === 'asc' ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    accessorKey: "email",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => { column.toggleSorting(column.getIsSorted() === 'asc') }}>
          Date of Birth {column.getIsSorted() === 'asc' ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
    accessorKey: "date_of_birth",
    cell: ({ row }) => {
      const datex = row.getValue('date_of_birth')
      const formatted = new Date(datex as string).toLocaleDateString()
      return <div className="text-blue-400 dark:text-red-600 ml-4">{formatted}</div>
      // return new Date(row.getValue('date_of_birth')).toLocaleDateString() // * short form
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const person = row.original
      //const personId = person.id
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className="w-8 h-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900 py-1 px-2 z-50 rounded-md">
            <DropdownMenuLabel className="mb-1 font-bold">Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className=""
              onClick={() => {
                navigator.clipboard.writeText(person.first_name.toString())
              }}>
              Copy person name
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
    enableHiding: false,
  }
] 