export interface Route {
  path: string;
  name: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}
