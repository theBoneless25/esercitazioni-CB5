import "./button.css";

const buttonVariantMap = {
  primary: "text-xl color-pink",
  secondary: "text-sm color-red",
};

export function Button(props) {
  console.log("Button props:", props);

  const {
    className = "",
    children = "Non ho {children}",
    variant = "none",
    ...otherAttributes
  } = props;

  return (
    <button
      className={`Button Button--variant-${variant} ${className}`}
      {...otherAttributes}
    >
      {children}
    </button>
  );
}
