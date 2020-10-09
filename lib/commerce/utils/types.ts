// Core fetcher added by CommerceProvider
export type Fetcher<T> = (options: FetcherOptions) => T | Promise<T>

export type FetcherOptions = {
  url?: string
  query?: string
  method?: string
  variables?: any
  body?: any
}

export type HookFetcher<T, Input> = (
  options: HookFetcherOptions,
  input: Input,
  fetch: Fetcher<T>
) => T | Promise<T>

// export type HookFetcher<T> = (
//   options: FetcherOptions,
//   fetch: Fetcher<T>
// ) => T | Promise<T>

export type HookFetcherOptions = {
  query?: string
  url?: string
  method?: string
}