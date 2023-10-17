import React, { useState } from 'react';
import { Button, Menu } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DropDownItem from '../../atoms/CustomerDashboard/DropDownItem';
import ButtonWithIcon from '../../atoms/CustomerDashboard/ButtonWithIcon';

const FilterButton = ({ typeOptions, statusOptions }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ButtonWithIcon
        icon={<FilterAltIcon />}
        icone={<KeyboardArrowDownIcon />}
        text="Filter By"
        onClick={handleClick}
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <DropDownItem text="Type" icon={<ArrowDropDownIcon />} />
        {typeOptions.map((type) => (
          <DropDownItem key={type} text={type} />
        ))}
        <DropDownItem text="Status" icon={<ArrowDropDownIcon />} />
        {statusOptions.map((status) => (
          <DropDownItem key={status} text={status} />
        ))}
      </Menu>
    </div>
  );
};

export default FilterButton;
