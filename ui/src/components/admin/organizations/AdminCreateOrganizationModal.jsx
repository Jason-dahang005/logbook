import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { useContext, useEffect } from 'react'
import { AdminOrganizationContext } from '../../../context/admin/AdminOrganizationContext'


const AdminCreateOrganizationModal = () => {

  const { isModalOpen, closeModal, guard, name, setName, user_id, setUser_id, description, setDescription, handleCreateOrganization } = useContext(AdminOrganizationContext)

  // useEffect(() => {
  //   console.log(guard)
  // }, [guard])

  if(!isModalOpen) {
    return null
  }

  return (
    <div className='create-log-modal'>
      <div className='create-log-modal-wrapper'>
        <div className="create-log-modal-container">
          <div className="create-log-modal-header">
            <h3 className='create-log-modal-title'>Create Organization</h3>
            <div className='absolute right-0 pr-5'>
             <IoMdClose size={15} onClick={closeModal} className='hover:cursor-pointer rounded-full'/>
            </div>
          </div>
          <div className="create-log-modal-body">
            <form onSubmit={handleCreateOrganization}>
              <div className="form-group">
                <label className='create-log-modal-form-label' htmlFor="">Name</label>
                <input name='name'type="text" className='create-log-modal-form-input' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}/>
              </div>

              <div className="form-group">
                <label className='create-log-modal-form-label' htmlFor="">Security guard</label>
                <select name="guard" className='create-log-modal-form-input' id="" value={user_id} onChange={(e) => setUser_id(e.target.value)}>
                  <option value="">Select guard</option>
                 {
                  guard.map((item) =>{
                    return (
                      <option value={item.id} key={item.id}>{item.firstname}</option>
                    )
                  })
                 }
                </select>
              </div>

              <div className="form-group">
                <label className='create-log-modal-form-label' htmlFor="">Description</label>
                <textarea name="description" id="" cols="30" rows="5" className='create-log-modal-form-input' placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>

              <div className="form-group">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCreateOrganizationModal
