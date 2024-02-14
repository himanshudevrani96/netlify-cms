import React, { useEffect, useRef, ReactNode } from "react";
import styled from "styled-components";
import { CrossIcon } from "../styles/svgIcons";
import Button from "./Button.style";
import { SpinnerContainer } from "../styles/GlobalStyles";

const ModalContainer = styled.div`
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

  /* Modal Header */
  .modalHeader {
    padding: 32px 36px;
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
    overflow-y: scroll;
    height: 450px;
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
}

const Modal: React.FC<ModalProps> = ({ showModal, onClose, width, heading, subHeading, children, loader, isFooter, height }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const closeModal = (type?: any) => {
    if (type === "submit") {
      onClose(type);
    } else {
      onClose();
    }
  };

  // Close the modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  if (!showModal) {
    return null;
  }

  return (
    <ModalContainer>
      <div className="modalOverlay">
        <div ref={modalRef} className="modal" style={{ width, height }}>
          <div className="modalHeader">
            <div className="header">
              <h3>{heading}</h3>
              <Button onClick={closeModal} variant="link" width="auto" padding="0px 10px " height="auto">
                <CrossIcon />
              </Button>
            </div>
            <label className="textSecondary mt-6">{subHeading}</label>
          </div>
          <div className="modalContent">{children}</div>
          {isFooter && (
            <div className="modalFooter">
              <Button onClick={() => closeModal("submit")} type="submit" width="100%" height="48px" disabled={loader}>
                {loader && <SpinnerContainer className="mr-10"></SpinnerContainer>}
                <span className="ml-10">Submit</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
