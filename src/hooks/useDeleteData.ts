import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface DeleteData<T> {
  id: string | number;
  data: T;
  url: string;
  mutationFn: (url: string, options?: any) => Promise<T>;
  options?: any;
  refetchData?: () => void;
}

const useDeleteData = <T>(args: DeleteData<T>) => {
  return useMutation<T, Error>({
    mutationFn: () => args.mutationFn(args.url, args.options),
    onSuccess: () => {
      toast.success("Data deleted successfully");
      if (args.refetchData) {
        args.refetchData();
      }
    },
    onError: (error) => {
      toast.error(error.message || "An error has occured.");
    },
  });
};

export default useDeleteData;
