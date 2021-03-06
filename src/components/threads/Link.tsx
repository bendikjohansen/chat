import React from 'react';
import { Link } from "react-router-dom";

interface LinkProps {
  to: string;
}

const ComponentLink = React.forwardRef<HTMLAnchorElement, LinkProps>(({to, ...props}, ref) => <Link to={to} {...props} ref={ref} />);

export default ComponentLink;
