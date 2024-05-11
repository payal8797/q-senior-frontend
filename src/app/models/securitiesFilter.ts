export interface PagingFilter {
  skip?: number,
  limit?: number,
}

export interface SecuritiesFilter extends PagingFilter {
  name?: string,
  types?: string[]
  currencies?: string[],
  isPrivate?: boolean,
}

export interface FilterCols {
  label: string;
  type: string;
  name: string;
}