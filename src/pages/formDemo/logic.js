export default {
    defaults() {
        return {
            loaded: false,
            list: [],
            error: false,
        };
    },
    async fetch({ fn, setState }, params) {    
        debugger  
        const res = await fn.DB.SomeModuleAPI.getLocalData(params);
        // setState({ loaded: true, list: res });
    },
};
