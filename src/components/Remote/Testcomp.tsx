import { FC } from 'react';

const Testcomp: FC<{ name: string }> = () => {
  return (
    <div
      style={{
        height: '100px',
        border: '5px solid green',
        backgroundColor: 'lightgreen',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      LOCAL COMPONENT : App Two Only Component
    </div>
  );
};

export default Testcomp;
