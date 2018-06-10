export default {
    defaults() {
        return {
            loaded: false,
            list: [],
            error: false,
        };
    },
    async fetch({ fn, setState }) {
        const res = await fn.DB.SomeModuleAPI.getLocalData();
        setState({ loaded: true, list: res });
    },
};
