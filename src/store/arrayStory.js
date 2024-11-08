// stores/arrayStore.js
import {defineStore} from 'pinia';

export const useAgentListStore = defineStore('agentListStore', {
    state: () => ({
        clearList: [],
        labelList: [],
        reviewList: [],
    }),
    actions: {
        setClearList(data) {
            this.clearList = data;
        },
        setLabelList(data) {
            this.labelList = data;
        },
        setReviewList(data) {
            this.reviewList = data;
        },
    },
    persist: true,
});
