import { Snippyly } from '@snippyly/sdk';
import { createContext, useContext } from 'react';

export const SnippylyContext = createContext<{ client: Snippyly }>({ client: null } as any);

export function useSnippylyClient() {
    return useContext(SnippylyContext);
}