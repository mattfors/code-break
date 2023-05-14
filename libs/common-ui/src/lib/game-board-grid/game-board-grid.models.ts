export interface GameBoardConfiguration {
  columns: number;
  rows: number;
}

export interface GameBoardGridDataRow {
  codes: number[];
  results: ('partial' | 'exact' | 'none')[];
}
