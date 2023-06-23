import type { ReactNode } from 'react'
import { Locale as FormLocale } from '../form/interfaces'
import { Locale as FiltersLocale } from '../filters/interfaces'
import { ColumnsType, ColumnType, TableLocale } from '../ui/Table/interfaces'
import { DrawerProps } from '../ui/Drawer/interfaces'
import { PaginationLocale } from '../ui/Pagination/interfaces'
import { DataTableConfig } from '../dataTable'
import { DeleteActionLocale } from '../dataTable/actions'
import { LayoutLocale } from '../ui/Layout/interfaces'

export type CRUDLocale = {
    actions: CRUDActionsLocale
    filters: FiltersLocale
    form: FormLocale
    table: TableLocale
    pagination: PaginationLocale
    popconfirm: DeleteActionLocale
    layout: LayoutLocale
}

export type CRUDActionsLocale = {
    submit: string
    back: string
    tableColumn: string
    paginationTotal: (total: number) => string
}

type CRUDForm =
    | {
          fields: React.ReactNode
          children?: never
      }
    | {
          fields?: never
          children: React.ReactNode
      }

export type CRUDFormCreate = CRUDForm
export type CRUDFormEdit = CRUDForm

export type CRUDConfig<RecordType> = {
    path: string
    actions?: React.ReactNode
    resource: string
    index: {
        title: string
        newButtonText: string
        tableColumns: ColumnsType<RecordType>
        tableActions?: ColumnType<RecordType> | null
        tableConfig?: DataTableConfig<RecordType>
    }
    form: {
        create: CRUDFormCreate
        edit: CRUDFormEdit
    }
    create?: {
        title?: string
    }
    update?: {
        title?: (id: string) => string
        view?: 'page' | 'drawer'
        drawer?: DrawerProps & { routePath?: (path: string) => string }
    }
    filter?: { topToolbarButtonText: string; fields: JSX.Element; hasQuickFilters?: boolean }
    topContent?: ReactNode
    bottomContent?: ReactNode
}
