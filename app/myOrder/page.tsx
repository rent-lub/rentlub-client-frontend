import React from 'react';
import MyOrderCard from '~/components/myOrder/MyOrderCard';

const MyOrder = () => {
  
    return (
      <>
        <div className="bg-white h-screen min-w-full px-5 relative flex flex-col overflow-y-hidden">
          <h1 className='py-5 text-3xl font-medium'>My Order</h1>
          <div>
            <p className='pb-2'>สินค้าครบกำหนดคืน</p>
            <MyOrderCard />
          </div>
          <div className='my-5 border-1.5 bg-slate-200 rounded-xl'></div>
          <div>
            <p className='pb-2'>ได้รับสินค้าแล้ว</p>
            <MyOrderCard />
          </div>
          <div className='my-5 border-1.5 bg-slate-200 rounded-xl'></div>
          <div>
            <p className='pb-2'>สินค้ากำลังส่ง</p>
            <MyOrderCard />
          </div>
          <div className='my-5 border-1.5 bg-slate-200 rounded-xl'></div>
          <div>
            <p className='pb-2'>คืนแล้ว</p>
            <MyOrderCard />
          </div>
        </div>
      </>
    );
  };
  
export default MyOrder;
  