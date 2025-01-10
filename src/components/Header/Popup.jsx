import react,{useEffect} from "react";

const Popup = ({handleYesCart, handleNoCart}) =>{

    useEffect(() => {
        const handleKeydown=(event)=>{
            if(event.key === "Escape"){
                handleNoCart();
            }
        }

        window.addEventListener("keydown",handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown)
        }
    }, [])

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