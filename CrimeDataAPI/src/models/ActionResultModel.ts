export interface ActionResultModel<T> {
  data?: T;
  success: boolean;
  comment?: string;
  errorCode?: number;
}
