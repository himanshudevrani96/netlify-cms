import styled from "styled-components";

interface ModalProps {
  children: React.ReactNode;
  onClose?: Function;
  enableBackgroundClick?: boolean;
  padding?: string;
  width?: string;
  height?: string;
}

const CustomModal = (props: ModalProps) => {
  const { children, onClose, enableBackgroundClick, padding, width, height } = props;

  const handleBackgroundClick = (e: any) => {
    if (e.target === e.currentTarget && enableBackgroundClick && onClose) {
      onClose();
    }
  };

  return (
    <ModalContainer onClick={handleBackgroundClick}>
      <ModalContent padding={padding} width={width} height={height}>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default CustomModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a9aac21e;
  z-index: 9999;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div<{
  padding?: string;
  width?: string;
  height?: string;
}>`
  min-width: ${({ width }) => (width ? width : "450px")};
  background-color: #fff;
  padding: ${({ padding }) => (padding ? padding : "0")};
  box-shadow: 0px 98px 66px 0px rgba(19, 18, 66, 0.02), 1px 4px 104px 0px rgba(20, 20, 43, 0.04), 0px 54px 54px 0px rgba(74, 58, 255, 0.02);
  border-radius: 8px;
  width: ${({ width }) => (width ? width : "fit-content")};
  height: ${({ height }) => (height ? height : "fit-content")};
  background-color: #0e120e;

  @media (max-width: 800px) {
    min-width: unset;
  }
`;
