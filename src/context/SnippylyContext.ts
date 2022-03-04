import { Snippyly } from '@snippyly/sdk';
import { createContext, useContext } from 'react';

export const SnippylyContext = createContext<{ snippyly: Snippyly }>({ snippyly: null } as any);

export function useSnippyly() {
    return useContext(SnippylyContext);
}