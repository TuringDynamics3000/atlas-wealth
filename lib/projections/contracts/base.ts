export type ProjectionMeta = {
  asAt: string
  source: 'mock' | 'engine'
}

export type Projection<T> = {
  meta: ProjectionMeta
  data: T
}
