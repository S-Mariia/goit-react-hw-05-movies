import { MutatingDots } from 'react-loader-spinner';

import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <MutatingDots
        height="100"
        width="100"
        color="#C07043"
        secondaryColor="#4fa94d"
        radius="10.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Wrapper>
  );
};

export default Loader;
