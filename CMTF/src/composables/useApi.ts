import { ref } from 'vue';
import { useUiStore } from '../stores/ui';

interface ApiOptions {
  useGlobal?: boolean; // 기본적으로 false로 설정할 예정
}

export function useApi<T>(
  apiFunc: (...args: any[]) => Promise<T>, 
  options: ApiOptions = { useGlobal: false } // 기본값: 전역 로딩 미사용
) {
  const ui = useUiStore();
  const data = ref<T | null>(null);
  const loading = ref(false);
  const error = ref<any>(null);

  const execute = async (...args: any[]) => {
    loading.value = true;
    // 옵션이 true일 때만 전역 카운트 증가
    if (options.useGlobal) ui.startLoading();
    
    error.value = null;
    try {
      data.value = await apiFunc(...args);
      return data.value;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
      // 종료 시에도 옵션 확인 후 카운트 감소
      if (options.useGlobal) ui.stopLoading();
    }
  };

  return { data, loading, error, execute };
}