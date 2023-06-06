import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Table from './Table';

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);



  return (
    <div className="dashboard">
      <h2>{user.data.Penitentiary}</h2>

      <div className="main-content">
        <Table />
      </div>
    </div>
  );
}
