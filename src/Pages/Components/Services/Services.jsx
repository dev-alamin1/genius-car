//service data

import service1 from '../../../assets/images/services/1.jpg';
import service2 from '../../../assets/images/services/2.jpg';
import service3 from '../../../assets/images/services/3.jpg';
import service4 from '../../../assets/images/services/4.jpg';
import service5 from '../../../assets/images/services/5.jpg';
import service6 from '../../../assets/images/services/6.jpg';

import {BsArrowRightCircleFill} from 'react-icons/bs';

const Services = () => {
    const services = [
        {
            img:service1,
            text:'Electrical System',
            price:"20"
        },
        {
            img:service2,
            text:'Engine Diagnostics',
            price:"30"
        },
        {
            img:service3,
            text:'Auto Car Repair',
            price:"35"
        },
        {
            img:service4,
            text:'Electrical System',
            price:"40"
        },
        {
            img:service5,
            text:'Car Diagnostics',
            price:"40"
        },
        {
            img:service5,
            text:'Auto Repair Expert',
            price:"40"
        },
        {
            img:service6,
            text:'Manually Car Repair',
            price:"40"
        },

        
    ]
    return (
      
             <>{services.map((srvc,index)=>{
                return <div key={index} className="card w-full bg-base-100 shadow-xl  border">
                    <div className='p-3'>
                       <img src={srvc.img} alt={srvc.text} className='h-40 w-full rounded-md' />
                    </div>
                <div className="card-body font-inter">
                  <h2 className="card-title">
                   {srvc.text}
                  </h2>
                  
                  <div className="flex justify-between items-center">
                    <p className='text-[#FF3811] font-bold'>Price : ${srvc.price}</p>
                     <BsArrowRightCircleFill className='text-[#FF3811] text-xl cursor-pointer'/>
                  </div>
                </div>
              </div>
             })}</>
       
    );
};

export default Services;