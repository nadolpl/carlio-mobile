export interface Pageable<T> {
  content: T[];
  page: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
}

export interface PageableParams {
  page?: number;
  size?: number;
  sort?: string;
}
