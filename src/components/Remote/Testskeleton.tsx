import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Testskeleton() {
  return (
    <div
      style={{
        height: '300px',
        border: '5px solid black',
        backgroundColor: 'lightyellow',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        padding: '20px',
      }}
    >
      <Stack spacing={1}>
        <h3>REMOTE SKELETON COMPONENT : APP TWO - IN NEW MUI V5.14.2</h3>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    </div>
  );
}
