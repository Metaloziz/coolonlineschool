import { createContext, useContext } from 'react';

export interface PageContextValue {}

const PageContext = createContext({} as PageContextValue);
PageContext.displayName = 'PageContext';

export const usePageContext = () => useContext(PageContext);
export default PageContext;
