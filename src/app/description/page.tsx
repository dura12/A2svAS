import React, { Suspense } from 'react';
import Description from '../../components/Description';

const Page = () => {
  return (
    <Suspense>
      <Description />
    </Suspense>
  );
};

export default Page;
