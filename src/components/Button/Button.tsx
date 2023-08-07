import clsx from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  outline?: boolean;
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
}

const Button = (props: ButtonProps): React.ReactElement => {
  const { children, outline, className, ...rest } = props;

  const classNames = clsx(
    {
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
    },
    className
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
