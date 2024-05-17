import { flatten, unflatten } from 'flat'
import { isString, mapKeys } from 'remeda'
import type { CollectionCascade } from '../getCollectionCascade'

export const transformLayouts = (collectionCascade: CollectionCascade) => {
  const flat: any = flatten(collectionCascade)
  const transformedData = mapKeys(flat, (key) => {
    if (!isString(key)) return key
    // if (key.endsWith('_')) return key // in case of a empty layout which would overwrite entire page
    const parts = key.split('.')
    const result = parts.map((part) => {
      return part.replace(/^_+/, '')
    })
    const filtered = result.filter(Boolean)
    const joined = filtered.join('.')
    return joined
  })
  const nested = unflatten(transformedData)
  return nested
}
