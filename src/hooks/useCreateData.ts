import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface CreateData<T> {
  url: string;
  mutationFn: (url: string, data: T, options?: any) => Promise<T>;
  options?: any;
  refetchData?: () => void;
}

const useCreateData = <T>(args: CreateData<T>) => {
  return useMutation<T, Error, T>({
    mutationFn: (data) => args.mutationFn(args.url, data, args.options),
    onSuccess: () => {
      toast.success("Data created successfully");
      if (args.refetchData) {
        args.refetchData();
      }
    },
    onError: (error) => {
      toast.error(error.message || "An error has occured.");
    },
  });
};

export default useCreateData;
