import { act, renderHook } from '@testing-library/react';
import { useBoolean } from './useBoolean';

describe('useBoolean', () => {
  test('初期値の確認', () => {
    const { result } = renderHook(() => useBoolean());

    expect(result.current.val).toBeFalsy();
  });

  test('変更したあとの確認', () => {
    const { result } = renderHook(() => useBoolean());

    act(() => {
      result.current.setVal(true);
    });

    expect(result.current.val).toBeTruthy();
  });
});
