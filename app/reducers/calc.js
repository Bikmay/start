// @flow

function calcOrderTotal(state, action) {
  switch (action.type) {
    case 'CALC_ORDER_TOTAL':
      const { cost, count } = state;
      state = cost * count;
      return state;
    default:
      return state;
  }
}
