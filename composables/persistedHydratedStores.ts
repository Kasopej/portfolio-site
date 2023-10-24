export function useReadyUserStore() {
    const userStore = useUserStore();
    (async () => await (userStore.$persistedState?.isReady() ?? Promise.resolve(userStore)))()
    return userStore
}