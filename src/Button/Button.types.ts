export interface ButtonProps {
  type: "modal" | "cancel" | "agree" | "deny";
  label: string;
  onClick: () => void;
}
