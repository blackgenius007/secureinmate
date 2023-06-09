import React, { Fragment } from 'react';
import Table from './inmatesTable';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Chip  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { PersonOutline } from '@mui/icons-material'



function Inmates() {
  const { user } = useSelector(
    (state) => state.auth
  );

  return (
    <Fragment>
<div>
  <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center',color:'grey' }}>
    INMATE DATABASE FOR {user.data.Penitentiary} CORRECTIONAL CENTRE
  </h1>
</div>
<br/>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <label>
        <Chip
          size="small"
          icon={<CloseIcon />}
          label="Sentenced"
          clickable
          style={{ backgroundColor: '#FFFE71' }}
          // onClick={(e) => this.handleRecommend(e)}
          onClick={() => this.handleEditRec()}
          // deleteIcon={<DoneIcon />}
        />
      </label>
      <label>
        <Chip
          size="small"
          icon={<PersonOutline />}
          label="Inmates Gallery"
          clickable
          style={{ backgroundColor: '#7df9ff' }}
          onClick={() => this.handleEditPersonal()}
          // deleteIcon={<DoneIcon />}
        />
      </label>
      <label>
        <Chip
          size="small"
          icon={<AccessTimeIcon />}
          label="Latest Inmates"
          clickable
          style={{ backgroundColor: '#FFFE71' }}
          // onClick={(e) => this.handleRecommend(e)}
          onClick={() => this.handleEditRec()}
          // deleteIcon={<DoneIcon />}
        />
      </label>
    </div>
              
<Table />


    </Fragment>
    
    
  )
}

export default Inmates