import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useFetcher(){
    const { data, error } = useSWR(fetcher);
    return{
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}