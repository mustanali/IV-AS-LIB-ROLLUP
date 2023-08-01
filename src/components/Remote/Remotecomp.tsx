import {FC, useState} from 'react';
import Newsnackbar from "./Newsnackbar.tsx";
import Button from "@mui/material/Button";

const submitToServer = (count: number) => {
    console.log(JSON.stringify({ count: count }));
    // write fetch code to post a request to server
    fetch('https://6453097ce9ac46cedf1c11b8.mockapi.io/ifminterview/count',
        { method: 'POST', body: JSON.stringify({count: count }) });
}

const Remotecomp: FC<{ name: string; color: string }> = ({ name, color }) => {
    const [count, setCount] = useState(0);
      return (
        <div
          style={{
            height: '300px',
            border: '5px solid black',
            padding: '20px',
            backgroundColor: 'lightyellow',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontWeight: 'bold',
          }}
        >
      <h3 style={{ color: color }}>REMOTE PARENT COMPONENT : APP TWO : {name}</h3>
      <br/>
      <Button variant={'contained'} onClick={() => { const c = count + 1; setCount(c); submitToServer(c);}}>Click here : {count}</Button>
      <br/>
      <Newsnackbar></Newsnackbar>
    </div>
  );
};

export default Remotecomp;
