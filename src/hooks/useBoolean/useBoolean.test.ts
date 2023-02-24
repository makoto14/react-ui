import { act, renderHook } from '@testing-library/react';
import { useBoolean } from './useBoolean';

describe('useBoolean', () => {
  test('初期値の確認', () => {
    const { result } = renderHook(() => useBoolean());

    expect(result.current.bool).toBeFalsy();
  });

  test('変更したあとの確認', () => {
    const { result } = renderHook(() => useBoolean());

    act(() => {
      result.current.setBool(true);
    });

    expect(result.current.bool).toBeTruthy();
  });

  test('handleTrue', () => {
    const { result } = renderHook(() => useBoolean());

    act(() => {
      result.current.handleTrue();
    });

    expect(result.current.bool).toBeTruthy();
  });

  test('handleFalse', () => {
    const { result } = renderHook(() => useBoolean());

    act(() => {
      result.current.handleTrue();
    });

    expect(result.current.bool).toBeTruthy();

    act(() => {
      result.current.handleFalse();
    });

    expect(result.current.bool).toBeFalsy();
  });
});
