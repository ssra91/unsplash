import styled from "@emotion/styled";
import cn from "classnames";
import { IToastProps, ToastType } from "@/src/hooks/useToasts";
import { useEffect, useState } from "react";

const getToastIcon = (type?: ToastType) => {
  switch (type) {
    case "success":
      return "si";
    case "error":
      return "ei";
    case "warning":
      return "wi";
    case "info":
      return "ii";
    default:
      return "di";
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
      {icon && <div className="toast-icon">icon</div>}
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
  min-width: 200px;
  transform: translate(-50%, 100px);
  opacity: 0;
  transition: 0.25s;
  &.is-active {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  .toast-icon {
    padding: 0 8px;
    width: 30px;
  }
  .toast-message {
    padding: 0 8px;
    font-size: 14px;
  }
`;

export default Toast;
