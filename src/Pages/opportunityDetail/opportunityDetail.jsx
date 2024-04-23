import React from 'react';
import Header from './components/header';
import SubHeader from './components/subHeader';
import Content from './components/content';

const OpportunityDetail = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#D9D9D960] h-full pt-5 px-[40px] pb-[50px]">
        <SubHeader />
        <Content />
      </div>
    </div>
  );
};

export default OpportunityDetail;
