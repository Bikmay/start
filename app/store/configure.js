export function createStore(
  reducer /** action */,
  initialState /** начальное состояние стора */
) {
  let state = initialState; // устанавливаем начальное значение

  return {
    dispatch: action => {
      state = reducer(state, action);
    },
    getState: () => state
  };
}
