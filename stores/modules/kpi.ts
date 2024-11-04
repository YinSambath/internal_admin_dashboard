import { defineStore } from 'pinia';

export const useKpiStore = defineStore({
    id: 'kpi',
    state: () => ({
        kpis: [] as Array<any>, 
        kpisLoading: false,      
    }),
    getters: {
        getKpis: (state) => state.kpis,
        isKpiLoading: (state) => state.kpisLoading,
    },
    actions: {
        
        addKpi(item: any) {
          this.kpis.push(item);
        },
        
        setLoading(status: boolean) {
          this.kpisLoading = status;
        },
    },
});
