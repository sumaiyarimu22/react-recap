import React from "react";
import TitleWrap from "../TitleWrap";
import BlockList from "../contentWrapper/BlockList";

const Gadets = () => {
  return (
    <>
      <TitleWrap title='GADGETS' />

      <div className='space-y-5'>
        <div className='item-1 item max-h-[180px]'>
          <img
            className='item-image-1 duration-300 ease-in'
            src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinLREmqwiNQ61VqfAGg8QTYhCrAJpAQR_mkrM_3ggA_7TVkXPPaLOm8NFc9GOHaGMdG_Zg-Ks5B_s1bZyNNKyQBsRqWuD-wa3ncN3It_js6ttpLCitd3CTSk9zTcdNM7dQJAgkEYcvLSc/w365-h369-p-k-no-nu-rw/pbt42.jpg'
            alt=''
          />
          <div className='content'>
            <div className='entry-header entry-info'>
              <span className='entry-category'>Healthy</span>
              <h2 className='entry-title text-[19px] leading-6'>
                How to Get COVID-19 Related Alerts on Your Phone
              </h2>
              <div className='entry-meta'>
                <span className='entry-author mi'>
                  <span className='sp'>by</span>
                  <span className='author-name'> John Doe </span>
                </span>
                <span className='entry-time mi'>
                  <span className='sp'>-</span>
                  <time
                    className='published'
                    dateTime='2021-08-02T06:33:00.013-07:00'
                  >
                    August 02, 2021
                  </time>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 justify-between'>
          <BlockList />
        </div>
      </div>
    </>
  );
};

export default Gadets;
