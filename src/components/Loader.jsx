import { ThreeCircles } from 'react-loader-spinner';
import { Container } from '@mui/material';

export const Loader = () => (
  <Container sx={{ display: 'flex', justifyContent: 'center' }}>
    <ThreeCircles
      height="80"
      width="80"
      color="blue"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </Container>
);

export default Loader;