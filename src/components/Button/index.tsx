import styled from "@emotion/styled";
import { ReactNode } from "react";
import { css } from "@emotion/react";

interface ButtonProps {
  variant?: "primary" | "secondary";
}
interface Props extends ButtonProps {
  children: ReactNode;
  className?: string;
}
const Button = ({ children, className, variant }: Props) => {
  return (
    <Container className={className} variant={variant}>
      {children}
    </Container>
  );
};

const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 11px;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  ${({ variant }) =>
    variant === "secondary" &&
    css`
      color: #767676;
      background-color: #eee;
      transition: 0.2s;
      &:hover {
        box-shadow: 0 1px 2px #00000014;
      }
    `}
`;

export default Button;
