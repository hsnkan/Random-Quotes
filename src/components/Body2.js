// align, style, element and children are PROPS
export function Body2({
  align = "left",
  style = "normal",
  element = "p",
  children,
}) {
  const allignClass = () => {
    switch (align) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "justify":
        return "text-justify";
      default:
        return "";
    }
  };

  const styleClass = () => {
    switch (style) {
      case "normal":
        return "not-italic";
      case "italic":
        return "italic";
      default:
        return "";
    }
  };

  if (element === "span") {
    return (
      <span className={`${allignClass()} ${styleClass()}`}>{children}</span>
    );
  } else {
    return <p className={`${allignClass()} ${styleClass()}`}>{children}</p>;
  }
}
