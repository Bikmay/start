export const CALC_ORDER_TOTAL = 'CALC_ORDER_TOTAL';

export function calculationOrderTotal(cost, count) {
  return {
    type: CALC_ORDER_TOTAL,
    cost,
    count
  };
}
