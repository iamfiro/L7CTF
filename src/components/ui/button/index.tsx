import { LucideIcon } from "lucide-react";
import React from "react";

import Typo from "../typo";

import styles from "./button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  size?: "lg" | "md";
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  size = "md",
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  const sizeClass = styles[`button--${size}`];
  const disabledClass = disabled ? styles["button--disabled"] : "";
  const Text = size === "lg" ? Typo.Body : Typo.Body;
  return (
    <button
      className={`${styles.button} ${sizeClass} ${disabledClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {LeadingIcon && (
        <LeadingIcon className={styles["button__leading-icon"]} />
      )}
      <Text className={styles["button__content"]}>{children}</Text>
      {TrailingIcon && (
        <TrailingIcon className={styles["button__trailing-icon"]} />
      )}
    </button>
  );
}
