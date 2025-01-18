import clsx from "clsx";

export const Button = ({
  disabled = false,
  onClick,
  children,
}: {
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={clsx(
        "bg-blue-500 text-white p-2 rounded-md",
        disabled && "bg-gray-500"
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
