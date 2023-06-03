import { useAuth } from "@/hooks/useAuth"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"

import api from "./api"


export const useDataEntries = () => {
  const { user } = useAuth()

  const query = useQuery({
    queryKey: ['dataEntries', user?.uid],
    queryFn: api.getAllByUser
  })

  return query
}

export const useCreateEntry = () => {
  const queryClient = useQueryClient()
  const { user } = useAuth()

  return useMutation({
    mutationFn: api.create,
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: ['dataEntries', user?.uid]
    })
  })
}