
import React from "react";

import { SelectProps } from "./Select.types";

import "./Select.css";

const Select: React.FC<SelectProps> = ({ foo }) => (
    <div data-testid="Select" className="foo-bar">{foo}</div>
);

export default Select;

