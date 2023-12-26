import styled from "@emotion/styled";
import { IDialogProps } from "@/src/hooks/useDialogs";
import cn from "classnames";

const Dialog = ({
  className,
  title,
  description,
  confirmText,
  onConfirm,
  cancelText,
  onCancel,
  onClose = () => {},
}: IDialogProps) => {
  return (
    <Container className={cn("dialog-container", className)}>
      <div className="dialog-content">
        <div className="dialog-title">{title}</div>
        <div className="dialog-description">{description}</div>
        <div className="dialog-buttons">
          {cancelText && (
            <button className="dialog-button btn-cancel" onClick={onCancel}>
              {cancelText}
            </button>
          )}
          <button className="dialog-button btn-confirm" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
      <div className="dialog-screen" onClick={onClose} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  .dialog-content {
    position: relative;
    z-index: 100;
    width: 260px;
    background-color: #fff;
    padding: 24px;
    border-radius: 16px;
    text-align: center;
    .dialog-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      white-space: pre-wrap;
    }
    .dialog-description {
      font-size: 14px;
      color: #777;
      white-space: pre-wrap;
    }
    .dialog-buttons {
      margin-top: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 40px;
        border-radius: 100px;
        &.btn-cancel {
          background-color: #eee;
        }
        &.btn-cancel {
          background-color: #18f;
          color: #fff;
        }
      }
    }
  }
  .dialog-screen {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export default Dialog;
