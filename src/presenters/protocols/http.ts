export type LambdaResponse = {
  headers: HeaderOption;
  statusCode: number;
  body: string;
};

interface HeaderOption {
  'Access-Control-Allow-Origin': string;
}
