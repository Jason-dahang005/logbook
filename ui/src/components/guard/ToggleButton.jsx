import React from 'react';
import { useState } from 'react';
import OrgList from '../../components/guard/OrgList'
import TableView from '../../components/guard/TableView'

const ToggleButton = () => {
  const [page, setPage] = useState('orglist');

  const handleToggle = () => {
    setPage(page === 'orglist' ? 'tableview' : 'orglist');
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={page === 'tableview'} onChange={handleToggle} />
        Toggle
      </label>

      {page === 'orglist' && <OrgList/>}
      {page === 'tableview' && <TableView />}
    </div>
  );
}

export default ToggleButton