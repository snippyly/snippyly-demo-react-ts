import { createContext, useContext } from 'react';

export const SnippylyContext = createContext<any>(null);

export function useSnippyly() {
    return useContext(SnippylyContext);
}