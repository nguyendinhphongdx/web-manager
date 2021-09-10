export interface TableListItem {
  key:number;
  id?: number;
  endpoint?: string;
  method?: string;
  method_direct?: string;
  url?: string;
  header?: any;
  body?: any;
  params?: any;
  auth?: any;
  typebody?:string
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  id: number;
  url?: string;
  endpoint?: string;
  method?: string;
  method_direct?: string;
  id?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
}
