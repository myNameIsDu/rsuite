import React from 'react';

export interface TreeContextProps {
  inline?: boolean;
  dragNodeMover?: React.MutableRefObject<any>;
}

const TreeContext = React.createContext<TreeContextProps>({});

export default TreeContext;
