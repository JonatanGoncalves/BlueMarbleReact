import { useEffect } from "react";
import "../assets/css/Button.css";


const Button = ({type, id, className, ripple, onClick, style, children}) => {
    useEffect(()=>{
        const btnRipple = document.querySelectorAll(".btn-ripple")
        btnRipple.forEach((btn) => {
            btn.onClick = ({ pageX, pageY, currentTarget }) =>{
                let x = ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;
                let y = ((pageY - currentTarget.offsetTop) * 100) / currentTarget.offsetHeight;
                const ripple  = document.createElement("span");
                const rippleColor = btn.dataset.ripple || "#212129";
                ripple.classList.add("ripple-effect");
                ripple.style.background = rippleColor

                btn.appendChild(ripple);
                ripple.style.left = x + "%";
                ripple.style.top = y + "%";
                setTimeout(() => {
                    ripple.remove()
                }, 700)
;            };
        });
    },[]);
    return(
        <button type={type ? type : "button"} 
        id={id}
        className={`btn btn-ripple ${className ? className : " "}`}
        data-ripple={ripple}
        onClick={onClick}
        style={style}
        >{children}
        </button>
    )
}

export default Button;