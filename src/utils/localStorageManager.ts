// localStorageManager.ts

const localStorageManager = {
    setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },
    removeItem(key: string) {
        localStorage.removeItem(key);
    },
    clear() {
        localStorage.clear();
    },
};

export default localStorageManager;
