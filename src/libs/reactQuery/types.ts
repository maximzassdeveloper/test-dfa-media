import { DefaultError, QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

export type UseQueryOptionsDto<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Omit<
  UseQueryOptions<AxiosResponse<TQueryFnData>, AxiosError<TError>, AxiosResponse<TData>, TQueryKey>,
  'queryFn' | 'queryKey'
>

export type UseMutationOptionsDto<
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown
> = Omit<
  UseMutationOptions<AxiosResponse<TData>, AxiosError<TError>, TVariables, TContext>,
  'mutationFn'
>
