

interface LoginRegisterProps {
    index: number;
    currentIndex: number;
    onNext: () => void;
}

export const LoginRegisterHome = ({index,currentIndex,onNext}:LoginRegisterProps) => {

    const isActive = index === currentIndex;

    const styles = {
      opacity: 1,
      zIndex: isActive ? 4 : 3,
      pointerEvents: isActive ? "auto" : "none",
      transform: isActive
        ? "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
        : "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -50, 1)",
      transition: "transform 0.5s ease-out",
      margin: isActive ? "0px" : "14px 0px 0px 12px",
    } as React.CSSProperties

  return (
    <>
        <li className="stack__item nextBestActlist loginActnWidget stack__item--current" style={styles}>
            <div className="widgetImage nbaFinalImage loginWidgetImg marB20"></div>
            <div className="commonFreeCharge">
                <p>Login to your</p>
                <p>Snapdeal account</p>
            </div>
            <div className="btn btn-theme-secondary col-xs-16 logInBtnNba marT30">
                <a href="">LOG IN</a>
            </div>
            <div className="controls nextBestActionControls padT15 col-xs-24">
                <div className="newUserRegister nbaRegistr col-xs-14">New user?<span className="registerNbaLink">Register</span></div>
                <button className="btn button--accept btn-light col-xs-8 rfloat" data-stack="stack_yuda" onClick={onNext}>
                    <span className="">NEXT</span>
                </button>
            </div>
        </li>
    </>
  )
}
