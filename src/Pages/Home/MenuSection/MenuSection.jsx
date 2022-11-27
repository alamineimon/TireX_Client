import React from 'react';
import { Link } from 'react-router-dom';

const MenuSection = (props) => {
    return (
      <div className="container lg:ml-4 my-6">
        {/* card 1 */}
        <div className="grid md:grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/BzBLjBt/rc-125-2021-right-side-view-2.webp"
                alt="KTM Bike"
              />
            </figure>
            <div className="card-body text-cente">
              <h2 className="card-title ">KTM BIKE</h2>
              <p className="text-left">
                Choose a Bike For You from this KTM section
              </p>
              <div className="card-actions justify-end">
                {/* ktmbike */}
                <Link to="/ktmbike">
                  <button className="btn hover:text-gray-100 rounded hover:bg-green-600 bg-blue-600 border-none text-white">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/W27Ff75/z900-right-front-three-quarter.gif"
                alt="KHAWASHAKI BIKE"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">KHAWASHAKI BIKE</h2>
              <p className="text-left">
                Choose a Bike For You from this KHAWASHAKI section
              </p>
              <div className="card-actions justify-end">
                {/* kawashakibike */}
                <Link to="/kawashakibike">
                  <button className="btn hover:text-gray-100 rounded hover:bg-green-600 bg-blue-600 border-none text-white">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/ng3zQMp/2022-Yamaha-R1-M.jpg"
                alt="YAMAHA BIKE"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">YAMAHA BIKE</h2>
              <p className="text-left">
                Choose a Bike For You from this YAMAHA section
              </p>
              <div className="card-actions justify-end">
                <Link to="/yamahabike">
                  <button className="btn hover:text-gray-100 rounded hover:bg-green-600 bg-blue-600 border-none text-white">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MenuSection;