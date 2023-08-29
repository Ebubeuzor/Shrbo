import React from "react";

const ListingPhotos=()=>{


    return(
        <div>
            <section>  
               <div>
                     <p>Penthouse in La Juarez</p> 
                </div>

                <div className=" flex ">

                    <div className="w-[70%]">
                        <label>Rating(4.8)</label>
                        <label>Reviews(33 reviews)</label>
                        <label>Ottawa,Ontario,Canada</label>
                    </div>
                  
                    <div className="w-[30%]">
                            <button>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24"
                                        
                                        >
                                        <path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                    </svg>

                                    Save
                                </div>
     

                            </button>

                            <button>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24"
                                    >
                                        <path d="M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z" />
                                    </svg>










                                    Share
                                </div>

                            </button>
                    </div>
                

                </div>
            
            </section>





            

        </div>
    );



}

export default ListingPhotos;