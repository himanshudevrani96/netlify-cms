import React, { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { SpinnerContainer } from "../../shared/styles/GlobalStyles";
import { CrossIcon } from "../../shared/styles/svgIcons";
import Button from "./Button.style";

const ModalContainer = styled.div<any>`
  /* Modal Container */
  .modalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
    background: rgba(128, 129, 145, 0.4);
    animation: fadeIn 0.3s ease-in-out;
  }
  .modal {
    background-color: ${(props) => props.theme.primaryBackground};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    animation: slideFromTop 0.3s ease-in-out;
  }
  // Media query for small screens
  @media (max-width: 768px) {
    .modal {
      width: 100%;
    }
  }

  // Media query for lasrge screens
  @media (min-width: 768px) and (max-width: 1600px) {
    .modal {
      width: 35%;
    }
  }
  //for swap modal

  .swapModal {
    background-color: ${(props) => (props.isDark ? "#131313" : "#ffff")};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    animation: slideFromTop 0.3s ease-in-out;
  }

  /* Modal Header */
  .modalHeader {
    padding: 2px 6px;
    label {
      letter-spacing: 1px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modalContent {
    margin: 0px 20px 0px 20px;
    padding: 16px;
    height: auto;
    li {
      color: ${(props) => props.theme.secondaryText};
      font-family: SuisseLight;
      font-size: 14px;
      line-height: 22px;
    }
  }
  .modalFooter {
    padding: 20px;
    background-color: ${(props) => props.theme.primaryBackground};
    border-radius: 16px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideFromTop {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

interface ModalProps {
  showModal: boolean;
  onClose: (type?: string) => void;
  width?: string;
  children?: ReactNode;
  heading?: string;
  subHeading?: string;
  loader?: boolean;
  isFooter?: boolean;
  height?: string;
  isSwap?: boolean;
  isDark?: boolean;
}

const Modal: React.FC<ModalProps> = ({ showModal, onClose, width, heading, subHeading, children, loader, isFooter, height, isDark, isSwap }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const closeModal = (type?: any) => {
    if (type === "submit") {
      onClose(type);
    } else {
      onClose();
    }
  };

  useEffect(() => {
    // if (showModal) document.body.style.overflow = "hidden";
  }, [showModal]);
  if (!showModal) {
    return null;
  }

  return (
    <ModalContainer isDark={isDark}>
      <div className="modalOverlay">
        <div ref={modalRef} className={isSwap ? "swapModal" : "modal"} style={{ width, height }}>
          <div className="modalHeader">
            <div className="header">
              <h3>{heading}</h3>
            </div>
            <label style={{ marginTop: "6px" }} className="textSecondary">
              {subHeading}
            </label>
          </div>
          <div className="modalContent">
            {" "}
            <Button onClick={closeModal} variant="link" width="auto" padding="0px 10px" height="auto" style={{ float: "right" }}>
              <CrossIcon />
            </Button>
            {children}
          </div>
          {isFooter && (
            <div className="modalFooter">
              <Button onClick={() => closeModal("submit")} type="submit" width="100%" height="48px" disabled={loader}>
                {loader && <SpinnerContainer className="mr-10"></SpinnerContainer>}
                <span style={{ marginLeft: "10px" }}>Submit</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
