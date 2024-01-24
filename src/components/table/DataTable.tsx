import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { Button } from "../ui/button"
//import { Checkbox } from "../ui/checkbox"
import React from "react"
import { Input } from "../ui/input"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Check } from "lucide-react"
import { ModeToggle } from "../mode-toggle"
import { downloadToExcel } from "../../libs/xlsx"

//type Props = {}
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function Datatable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = React.useState({})
  //console.log(rowSelection);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    },
  })

  return (
    <>
      {/* input */}
      <div className="flex items-start py-4 ml-0">
        <Input
          className="max-w-sm dark:focus:ring-red-600 focus:ring-blue-400"
          placeholder="Filter First Names"
          value={table.getColumn("first_name")?.getFilterValue() as string || ""}
          onChange={(e) => table.getColumn('first_name')?.setFilterValue(e.target.value)}
        />
        <DropdownMenu>
          <DropdownMenuTrigger className="ml-8 mr-2">
            <Button variant="outline" className="">Columns</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className="z-50 px-2 rounded-md dark:bg-black  bg-white border border-slate-300 dark:border-slate-700">
            {table
              .getAllColumns()
              .filter(column => column.getCanHide())
              .map(column => {
                return (
                  <DropdownMenuCheckboxItem key={column.id} className="capitalize dark:hover:bg-slate-900 hover:bg-slate-100"
                    checked={column.getIsVisible()} onCheckedChange={(value: boolean) => { column.toggleVisibility(!!value) }}>
                    {column.getIsVisible() ? <Check className="pr-2 inline" /> : <span className="pr-6"></span>}
                    <span>{column.id}</span>
                  </DropdownMenuCheckboxItem>
                )
              })
            }
          </DropdownMenuContent>
        </DropdownMenu>

        {/* style changing */}
        <ModeToggle />

        <Button
          onClick={() => downloadToExcel()}
          variant="outline" className="ml-auto dark:bg-red-500 dark:hover:bg-red-600"
        >
          Export
        </Button>
      </div>
      { /* table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      className=""
                      key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      { /* pagination */}
      <div className="flex items-center justify-center space-x-2 py-4">
        <Button variant='outline' size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button variant='outline' size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
      <div className="flex-1 text-sm text-muted-foreground ml-2">
        {table.getFilteredSelectedRowModel().rows.length} of {' '}
        {table.getFilteredRowModel().rows.length} row(s) selected
      </div>
    </>

  )
}

export default Datatable