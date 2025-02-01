import { useQuery } from "@tanstack/react-query";

interface FetchData<T> {
  url: string;
  queryKey: string;
  queryFn: (url: string, options?: any) => Promise<T[]>;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
  retry?: boolean;
}

const useFetchData = <T>(args: FetchData<T>) => {
  return useQuery<T[]>({
    queryKey: [args.queryKey],
    queryFn: () => args.queryFn(args.url),
    staleTime: args.staleTime,
    refetchOnWindowFocus: args.refetchOnWindowFocus,
    retry: args.retry,
  });
};

export default useFetchData;
