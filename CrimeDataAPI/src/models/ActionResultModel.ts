export interface ActionResultModel<T = any> {
  data?: T;
  success: boolean;
  comment?: string;
  errorCode?: number;
}
