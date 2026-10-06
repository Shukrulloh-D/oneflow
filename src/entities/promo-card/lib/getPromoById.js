import { PROMOS } from '../model/promos'

export function getPromoById(id) {
  return PROMOS.find((promo) => promo.id === id) ?? null
}
