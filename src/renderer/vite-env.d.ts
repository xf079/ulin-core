/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
