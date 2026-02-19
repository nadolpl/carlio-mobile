export interface ApiError {
  status: number;
  error: string;
  code: string;
  message: string;
  path: string;
  timestamp: number[];
}
