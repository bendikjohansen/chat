import React from 'react';
import { Link } from "react-router-dom";

interface LinkProps {
  to: string;
}

const ThreadLink = React.forwardRef<HTMLAnchorElement, LinkProps>(({to, ...props}, ref) => <Link to={to} {...props} ref={ref} />);

export default ThreadLink;
