import react from "react";

const Popup = ({handleYesCart, handleNoCart}) =>{


    return(
        <div className="popup"> 
            <div className="popup-content"> </div>
                <p>Do you want to add to the cart </p>
                <button onClick={handleYesCart}>Yes </button>
                <button onClick={handleNoCart}>No </button>

        </div>
    )
}

export default Popup;