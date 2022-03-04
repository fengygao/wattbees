import React from "react";
import Button from 'react-bootstrap/Button';

// eslint-disable-next-line react/display-name
const LinkButton = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <Button className="btnlightblue me-3" onClick={onClick} ref={ref}>
      {children}
    </Button>
  );
});

export default LinkButton;