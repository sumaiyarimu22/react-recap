const Featured = () => {
  return (
    <div className='container p-5 shadow-sm border bg-white border-gray-100'>
      {" "}
      <div className='w-full md:grid grid-cols-2 gap-2 h-60vh'>
        <div className='item-1 item '>
          <img
            className='item-image-1 duration-300 ease-in w-full'
            src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgM2SvZj7iYPO5Adj_1F0hf1iF7gLEpLtFrSG1RQmxZjhBcFSSD1c70CohCxhsqms_ttNPXQx8Rqj-6ThM-hIej6xYjZJPawWyRgtA-38xas418k7NHQmpixUaNY57GfqqgGpZI0M1YQoE/w567-h442-p-k-no-nu-rw/pbt66.jpg'
            alt=''
          />
          <div className='content'>
            <div className='entry-header entry-info'>
              <span className='entry-category'>Apple</span>
              <h2 className='entry-title text-[25px] leading-8'>
                11 of Best Laptops Evaluated Based on Budget
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

        <div className='grid-item-right'>
          <div className='grid-item-2'>
            <div className='item-2 item h-full'>
              <img
                className='item-image-2 duration-300 ease-in w-full'
                src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKVVdjgetCdFMligh1M2BRz1E54l-dsgBjFn5VNYrjIv2qe0fAkcaxrGcE7wK_ib3WyC-OEFihGaGl_nXS9Ij6Smdd7wrOPZbo9x7-miXlUzuxcmEPExRJn6Ki6A_kEYXAr4Oz8hdADTI/w567-h220-p-k-no-nu-rw/pbt65.jpg'
                alt=''
              />
              <div className='content'>
                <div className='entry-header entry-info'>
                  <span className='entry-category'>Laptops</span>
                  <h2 className='entry-title text-[19px] leading-6'>
                    Apple Watch Series 5 is the Best One Yet By Consumer
                  </h2>
                  <div className='entry-meta'>
                    <span className='entry-time mi'>
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
          </div>
          <div className='grid-item-3 '>
            <div className='item-3 item h-full'>
              <img
                className='item-image-3 duration-300 ease-in w-full'
                src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZw4SIW00OdWX2l9hsAyGwkGgy0nXj9RxPKYO1gZavyrBS_16n1E0YsXzs7HKh3rqS1p1Btqlc5_BbFk46uVy_K37xc7yLaTE3F71HVafWM7aP1TVdEWerHDraGuVO6ebC-eB31N06tls/w282-h220-p-k-no-nu-rw/pbt61.jpg'
                alt=''
              />
              <div className='content'>
                <div className='entry-header entry-info'>
                  <span className='entry-category'>Laptops</span>
                  <h2 className='entry-title text-[15px] leading-6'>
                    Here’s What People Think of iOS 13 New Dark Mode
                  </h2>
                  <div className='entry-meta'>
                    <span className='entry-time mi'>
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
          </div>
          <div className='grid-item-4'>
            <div className='item-4 item h-full'>
              {" "}
              <img
                className='item-image-4 duration-300 ease-in w-full'
                src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigRYBd8MAmFqAE3kBFhu-771Ki_eAETFXMNgTbFHb7LjskuLERYszFvyctASraWt239Ng6GMruBnrjPNxRmzWKZzhH8_m6KNXOPgueBlGg5ycYgwQKmuHpI3x_tEC2gFQ7b6X6_OjHzXk/w282-h220-p-k-no-nu-rw/pbt62.jpg'
                alt=''
              />
              <div className='content'>
                <div className='entry-header entry-info'>
                  <span className='entry-category'>Apple</span>
                  <h2 className='entry-title text-[15px] leading-6'>
                    18 Practices for Building Responsive Web Applications
                  </h2>
                  <div className='entry-meta'>
                    <span className='entry-time mi'>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
