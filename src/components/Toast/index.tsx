import styled from "@emotion/styled";
import cn from "classnames";
import { IToastProps, ToastType } from "@/src/hooks/useToasts";
import { useEffect, useState } from "react";
import {
  MdErrorOutline,
  MdCheckCircleOutline,
  MdOutlineWarningAmber,
} from "react-icons/md";

const getToastIcon = (type?: ToastType) => {
  switch (type) {
    case "success":
      return <MdCheckCircleOutline />;
    case "error":
      return <MdErrorOutline />;
    case "warning":
      return <MdOutlineWarningAmber />;
    default:
      return null;
  }
};

const Toast = ({
  className,
  type,
  message,
  duration = 3000,
  onClose = () => {},
  ...props
}: IToastProps) => {
  const [isActive, setIsActive] = useState(true);
  const icon = getToastIcon(type);
  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, duration - 300);
    setTimeout(() => {
      onClose();
    }, duration);
  }, [duration]);
  return (
    <Container
      className={cn("toast-container", className, type, {
        "is-active": isActive,
      })}
      {...props}
    >
      {icon && <div className="toast-icon">{icon}</div>}
      <div className="toast-message">{message}</div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 10px;
  background-color: #fff;
  border-radius: 100px;
  border: 1px solid #eee;
  min-width: 200px;
  transform: translate(-50%, 100px);
  opacity: 0;
  transition: 0.25s;

  &.success {
    color: #18f;
  }

  &.error {
    color: #ff5252;
  }

  &.waring {
    color: #f6e49b;
  }

  &.is-active {
    transform: translate(-50%, 0);
    opacity: 1;
  }

  .toast-icon {
    padding: 0 8px;
    width: 30px;
    display: flex;
  }

  .toast-message {
    font-size: 14px;
  }
`;

export default Toast;
