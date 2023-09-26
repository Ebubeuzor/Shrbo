import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { BsHouseDoor, BsArrowBarRight } from 'react-icons/bs'; // Import the icons
import rightArrow from "../../assets/svg/line-angle-right-icon.svg"
import defaultProfile from "../../assets/svg/avatar-icon.svg"


export default function HostModal({ isOpen, onClose }) {
    const [profilePicture, setProfilePicture] = useState(defaultProfile);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePicture(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center md:z-[99] text-black">
        <div className="bg-white w-full h-full  p-4 z-[999]">
          <div className='text-black'>
            <h1 className='text-2xl'>Menu</h1>

               
            <div>
            <section>
              <h2 className='mt-6'>Profile Picture</h2>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  style={{ display: 'none' }}
                  id="profilePictureInput"
                />
                <label htmlFor="profilePictureInput" className='w-fit'>
                  <div
                    className='cursor-pointer bg-slate-200'
                    style={{
                      backgroundImage: `url(${profilePicture})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                    }}
                  >
                    {!profilePicture && (
                      <img
                        src={defaultProfile}
                        alt="Default Profile"
                        width="100"
                        height="100"
                      />
                    )}
                  </div>
                </label>
              </div>
            </section>
                <section>
                    <h2 className='mt-6'>Hosting</h2>

                    <ul>
                        <li>
                            <div className='shadow-lg p-6 my-4 border rounded-xl'>
                                <Link className='flex justify-between items-center'>
                                    <div className='bg-orange-400 text-white rounded-lg p-4'><BsHouseDoor /></div> 
                                    <div className='text-xl'>Listings</div>
                                    <div className='text-2xl'><img src={rightArrow} className='w-4 h-6' alt="" /></div> {/* Right arrow icon */}
                                </Link>
                            </div>
                        </li>

                        <li>
                            <div className=' p-6 my-4'>
                                <Link className='flex justify-between items-center'>
                                    <div className='bg-orange-400 text-white rounded-full p-2'><BsHouseDoor /></div> 
                                    <div className='text-xl'>Reservations</div>
                                    <div className='text-2xl'><img src={rightArrow} className='w-4 h-6' alt="" /></div> {/* Right arrow icon */}
                                </Link>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
          </div>
          <button className="text-blue-500" onClick={onClose}>
            Close Modal
          </button>
        </div>
      </div>
    )
  );
}
