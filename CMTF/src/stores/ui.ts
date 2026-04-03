import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUiStore = defineStore('ui', () => {
  const loadingCount = ref(0);

  // 로딩 카운트가 0보다 크면 전역 로딩 활성화
  const isGlobalLoading = computed(() => loadingCount.value > 0);

  const startLoading = () => {
    loadingCount.value++;
  };

  const stopLoading = () => {
    // 0 이하로 내려가지 않도록 방어 로직 추가
    loadingCount.value = Math.max(0, loadingCount.value - 1);
  };

  return { isGlobalLoading, startLoading, stopLoading };
});