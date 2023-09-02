import React from "react";
import Popup from "../../hoc/Popup";

const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


    const AboutProperty=()=>{

        <div className=" py-3 px-6 " >
            <div className="text-2xl font-semibold"><p>About this property</p></div>

            <div>
                <div><p>La Maison du Bayou -</p></div>
                <div>
                        <span>
                                La Maison du Bayou Petite Anse is situated across from Bayou Petite Anse with a glimpse of a Louisiana swamp equipped with moss on live oak trees and palmettos. Hear the peaceful sounds of the habitat Acadiana has to offer. Enjoy real Cajun Country living in this home located on the outskirts of New Iberia.
                                10 minutes away from Jungle Gardens, Tabasco Plant, Avery Island, LA, & Rip Van Winkle Gardens, Jefferson Island, LA. 30 minutes from Lafayette, LA
                        </span>
                </div>
            </div>


        </div>

    }

export default AboutProperty;